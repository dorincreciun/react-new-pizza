export const AppRoutes = {
    MAIN: "main",
    NOT_FOUND: "not_found",
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RoutePath: Record<AppRoutesType, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.NOT_FOUND]: "*",
}
