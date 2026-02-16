import { useForm } from "react-hook-form"

import { useModalStore } from "@entities/modal"

import { login } from "../api/login"
import type { LoginDto } from "../model/types"

const DEFAULT_VALUES: LoginDto = {
    email: "",
    password: "",
}

/**
 * Hook pentru gestionarea logicii de business a formularului de login.
 * Extrage responsabilitatea apelului API și a managementului de stare din UI.
 */
export const useLoginForm = () => {
    const methods = useForm<LoginDto>({
        defaultValues: DEFAULT_VALUES,
        mode: "onBlur",
    })

    const { setError, handleSubmit, formState } = methods
    const close = useModalStore((s) => s.closeModal)

    const handleLogin = async (dto: LoginDto) => {
        try {
            const { data, error } = await login(dto)

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
