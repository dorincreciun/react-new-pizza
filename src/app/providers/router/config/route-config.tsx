import type {AppRouteProps} from "../types/router";
import {RoutePath} from "../const/route-const";
import {HomePage} from "@pages/home";

export const ROUTE_CONFIG: AppRouteProps[] = [
    {
        path: RoutePath.main,
        element: <HomePage />,
        authOnly: false,
    },
];