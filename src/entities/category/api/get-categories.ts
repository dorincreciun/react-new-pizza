import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getCategories = async (): Promise<Array<ApiSchema<"CategoryResponseDto">>> => {
    const { data, error } = await apiClient.GET("/categories")

    const categories = data?.data

    if (error || !categories) {
        throw error || new Error("No data returned")
    }

    return categories
}