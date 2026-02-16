import { CategoryListDisplay } from "@widgets/categories/ui/category-list-display"

import { type CategoryType, CUSTOM_CATEGORIES } from "@entities/category"

import { PriorityNavigation } from "@shared/ui"

const apiCategories: CategoryType[] = [
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

export const CategoryList = () => {

    const categories = [...CUSTOM_CATEGORIES, ...apiCategories]

    return (
        <PriorityNavigation>
            <CategoryListDisplay categories={categories} />
        </PriorityNavigation>
    )
}
