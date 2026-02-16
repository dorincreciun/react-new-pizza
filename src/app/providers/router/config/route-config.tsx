import { HomePage } from "@pages/home"

import { RoutePath } from "@shared/const/route-const"

import type { AppRouteProps } from "../types/router"

export const ROUTE_CONFIG: AppRouteProps[] = [
    {
        path: RoutePath.main,
        element: <HomePage />,
        authOnly: false,
    },
]
