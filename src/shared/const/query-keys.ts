export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productPage: (productId: number) => ["product", productId],
    productsList: (categoryId?: number, page?: number) => ["products", "list", categoryId, page] as const,
    productFilters: (categoryId?: number) => ["products", "filters", categoryId] as const,
} as const
