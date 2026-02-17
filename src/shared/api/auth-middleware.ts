import type { Middleware } from "openapi-fetch"

interface AuthConfig {
    getToken: () => string | null
    setToken: (token: string | null) => void
    onRefreshFailed: () => void
}

export const createAuthMiddleware = (config: AuthConfig): Middleware => ({
    async onRequest({ request }) {
        const token = config.getToken()
        if (token) {
            request.headers.set("Authorization", `Bearer ${token}`)
        }
        return request
    },

    async onResponse({ request, response }): Promise<Response | undefined> {
        const url = new URL(request.url)
        const isRefreshEndpoint = url.pathname.endsWith("/auth/refresh")

        if (response.status !== 401 || isRefreshEndpoint) {
            return response
        }

        try {
            const refreshResponse = await fetch(`${__API_URL__}/auth/refresh`, {
                method: "POST",
                credentials: "include",
            })

            if (refreshResponse.ok) {
                const result = await refreshResponse.json()
                const token: string = result.data.accessToken

                config.setToken(token)

                const newRequest = request.clone()
                newRequest.headers.set("Authorization", `Bearer ${token}`)

                return fetch(newRequest)
            } else {
                config.setToken(null)
                config.onRefreshFailed()
                return response
            }
        } catch (e) {
            console.error("Refresh failed", e)
            config.setToken(null)
            config.onRefreshFailed()
            return response
        }
    },
})
