import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProductsFilters } from "../api/get-products-filters"
import { mapDtoFilterOptions } from "../model/map-dto-filter-options"

type Props = {
    categoryId?: number
    size?: string | string[]
    ingredients?: string | string[]
    types?: string | string[]
}

export const useProductsFilters = (params: Props) => {
    return useQuery({
        queryKey: QueryKeys.productFilters(params),
        queryFn: (): Promise<ApiSchema<"ProductFiltersResponseDto">> =>
            getProductsFilters(params.categoryId),
        select: (data) => mapDtoFilterOptions(data),
    })
}
