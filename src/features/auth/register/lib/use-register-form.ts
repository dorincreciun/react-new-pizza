import { useForm } from "react-hook-form"

import { getErrorMessage } from "@shared/lib"

import { useRegister } from "./use-register"
import type { RegisterDto } from "../model/types"

export const useRegisterForm = () => {
    const methods = useForm<RegisterDto>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    })

    const { mutateAsync, isPending } = useRegister()
    const { setError, handleSubmit, formState } = methods

    const handleRegister = async (dto: RegisterDto) => {
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
        onSubmit: handleSubmit(handleRegister),
        isLoading: isPending,
        errors: formState.errors,
        isValid: formState.isValid,
    }
}
