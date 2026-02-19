import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getProductsFilters } from "../api/get-products-filters"
import { mapDtoFilterOptions } from "../model/map-dto-filter-options"
import type { ProductFilterOption } from "../model/types"

export const useProductsFilters = (categoryId?: number) => {
    return useQuery({
        queryKey: QueryKeys.productFilters(categoryId),
        queryFn: (): Promise<ApiSchema<"ProductFiltersResponseDto">> =>
            getProductsFilters(categoryId),
        select: (data): ProductFilterOption => mapDtoFilterOptions(data),
    })
}
