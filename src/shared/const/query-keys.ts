export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productsList: (categoryId?: number, page?: number) => ["products", "list", categoryId, page] as const,
    productFilters: (categoryId?: number) => ["products", "filters", categoryId] as const,
} as const
