import { useSearchParams } from "react-router"

import { Pagination } from "@features/pagination"

import { ProductCard, ProductCardSkeleton, useProducts } from "@entities/product"

export const ProductList = () => {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get("page")) || 1
    const category = Number(searchParams.get("categoryId"))

    const { data: response, isLoading, isError } = useProducts(category, page)

    if (isError) {
        return (
            <div className="flex-1 py-10 text-center text-red-500">
                A apărut o eroare la încărcarea produselor.
            </div>
        )
    }

    if (isLoading || !response) {
        return (
            <div className="grid flex-1 grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
                <ProductCardSkeleton count={6} />
            </div>
        )
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
            <div className="grid flex-1 grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10 pb-15">
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
