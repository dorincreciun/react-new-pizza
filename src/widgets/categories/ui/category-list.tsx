import { type CategoryEntity, CUSTOM_CATEGORIES, useCategories } from "@entities/category"

import { PriorityNavigation } from "@shared/ui"

import { CategoryListDisplay } from "./category-list-display"

export const CategoryList = () => {
    const { data = [], isLoading } = useCategories()

    if (isLoading) {
        return <div>category loading...</div>
    }

    const categories: CategoryEntity[] = [...CUSTOM_CATEGORIES, ...data]

    return (
        <PriorityNavigation>
            <CategoryListDisplay categories={categories} />
        </PriorityNavigation>
    )
}
