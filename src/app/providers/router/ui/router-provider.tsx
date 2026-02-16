import { useRoutes } from "react-router"

import { ROUTE_CONFIG } from "../config/route-config"
import { buildRoutes } from "../lib/build-routes"

export const RouterProvider = () => {
    return useRoutes(buildRoutes(ROUTE_CONFIG))
}
