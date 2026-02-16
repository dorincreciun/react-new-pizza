import { CategoryList } from "@widgets/categories"

import { SortDropdown } from "@features/product-sort"

import { Container, Title } from "@shared/ui"

export const HomePage = () => {
    return (
        <Container className={"pt-5 pb-9"}>
            <Title as={"h2"} size={"xl"} className={"pb-5"}>
                Все пиццы
            </Title>
            <div className={"flex items-center justify-between"}>
                <CategoryList />
                <SortDropdown />
            </div>
        </Container>
    )
}
