import type { ApiSchema } from "@shared/types"

import type { ProductEntity } from "./types"

export const mapDtoProduct = (dto: ApiSchema<"ProductResponseDto">): ProductEntity => {
    return {
        id: dto.id,
        slug: dto.slug,
        name: dto.name,
        description: dto.description,
        price: dto.price,
        imageUrl: dto.imageUrl,
        type: dto.type,
    }
}
