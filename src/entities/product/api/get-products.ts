import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getProducts = async <T extends Record<string, string | string[] | number>>(
    params: T,
): Promise<ApiSchema<"ProductListResponseDto">> => {
    const { data, error } = await apiClient.GET("/products", {
        params: { query: params },
    })

    const products = data?.data
    const meta = data?.meta

    if (error || !products || !meta) {
        throw error || new Error("No data returned")
    }

    return { data: products, meta }
}
