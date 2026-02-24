import { CategoryList } from "@widgets/categories"
import { ProductFilter } from "@widgets/product-filter"
import { ProductList } from "@widgets/product-list"

import { SortDropdown } from "@features/product-sort"

import { Container, Title } from "@shared/ui"

export const HomePage = () => {
    return (
        <Container className="py-10">
            <Title as="h2" size="xl" className="pb-5">
                Все пиццы
            </Title>
            <div className="flex items-center justify-between md:gap-5 lg:gap-8 xl:gap-10">
                <CategoryList />
                <SortDropdown />
            </div>

            <div className="flex h-auto items-stretch pt-9 md:gap-5 lg:gap-8 xl:gap-10">
                <ProductFilter />
                <ProductList />
            </div>
        </Container>
    )
}
