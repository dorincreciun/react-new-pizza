import type { UserEntity } from "@entities/user"

import type { ApiSchema } from "@shared/types"

export const mapDtoUser = (dto: ApiSchema<"UserResponseDto">): UserEntity => {
    return {
        id: dto.id,
        email: dto.email,
        firstName: dto.firstName || null,
        lastName: dto.lastName || null,
        profileImage: dto.profileImage || null,
        rol: dto.rol,
    }
}
