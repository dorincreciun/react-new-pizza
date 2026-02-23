export const AppRoutes = {
    MAIN: "main",
    PROFILE: "profile",
    PRODUCTS: "products",
    NOT_FOUND: "not_found",
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RoutePath: Record<AppRoutesType, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.PRODUCTS]: "/products/:id",
    [AppRoutes.NOT_FOUND]: "*",
}

/* Helpers */
export const getRouteProductDetails = (id: number) => `/products/${id}`