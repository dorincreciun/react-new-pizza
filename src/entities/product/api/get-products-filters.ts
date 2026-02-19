import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getProductsFilters = async (
    categoryId?: number,
): Promise<ApiSchema<"ProductFiltersResponseDto">> => {
    const { data, error } = await apiClient.GET("/products/filters", {
        ...(categoryId ? { params: { query: { categoryId } } } : {}),
    })

    const filters = data?.data

    if (error || !filters) {
        throw error || new Error("No data returned")
    }

    return filters
}
