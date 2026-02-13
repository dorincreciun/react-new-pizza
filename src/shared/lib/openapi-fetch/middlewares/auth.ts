import type {Middleware} from "openapi-fetch";
import {useSessionStore} from "@entities/session";

export const auth: Middleware = {
    async onRequest({request}): Promise<Request> {
        const token = useSessionStore.getState().accessToken;
        if (token) {
            request.headers.set("Authorization", `Bearer ${token}`);
        }
        return request;
    },

    async onResponse({request, response}): Promise<Response | undefined> {
        const url = new URL(request.url);
        const isRefreshEndpoint = url.pathname.endsWith("/auth/refresh");

        if (response.status !== 401 || isRefreshEndpoint) {
            return response;
        }

        try {
            const refresh = await fetch(`${__API_URL__}/auth/refresh`, {
                method: "POST",
                credentials: "include"
            });

            if (refresh.ok) {
                const result = await refresh.json();
                const newToken = result.data.accessToken;

                useSessionStore.getState().setSession({
                    user: useSessionStore.getState().user!,
                    token: newToken
                });

                const newRequest = request.clone();
                newRequest.headers.set("Authorization", `Bearer ${newToken}`);

                return fetch(newRequest);
            } else {
                useSessionStore.getState().killSession();
                return response;
            }
        } catch (e) {
            console.error("Refresh failed", e);
            useSessionStore.getState().killSession();
            return response;
        }
    }
};