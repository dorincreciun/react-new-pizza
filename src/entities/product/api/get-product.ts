import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getProduct = async (productId: number): Promise<ApiSchema<"ProductResponseDto">> => {
    const { data, error } = await apiClient.GET("/products/{id}", {
        params: {
            path: {
                id: productId,
            },
        },
    })

    const product = data?.data

    if (error || !product) {
        throw error || new Error("No data returned")
    }

    return { ...product }
}
