import { useProductsFilters } from "@entities/product"

import { useQueryParams } from "@shared/lib"
import { Button, Title } from "@shared/ui"

import { FilterSection } from "./filter-section"
import { ProductFilterError } from "./product-filter-error"
import { ProductFilterSkeleton } from "./product-filter-skeleton"

type ProductUrlParams = {
    categoryId: number
}

export const ProductFilter = () => {
    const { categoryId } = useQueryParams<ProductUrlParams>()
    const { data, isLoading, isError, error } = useProductsFilters(categoryId)

    if (isError) {
        return <ProductFilterError error={error} />
    }

    if (isLoading || !data) {
        return <ProductFilterSkeleton />
    }

    const { types, sizes, ingredients } = data

    return (
        <div className="flex w-75 flex-col self-stretch">
            <Title as={"h2"} size={"sm"}>
                Фильтрация
            </Title>

            <div className="overflow-y-auto">
                {/* Types */}
                <FilterSection data={types} />

                {/* Sizes */}
                <FilterSection title="Sizes" data={sizes} />

                {/* Ingredients */}
                <FilterSection title="Ingredients" data={ingredients} />
            </div>

            <Button size="lg" className="w-full">
                Применить
            </Button>
        </div>
    )
}
