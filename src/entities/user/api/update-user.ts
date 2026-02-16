import { apiClient } from "@shared/lib/openapi-fetch"
import type { ApiSchema } from "@shared/types"

export const updateUser = async (
    dto: ApiSchema<"UpdateProfileDto">,
): Promise<ApiSchema<"UserResponseDto">> => {
    const { data, error } = await apiClient.PATCH("/auth/profile", {
        body: dto,
    })

    if (error) {
        console.error("[UpdateUser Error]:", error)
        throw new Error(error.error)
    }

    if (!data?.data) {
        throw new Error("Serverul nu a returnat date valide")
    }

    return data.data
}
