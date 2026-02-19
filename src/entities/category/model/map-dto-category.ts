import type { CategoryEntity } from "@entities/category"

import type { ApiSchema } from "@shared/types"

export const mapDtoCategory = (dto: ApiSchema<"CategoryResponseDto">): CategoryEntity => {
    return {
        id: dto.id,
        slug: dto.slug,
        name: dto.name,
    }
}
