import { useForm } from "react-hook-form"

import { useModalStore } from "@entities/modal"

import { register } from "../api/register"
import type { RegisterDto } from "../model/types"

const DEFAULT_VALUES: RegisterDto = {
    email: "",
    password: "",
}

/**
 * Hook pentru gestionarea logicii de business a formularului de login.
 * Extrage responsabilitatea apelului API și a managementului de stare din UI.
 */
export const useRegisterForm = () => {
    const methods = useForm<RegisterDto>({
        defaultValues: DEFAULT_VALUES,
        mode: "onBlur",
    })

    const { setError, handleSubmit, formState } = methods
    const close = useModalStore((s) => s.closeModal)

    const handleLogin = async (dto: RegisterDto) => {
        try {
            const { data, error } = await register(dto)

            if (error) {
                return setError("root", {
                    type: "server",
                    message: error.message[0] || "Eroare server.",
                })
            }

            if (data?.data?.accessToken) {
                close()
                return
            }

            throw new Error("Invalid API response structure")
        } catch (err) {
            console.error(err)
            setError("root", {
                message: "Eroare de conexiune la server.",
            })
        }
    }

    return {
        methods,
        onSubmit: handleSubmit(handleLogin),
        isLoading: formState.isSubmitting,
        errors: formState.errors,
        isValid: formState.isValid,
    }
}
