import { useQuery } from "@tanstack/react-query"

import type { ProductEntity } from "@entities/product"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProduct } from "../api/get-product"
import { mapDtoProduct } from "../model/map-dto-product"

export const useProduct = (productId: number) => {
    return useQuery({
        queryKey: QueryKeys.productPage(productId),
        queryFn: (): Promise<ApiSchema<"ProductResponseDto">> => getProduct(productId),
        select: (data): ProductEntity => mapDtoProduct(data),
    })
}
