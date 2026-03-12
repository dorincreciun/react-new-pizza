import { useSearchParams } from "react-router"

export const useFilterParams = (urlKey: string) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const selectedValues = searchParams.getAll(urlKey)

    const toggleStep = (id: string) => {
        const params = new URLSearchParams(searchParams)

        if (params.has(urlKey, id)) {
            params.delete(urlKey, id)
        } else {
            params.append(urlKey, id)
        }

        setSearchParams(params, { replace: true })
    }

    const isSelected = (id: string) => selectedValues.includes(id)

    return {
        selectedValues,
        toggleStep,
        isSelected,
    }
}
