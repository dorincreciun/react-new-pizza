import { useCallback, useMemo } from "react"

import { useSearchParams } from "react-router"

import { getVisibleWindow } from "./get-visible-window"
import { parsePageParam } from "./parse-page-params"

interface UsePaginationOptions {
    totalPages: number
    visiblePages?: number
    pageParam?: string
}

interface UsePaginationResult {
    currentPage: number
    pages: number[]
    totalPages: number
    hasPrev: boolean
    hasNext: boolean
    goToPage: (page: number) => void
    goPrev: () => void
    goNext: () => void
}

export const usePagination = ({
    totalPages,
    visiblePages = 4,
    pageParam = "page",
}: UsePaginationOptions): UsePaginationResult => {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentPage = useMemo(() => {
        return parsePageParam(searchParams.get(pageParam), totalPages)
    }, [searchParams, pageParam, totalPages])

    const { pages } = useMemo(() => {
        return getVisibleWindow(currentPage, totalPages, visiblePages)
    }, [currentPage, totalPages, visiblePages])

    const goToPage = useCallback(
        (page: number) => {
            if (page < 1 || page > totalPages) return

            const next = new URLSearchParams(searchParams)

            if (page === 1) {
                next.delete(pageParam)
            } else {
                next.set(pageParam, String(page))
            }

            setSearchParams(next)
        },
        [searchParams, pageParam, totalPages, setSearchParams],
    )

    const goPrev = useCallback(() => {
        goToPage(currentPage - 1)
    }, [currentPage, goToPage])

    const goNext = useCallback(() => {
        goToPage(currentPage + 1)
    }, [currentPage, goToPage])

    return {
        currentPage,
        pages,
        totalPages,
        hasPrev: currentPage > 1,
        hasNext: currentPage < totalPages,
        goToPage,
        goPrev,
        goNext,
    }
}
