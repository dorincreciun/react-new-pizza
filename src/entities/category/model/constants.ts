import type { CategoryType } from "@entities/category"

export const CUSTOM_CATEGORIES: CategoryType[] = [
    {
        id: -1,
        slug: "",
        name: "Toate",
    },
] as const
