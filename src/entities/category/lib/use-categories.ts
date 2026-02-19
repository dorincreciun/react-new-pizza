import { useQuery } from "@tanstack/react-query"


import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import { getCategories } from "../api/get-categories"
import { mapDtoCategory } from "../model/map-dto-category"
import type { CategoryEntity } from "../model/types"

export const useCategories = () => {
    return useQuery({
        queryKey: QueryKeys.categories,
        queryFn: (): Promise<ApiSchema<"CategoryResponseDto">[]> => getCategories(),
        select: (data): CategoryEntity[] => data.map(mapDtoCategory),
        enabled: true,
    })
}
