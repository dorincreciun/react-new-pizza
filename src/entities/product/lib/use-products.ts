import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProducts } from "../api/get-products"
import { mapDtoProduct } from "../model/map-dto-product"
import type { ProductEntity } from "../model/types"

export const useProducts = (categoryId?: number) => {
    return useQuery({
        queryKey: QueryKeys.productsList(categoryId),
        queryFn: (): Promise<ApiSchema<"ProductResponseDto">[]> => getProducts(categoryId),
        select: (data): ProductEntity[] => data.map(mapDtoProduct),
    })
}
