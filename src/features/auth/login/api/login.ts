import { apiClient } from "@shared/lib/openapi-fetch"

import type { LoginDto } from "../model/types"


export const login = async (dto: LoginDto) => {
    return await apiClient.POST("/auth/login", { body: dto })
}
