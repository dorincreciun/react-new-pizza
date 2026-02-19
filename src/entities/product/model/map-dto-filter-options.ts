import type { ApiSchema } from "@shared/types"

import type { ProductFilterOption } from "./types"

export const mapDtoFilterOptions = (
    dto: ApiSchema<"ProductFiltersResponseDto">,
): ProductFilterOption => {
    const { types, sizes, ingredients } = dto

    return {
        types: types || [],
        sizes: sizes || [],
        ingredients: ingredients || [],
    }
}
