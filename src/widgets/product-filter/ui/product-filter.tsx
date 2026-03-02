import { useProductsFilters } from "@entities/product"

import { useQueryParams } from "@shared/lib"

import { ProductFilterError } from "./product-filter-error"
import { ProductFilterSkeleton } from "./product-filter-skeleton"
import { ProductFilterView } from "./product-filter-view"

type ProductUrlParams = {
    categoryId: number
    size: string
    ingredients: string
    types: string
}

export const ProductFilter = () => {
    const filters = useQueryParams<ProductUrlParams>()
    console.dir(filters)
    const { data, isLoading, isError, error } = useProductsFilters(filters)

    if (isError) return <ProductFilterError error={error} />
    if (isLoading || !data) return <ProductFilterSkeleton />

    return <ProductFilterView data={data} />
}
