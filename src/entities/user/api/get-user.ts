import type { UserEntity } from "@entities/user/model/types"

import { apiClient } from "@shared/lib"

export const getUser = async (): Promise<UserEntity> => {
    const { data, error } = await apiClient.GET("/auth/me")

    if (error || !data?.data) {
        throw error || new Error("No data returned")
    }

    return data.data
}