import type { IndexRouteObject, NonIndexRouteObject } from "react-router"

import type { RoutePath } from "@shared/const/route-keys"

import type { ApiSchema } from "@/shared/types"

export type UserRole = ApiSchema<"UserResponseDto">["rol"]

type AppAllowedPaths = (typeof RoutePath)[keyof typeof RoutePath]

type ReactRouterRoute = IndexRouteObject | NonIndexRouteObject

export type AppRouteProps = Omit<ReactRouterRoute, "children" | "path"> & {
    path?: AppAllowedPaths
    authOnly?: boolean
    roles?: UserRole[]
    children?: AppRouteProps[]
}
