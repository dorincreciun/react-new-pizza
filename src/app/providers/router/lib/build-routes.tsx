import type {RouteObject} from "react-router";
import type {AppRouteProps} from "../types/router";
import {RouteGuard} from "@app/providers/router/guards/route-guard.tsx";

export const buildRoutes = (routes: AppRouteProps[]): RouteObject[] => {
    return routes.map((route) => {
        const { element, authOnly, roles, children, ...rest } = route;

        const wrappedElement = (authOnly || roles) ? (
            <RouteGuard authOnly={authOnly} roles={roles}>
                {element}
            </RouteGuard>
        ) : (
            element
        );

        const routeObject: RouteObject = {
            ...rest,
            element: wrappedElement,
        };

        if (children) {
            routeObject.children = buildRoutes(children);
        }

        return routeObject;
    });
};