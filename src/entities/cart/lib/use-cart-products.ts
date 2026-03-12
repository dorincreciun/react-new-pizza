import { useQuery } from "@tanstack/react-query"

import { mapDtoProduct } from "@entities/product/model/map-dto-product"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProductCart } from "../api/get-product-cart"

export const useCartProducts = (options: ApiSchema<'BulkProductItemRequestDto'>[]) => {
    return useQuery({
        queryKey: QueryKeys.cartProducts({ options }),
        queryFn: () => getProductCart(options),
        select: (data) => data.map(mapDtoProduct)
    })
}