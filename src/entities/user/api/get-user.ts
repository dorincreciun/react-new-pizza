import { apiClient } from "@shared/lib/openapi-fetch"
import type { ApiSchema } from "@shared/types"

export const getUser = async (): Promise<ApiSchema<"UserResponseDto"> | null> => {
    try {
        const { data, error, response } = await apiClient.GET("/auth/me")

        if (error) {
            if (response.status === 401) {
                return null
            }
            console.error("Eroare Server:", error.message || error)
            return null
        }

        return data?.data ?? null
    } catch (e) {
        console.error("Eroare Rețea/Infrastructură:", e)
        return null
    }
}
