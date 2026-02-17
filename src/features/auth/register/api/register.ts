import { apiClient } from "@shared/lib"

import type { RegisterDto } from "../model/types"

export const register = async (dto: RegisterDto) => {
    return await apiClient.POST("/auth/register", { body: dto })
}
