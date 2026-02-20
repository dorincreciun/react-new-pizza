import { Pagination } from "@features/pagination"

import { ProductCard, useProducts } from "@entities/product"

import { useQueryParams } from "@shared/lib"

import { ProductListEmpty } from "./product-list-empty"
import { ProductListError } from "./product-list-error"
import { ProductListSkeleton } from "./product-list-skeleton"

type ProductUrlParams = {
    page: number
    categoryId: number
}

export const ProductList = () => {
    const { categoryId, page } = useQueryParams<ProductUrlParams>(["page", "categoryId"])

    const { data: response, isLoading, isError } = useProducts(categoryId, page)

    if (isError) {
        return <ProductListError />
    }

    if (isLoading || !response) {
        return <ProductListSkeleton />
    }

    const { data: products, meta } = response

    if (products.length === 0) {
        return <ProductListEmpty />
    }

    return (
        <div>
            <div className="grid flex-1 pb-15 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 xl:gap-10">
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
            <Pagination totalPages={meta.totalPages} />
        </div>
    )
}
