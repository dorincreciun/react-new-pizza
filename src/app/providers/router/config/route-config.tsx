import { AppRoutes, RoutePath} from "@app/providers/router/const/route-const.ts";
import {HomePage} from "@pages/home";
import type {AppRouteProps} from "@app/providers/router/types/router.ts";

export const ROUTE_CONFIG: Partial<Record<AppRoutes, AppRouteProps>> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.home,
        element: <HomePage />,
        authOnly: false,
        access: ['USER']
    },
};