import type {ReactNode} from "react";
import {Navigate, useLocation} from "react-router";
import {RoutePath} from "@app/providers/router/const/route-const.ts";

interface RouteGuardProps {
    children: ReactNode;
}

export const RouteGuard = ({ children }: RouteGuardProps) => {
    const isAuthenticated = false;
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={RoutePath.home} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};