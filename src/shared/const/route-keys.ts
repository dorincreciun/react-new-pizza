export const AppRoutes = {
    MAIN: "main",
    PROFILE: "profile",
    NOT_FOUND: "not_found",
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RoutePath: Record<AppRoutesType, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_FOUND]: "*",
}
