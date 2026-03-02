import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProductsFilters } from "../api/get-products-filters"
import { mapDtoFilterOptions } from "../model/map-dto-filter-options"

interface Props {
    categoryId: number
    size: string
    ingredients: string
    types: string
}

export const useProductsFilters = ({ categoryId, size, ingredients, types }: Partial<Props>) => {
    const keys = QueryKeys.productFilters(categoryId, size, ingredients, types)

    return useQuery({
        queryKey: keys,
        queryFn: (): Promise<ApiSchema<"ProductFiltersResponseDto">> =>
            getProductsFilters(categoryId),
        select: (data) => mapDtoFilterOptions(data),
    })
}
