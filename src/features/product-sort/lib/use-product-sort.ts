import { useCallback, useMemo } from "react"

import { useNavigate, useSearchParams } from "react-router"

import type { ProductSort } from "@features/product-sort/model/types"

export const useProductSort = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const sort = useMemo<ProductSort>(() => {
        const value = searchParams.get("sort")

        if (value === "price" || value === "popularity" || value === "rating") {
            return value as ProductSort
        }

        return "rating"
    }, [searchParams])

    const setSort = useCallback(
        (value: ProductSort) => {
            const params = new URLSearchParams(searchParams.toString())

            params.set("sort", value)
            navigate(`?${params.toString()}`, {
                replace: true,
                state: { preventScroll: true },
            })
        },
        [navigate, searchParams],
    )

    return {
        sort,
        setSort,
    }
}
