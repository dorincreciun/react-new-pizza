import { useQuery } from "@tanstack/react-query"

import { getUser, useAuthStore } from "@entities/user"

import { QueryKeys } from "@shared/const"

import type { UserEntity } from "../model/types"

export const useUser = (): UserEntity | null => {
    const token = useAuthStore((s) => s.token)

    const { data } = useQuery<UserEntity | null>({
        queryKey: QueryKeys.authUser,
        queryFn: async () => await getUser(),
        enabled: !!token,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    })

    return data ?? null
}