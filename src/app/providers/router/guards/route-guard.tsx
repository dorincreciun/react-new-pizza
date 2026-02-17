import type { ReactNode } from "react"

import { Navigate, useLocation } from "react-router"

import type { UserRole } from "@app/providers/router/types/router.ts"

import { RoutePath } from "@shared/const/route-keys"

interface RouteGuardProps {
    children: ReactNode
    authOnly?: boolean
    roles?: UserRole[]
}

export const RouteGuard = ({ children, roles }: RouteGuardProps) => {
    const location = useLocation()

    // TODO: Înlocuiește cu logica ta reală (ex: din un store Zustand sau Redux)
    const isAuthenticated = false
    const userRole = "USER"

    if (!isAuthenticated) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    if (roles && !roles.includes(userRole)) {
        return <Navigate to={RoutePath.main} replace />
    }

    return <>{children}</>
}
