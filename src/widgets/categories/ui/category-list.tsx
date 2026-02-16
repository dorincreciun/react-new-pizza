import { CategoryListDisplay } from "@widgets/categories/ui/category-list-display"

import type { CategoryType } from "@entities/category"

import { PriorityNavigation } from "@shared/ui"

const categories: CategoryType[] = [
    {
        id: 1,
        slug: "toate",
        name: "Toate",
    },
    {
        id: 2,
        slug: "picante",
        name: "Picante",
    },
    {
        id: 3,
        slug: "vegetariene",
        name: "Vegetariene",
    },
    {
        id: 4,
        slug: "oferte",
        name: "Oferte Speciale",
    },
    {
        id: 5,
        slug: "premium",
        name: "Premium",
    },
]

export const CategoryList = async () => {
    return (
        <PriorityNavigation>
            <CategoryListDisplay categories={categories} />
        </PriorityNavigation>
    )
}
