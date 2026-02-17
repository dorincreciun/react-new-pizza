import { useMutation } from "@tanstack/react-query"

import { useModalStore } from "@entities/modal"
import { useAuthStore } from "@entities/user"

import { register } from "../api/register"
import type { RegisterDto, RegisterResponse } from "../model/types"

export const useRegister = () => {
    const setToken = useAuthStore((s) => s.setToken)
    const close = useModalStore((s) => s.closeModal)

    return useMutation({
        mutationFn: async (values: RegisterDto): Promise<RegisterResponse> => {
            const { data, error } = await register(values)

            if (error || !data?.data) {
                throw error || new Error("Înregistrare eșuată")
            }

            return data.data
        },
        onSuccess: (response) => {
            if (response.accessToken) {
                setToken(response.accessToken)
                close()
            }
        },
    })
}
