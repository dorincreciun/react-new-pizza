import { useMutation, useQueryClient } from "@tanstack/react-query"

import { logout } from "@features/auth/logout"

import { useAuthStore } from "@entities/user"

export const useLogout = () => {
    const clearAuth = useAuthStore((s) => s.logout)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async () => await logout(),
        onSuccess: () => {
            clearAuth()
            queryClient.clear()
        },
        onError: () => {
            clearAuth()
            queryClient.clear()
        },
    })
}
