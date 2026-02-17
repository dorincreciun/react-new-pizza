import { apiClient } from "@shared/lib"

import type { LoginDto } from "../model/types"


export const login = async (dto: LoginDto) => {
    return await apiClient.POST("/auth/login", { body: dto })
}
