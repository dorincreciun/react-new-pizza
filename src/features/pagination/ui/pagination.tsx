import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@shared/ui"

import { usePagination } from "../lib/use-pagination"

interface PaginationProps {
    totalPages: number
}

export const Pagination = ({ totalPages }: PaginationProps) => {
    const { currentPage, pages, hasPrev, hasNext, goPrev, goNext, goToPage } = usePagination({
        totalPages,
        visiblePages: 3,
    })

    if (totalPages <= 1) return null

    return (
        <div className={"mt-12.5 flex max-w-max items-center gap-7.5"}>
            <div className="flex items-center justify-center gap-2">
                {/* Prev */}
                <Button
                    onlyIcon
                    kind="outline"
                    color="secondary"
                    disabled={!hasPrev}
                    onClick={goPrev}
                >
                    <ArrowLeft />
                </Button>

                {/* Pages */}
                <div className="flex items-center gap-2">
                    {pages.map((page) => {
                        const isActive = page === currentPage

                        return (
                            <Button
                                key={page}
                                onlyIcon
                                kind={isActive ? "solid" : "outline"}
                                color={isActive ? "primary" : "secondary"}
                                onClick={() => goToPage(page)}
                            >
                                {page}
                            </Button>
                        )
                    })}
                </div>

                {/* Next */}
                <Button
                    onlyIcon
                    kind="outline"
                    color="secondary"
                    disabled={!hasNext}
                    onClick={goNext}
                >
                    <ArrowRight />
                </Button>
            </div>

            {/* Indicator */}
            <div className="flex items-center gap-2 font-semibold text-[#888888]">
                <span>{currentPage}</span>
                <span>din</span>
                <span>{totalPages}</span>
            </div>
        </div>
    )
}
