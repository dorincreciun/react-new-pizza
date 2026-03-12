import { apiClient } from "@shared/lib"
import type { ApiSchema } from "@shared/types"

export const getProductCart = async (options: ApiSchema<"BulkProductItemRequestDto">[]) => {
    const { data, error } = await apiClient.POST("/products/bulk", {
        body: { items: options },
    })

    const products = data?.data

    if (error || !products) {
        throw error || new Error("No data returned")
    }

    return products
}