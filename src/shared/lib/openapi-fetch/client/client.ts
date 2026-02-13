import createClient from "openapi-fetch";
import type {path_v1} from "@shared/types";
import {auth} from "../middlewares/auth.ts";

export const apiClient = createClient<path_v1>({
    baseUrl: __API_URL__,
    credentials: "include"
})

apiClient.use(auth)