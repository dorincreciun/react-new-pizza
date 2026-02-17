import type { ApiError } from "@shared/types"

export const getErrorMessage = (error: unknown, defaultMsg = "Eroare server") => {
    const apiError = error as ApiError
    return Array.isArray(apiError?.message) ? apiError.message[0] : apiError?.message || defaultMsg
}
