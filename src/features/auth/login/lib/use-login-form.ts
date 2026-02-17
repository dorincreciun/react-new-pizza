import { useForm } from "react-hook-form"

import { getErrorMessage } from "@shared/lib"

import { useLogin } from "./use-login"
import type { LoginDto } from "../model/types"

export const useLoginForm = () => {
    const methods = useForm<LoginDto>({
        defaultValues: { email: "", password: "" },
        mode: "onBlur",
    })

    const { mutateAsync, isPending } = useLogin()
    const { setError, handleSubmit, formState } = methods

    const handleLogin = async (dto: LoginDto) => {
        try {
            await mutateAsync(dto)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)

            setError("root", {
                type: "server",
                message: errorMessage,
            })
        }
    }

    return {
        methods,
        onSubmit: handleSubmit(handleLogin),
        isLoading: isPending,
        errors: formState.errors,
        isValid: formState.isValid,
    }
}
