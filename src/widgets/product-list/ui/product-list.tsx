import { ProductListError } from "@widgets/product-list/ui/product-list-error"
import { ProductListSkeleton } from "@widgets/product-list/ui/product-list-skeleton"

import { Pagination } from "@features/pagination"

import { ProductCard, useProducts } from "@entities/product"

import { useQueryParams } from "@shared/lib"

type ProductUrlParams = {
    page: number
    categoryId: number
}

export const ProductList = () => {
    const queryParams = useQueryParams<ProductUrlParams>(["page", "categoryId"])

    const {
        data: response,
        isLoading,
        isError,
    } = useProducts(queryParams.categoryId, queryParams.page)

    if (isError) {
        return <ProductListError />
    }

    if (isLoading || !response) {
        return <ProductListSkeleton />
    }

    const { data: products, meta } = response

    if (products.length === 0) {
        return (
            <div className="flex-1 py-10 text-center font-medium text-gray-500">
                Nu am găsit niciun produs conform filtrelor selectate.
            </div>
        )
    }

    return (
        <div>
            <div className="grid flex-1 md:grid-cols-2 lg:grid-cols-3 pb-15 md:gap-5 lg:gap-8 xl:gap-10">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        imageUrl={product.imageUrl || "/img/no-preview.png"}
                        name={product.name}
                        description={product.description || ""}
                        price={product.price || 0}
                        action={"SIMPLE"}
                    />
                ))}
            </div>
            <Pagination totalPages={meta.total} />
        </div>
    )
}
