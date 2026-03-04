type BaseExtend = Record<string, string | string[] | number | undefined>

export const QueryKeys = {
    authUser: ["authUser"] as const,
    categories: ["categories"] as const,
    productPage: <T extends BaseExtend>(params: T) => ["product", params] as const,
    productsList: <T extends BaseExtend>(params: T) => ["products", "list", params] as const,
    productFilters: <T extends BaseExtend>(params: T) => ["products", "filters", params] as const,
} as const
