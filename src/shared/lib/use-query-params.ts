import { useMemo } from "react"

import { useSearchParams } from "react-router"

const parseValue = (value: string): string | number => {
    if (value.trim() === "") return value
    const num = Number(value)
    return !Number.isNaN(num) ? num : value
}

export const useQueryParams = <T extends Record<string, string | number>>(
    keysToExtract: (keyof T)[] = [],
): Partial<T> => {
    const [searchParams] = useSearchParams()

    return useMemo(() => {
        const params: Partial<T> = {}

        if (keysToExtract.length > 0) {
            keysToExtract.forEach((key) => {
                const value = searchParams.get(key as string)
                if (value !== null) {
                    params[key] = parseValue(value) as T[keyof T]
                }
            })
            return params
        }

        for (const [key, value] of searchParams.entries()) {
            params[key as keyof T] = parseValue(value) as T[keyof T]
        }

        return params
    }, [searchParams, keysToExtract])
}
