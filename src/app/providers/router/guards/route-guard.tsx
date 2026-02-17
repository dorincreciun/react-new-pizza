import type { ReactNode } from "react"

import { Navigate, useLocation } from "react-router"

import type { UserRole } from "@app/providers/router/types/router.ts"

import { useUser } from "@entities/user"

import { RoutePath } from "@shared/const/route-keys"

interface RouteGuardProps {
    children: ReactNode
    authOnly?: boolean
    roles?: UserRole[]
}

export const RouteGuard = ({ children, roles }: RouteGuardProps) => {
    const location = useLocation()
    const isAuthenticated = useUser()

    const userRole = "USER"

    if (!isAuthenticated) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    if (roles && !roles.includes(userRole)) {
        return <Navigate to={RoutePath.main} replace />
    }

    return <>{children}</>
}
