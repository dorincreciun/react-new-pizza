import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProducts } from "../api/get-products"
import { mapDtoProduct } from "../model/map-dto-product"

type ProductFiltersParams = {
    page?: number
    categoryId?: number
    size?: string | string[]
    ingredients?: string | string[]
    types?: string | string[]
}

export const useProducts = (params: ProductFiltersParams) => {
    return useQuery({
        queryKey: QueryKeys.productsList(params),
        queryFn: (): Promise<ApiSchema<"ProductListResponseDto">> => getProducts(params),
        select: ({ data, meta }) => ({
            data: data.map(mapDtoProduct),
            meta,
        }),
    })
}
