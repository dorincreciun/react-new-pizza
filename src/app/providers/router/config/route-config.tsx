import { HomePage } from "@pages/home"
import { ProfilePage } from "@pages/profile"

import { RoutePath } from "@shared/const/route-keys"

import type { AppRouteProps } from "../types/router"

export const ROUTE_CONFIG: AppRouteProps[] = [
    {
        path: RoutePath.main,
        element: <HomePage />,
        authOnly: false,
    },
    {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
]
