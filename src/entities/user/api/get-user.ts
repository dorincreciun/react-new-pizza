import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getUser = async (): Promise<ApiSchema<'UserResponseDto'>> => {
    const { data, error } = await apiClient.GET("/auth/me")

    const user = data?.data

    if (error || !user) {
        throw error || new Error("No data returned")
    }

    return user
}