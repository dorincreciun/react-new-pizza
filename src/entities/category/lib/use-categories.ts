import { useQuery } from "@tanstack/react-query"

import type { CategoryEntity } from "@entities/category"

import type { ApiSchema } from "@shared/types"

import { getCategories } from "../api/get-categories"
import { mapDtoCategory } from "../model/map-dto-category"


export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: (): Promise<ApiSchema<"CategoryResponseDto">[]> => getCategories(),
        select: (data): CategoryEntity[] => data.map(mapDtoCategory),
        enabled: true,
    })
}
