export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productsList: (categoryId?: number) => ["products", "list", categoryId] as const,
    productFilters: (categoryId?: number) => ["products", "filters", categoryId] as const,
} as const
