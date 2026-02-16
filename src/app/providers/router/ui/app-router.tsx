import {buildRoutes} from "../lib/build-routes";
import {ROUTE_CONFIG} from "../config/route-config";
import {useRoutes} from "react-router";

export const AppRouter = () => {
    return useRoutes(buildRoutes(ROUTE_CONFIG));
};