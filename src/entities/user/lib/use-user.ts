import { useQuery } from "@tanstack/react-query"

import { getUser } from "@entities/user"

import { QueryKeys } from "@shared/const"

import type { UserEntity } from "../model/types"

export const useUser = (): UserEntity | null => {
    const { data } = useQuery<UserEntity | null>({
        queryKey: QueryKeys.authUser,
        queryFn: async () => await getUser(),
        enabled: true,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    })

    return data ?? null
}
