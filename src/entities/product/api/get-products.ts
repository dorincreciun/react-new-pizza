import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getProducts = async (categoryId?: number): Promise<ApiSchema<'ProductResponseDto'>[]> => {
    const { data, error } = await apiClient.GET("/products", {
        ...(categoryId ? { params: { query: { categoryId } } } : {}),
    })

    const products = data?.data

    if (error || !products) {
        throw error || new Error("No data returned")
    }

    return products
}