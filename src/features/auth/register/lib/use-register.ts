import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useModalStore } from "@entities/modal"
import { useAuthStore } from "@entities/user"

import { QueryKeys } from "@shared/const"

import { register } from "../api/register"
import type { RegisterDto, RegisterResponse } from "../model/types"

export const useRegister = () => {
    const setToken = useAuthStore((s) => s.setToken)
    const closeModal = useModalStore((s) => s.closeModal)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (values: RegisterDto): Promise<RegisterResponse> => {
            const { data, error } = await register(values)

            if (error || !data?.data) {
                throw error || new Error("Înregistrare eșuată")
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
