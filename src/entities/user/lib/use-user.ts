import { useQuery } from "@tanstack/react-query"

import { getUser, useAuthStore } from "@entities/user"
import { mapDtoUser } from "@entities/user/model/map-dto-user"

import { QueryKeys } from "@shared/const"
import type { ApiSchema } from "@shared/types"

import type { UserEntity } from "../model/types"

export const useUser = (): UserEntity | null => {
    const token = useAuthStore((s) => s.token)

    const { data } = useQuery({
        queryKey: QueryKeys.authUser,
        queryFn: async (): Promise<ApiSchema<"UserResponseDto">> => getUser(),
        select: (data): UserEntity => mapDtoUser(data),
        enabled: !!token,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    })

    return data ?? null
}
