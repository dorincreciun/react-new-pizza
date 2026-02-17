import { useEffect } from "react"

import { useQuery } from "@tanstack/react-query"

import { QueryKeys } from "@shared/const"

import { useAuthStore } from "./use-auth-store"
import { getUser } from "../api/get-user"

export const useAuthInit = () => {
    const token = useAuthStore((s) => s.token)
    const logout = useAuthStore((s) => s.logout)

    const { isError, isPending, isFetching } = useQuery({
        queryKey: QueryKeys.authUser,
        queryFn: getUser,
        enabled: !!token,
        retry: false,
        staleTime: 5 * 60 * 1000,
    })

    useEffect(() => {
        if (isError && token) {
            logout()
        }
    }, [isError, token, logout])

    const isLoading = !!token && isPending && isFetching

    return { isLoading }
}