interface ProductPageParams {
    productId: number
}

interface ProductsListParams {
    categoryId?: number
    page?: number
}

interface ProductFiltersParams {
    categoryId?: number
    size?: string | string[]
    ingredients?: string | string[]
    types?: string | string[]
}

export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productPage: (params: ProductPageParams) => ["product", params] as const,
    productsList: (params: ProductsListParams) => ["products", "list", params] as const,
    productFilters: (params: ProductFiltersParams) => ["products", "filters", params] as const,
} as const
