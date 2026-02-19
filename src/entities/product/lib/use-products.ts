import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProducts } from "../api/get-products"
import { mapDtoProduct } from "../model/map-dto-product"

export const useProducts = (categoryId?: number, page?: number) => {
    return useQuery({
        queryKey: QueryKeys.productsList(categoryId, page),
        queryFn: (): Promise<ApiSchema<"ProductListResponseDto">> => getProducts(categoryId, page),
        select: ({ data, meta }) => ({
            data: data.map(mapDtoProduct),
            meta,
        }),
    })
}
