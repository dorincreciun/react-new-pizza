import { useMemo } from "react"

import { useSearchParams } from "react-router"

const parseValue = (value: string): string | number => {
    const trimmed = value.trim()
    if (trimmed === "") return trimmed
    const num = Number(trimmed)
    return !Number.isNaN(num) ? num : trimmed
}

export const useQueryParams = <T extends Record<string, unknown>>(): Partial<T> => {
    const [searchParams] = useSearchParams()

    return useMemo(() => {
        const params: Record<string, string | number | (string | number)[]> = {}

        const keys = Array.from(new Set(searchParams.keys()))

        keys.forEach((key: string) => {
            const values = searchParams.getAll(key)

            if (values.length > 1) {
                params[key] = values.map((v: string) => parseValue(v))
            } else if (values.length === 1) {
                const firstValue = values[0]
                if (firstValue !== undefined) {
                    params[key] = parseValue(firstValue)
                }
            }
        })

        return params as Partial<T>
    }, [searchParams])
}
