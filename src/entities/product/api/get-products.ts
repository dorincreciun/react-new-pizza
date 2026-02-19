import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getProducts = async (
    categoryId?: number,
    page?: number,
): Promise<ApiSchema<"ProductListResponseDto">> => {
    const { data, error } = await apiClient.GET("/products", {
        ...(categoryId ? { params: { query: { categoryId, page } } } : {}),
    })

    const products = data?.data
    const meta = data?.meta

    if (error || !products || !meta) {
        throw error || new Error("No data returned")
    }

    return { data: products, meta }
}
