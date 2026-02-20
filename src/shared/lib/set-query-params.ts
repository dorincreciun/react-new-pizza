import { useCallback } from "react"

import { useSearchParams } from "react-router"

export const useSetQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    return useCallback(
        (paramsToUpdate: Record<string, string | number | null>) => {
            const updatedParams = new URLSearchParams(searchParams)

            Object.entries(paramsToUpdate).forEach(([key, value]) => {
                if (value === null || value === undefined || value === "") {
                    updatedParams.delete(key)
                } else {
                    updatedParams.set(key, String(value))
                }
            })

            setSearchParams(updatedParams)
        },
        [searchParams, setSearchParams],
    )
}
