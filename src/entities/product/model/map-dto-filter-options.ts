import type { ApiSchema } from "@shared/types"

export const mapDtoFilterOptions = (dto: ApiSchema<"ProductFiltersResponseDto">) => {
    return [...dto.filters]
}
