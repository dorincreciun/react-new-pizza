import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useAuthStore } from "@entities/user"

import { QueryKeys } from "@shared/const"

import { logout } from "../api/logout"

export const useLogout = () => {
    const clearAuth = useAuthStore((s) => s.logout)
    const queryClient = useQueryClient()

    const handleClear = () => {
        clearAuth()
        queryClient.setQueryData(QueryKeys.authUser, null)
        queryClient.removeQueries({ queryKey: QueryKeys.authUser })
        queryClient.clear()
    }

    return useMutation({
        mutationFn: logout,
        onSuccess: handleClear,
        onError: handleClear,
    })
}
