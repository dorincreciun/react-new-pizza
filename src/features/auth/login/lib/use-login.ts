import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useModalStore } from "@entities/modal"
import { useAuthStore } from "@entities/user"

import { QueryKeys } from "@shared/const"

import { login } from "../api/login"
import type { LoginDto, LoginResponse } from "../model/types"

export const useLogin = () => {
    const setToken = useAuthStore((s) => s.setToken)
    const closeModal = useModalStore((s) => s.closeModal)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (values: LoginDto): Promise<LoginResponse> => {
            const { data, error } = await login(values)

            if (error || !data?.data) {
                throw error || new Error("No data returned")
            }

            return data.data
        },
        onSuccess: (response) => {
            setToken(response.accessToken)

            queryClient.setQueryData(QueryKeys.authUser, response.user)

            closeModal()
        },
    })
}
