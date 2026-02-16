import {buildRoutes} from "../lib/build-routes";
import {ROUTE_CONFIG} from "../config/route-config";
import {createBrowserRouter, RouterProvider} from "react-router";

export const AppRouter = () => {
    const router = createBrowserRouter(buildRoutes(ROUTE_CONFIG));

    return <RouterProvider router={router} />;
};