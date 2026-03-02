export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productPage: (productId: number) => ["product", productId],
    productsList: (categoryId?: number, page?: number) =>
        ["products", "list", categoryId, page] as const,
    productFilters: (categoryId?: number, size?: string, ingredients?: string, types?: string) =>
        ["products", "filters", categoryId, size, ingredients, types] as const,
} as const

export const Query = {
    auth: {
        user: ["authUser"] as const,
    },
    categories: {
        all: ["categories"] as const,
    },
    products: {
        all: ["products"] as const,
        filters: (params: Record<string, unknown>) =>
            [...Query.products.all, "filters", { ...params }] as const,

        list: (params: Record<string, unknown>) =>
            [...Query.products.all, "list", { ...params }] as const,

        detail: (id: number) => [...Query.products.all, "detail", id] as const,
    },
} as const