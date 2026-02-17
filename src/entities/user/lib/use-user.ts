import { useSyncExternalStore } from "react"

import { useQueryClient } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"

import type { UserEntity } from "../model/types"

export const useUser = (): UserEntity | null => {
    const queryClient = useQueryClient()
    return useSyncExternalStore(
        (onStoreChange) => queryClient.getQueryCache().subscribe(onStoreChange),
        () => queryClient.getQueryData<UserEntity>(QueryKeys.authUser) ?? null,
    )
}
