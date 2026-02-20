import { ProductFilterError } from "@widgets/product-filter/ui/product-filter-error"

import { useProductsFilters } from "@entities/product"

import { Button, Title } from "@shared/ui"

import { FilterSection } from "./filter-section"
import { ProductFilterSkeleton } from "./product-filter-skeleton"

export const ProductFilter = () => {
    const { data, isLoading, isError, error } = useProductsFilters()

    if (isError) {
        return <ProductFilterError error={error} />
    }

    if (isLoading || !data) {
        return <ProductFilterSkeleton />
    }

    const { types, sizes, ingredients } = data

    return (
        <div className="flex w-56 flex-col self-stretch">
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
