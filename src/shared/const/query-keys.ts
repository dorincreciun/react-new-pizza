type BaseExtend = Record<string, string | string[] | number | undefined | object>

export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productPage: <T extends BaseExtend>(params: T) => ["product", params] as const,
    productsList: <T extends BaseExtend>(params: T) => ["authUser", "products", "list", params] as const,
    productFilters: <T extends BaseExtend>(params: T) => ["products", "filters", params] as const,
    cartProducts: <T extends BaseExtend>(params: T) => ['products', params] as const,
} as const
