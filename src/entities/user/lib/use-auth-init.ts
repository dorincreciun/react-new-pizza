import { useQuery } from "@tanstack/react-query"

import { useAuthStore } from "./use-auth-store"
import { getUser } from "../api/get-user"
import type { UserEntity } from "../model/types"

export const useAuthInit = () => {
    const token = useAuthStore((s) => s.token)
    const logout = useAuthStore((s) => s.logout)

    const { isError, isLoading } = useQuery({
        queryKey: ["authUser"],
        queryFn: async (): Promise<UserEntity> => await getUser(),
        enabled: !!token,
        retry: false,
    })

    if (isError) {
        logout()
    }

    return {
        isLoading,
    }
}
