export const AppRoutes = {
    MAIN: 'home',
    NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = typeof AppRoutes[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};