import createClient from "openapi-fetch"

import type { path_v1 } from "@shared/types"

export const apiClient = createClient<path_v1>({
    baseUrl: __API_URL__,
    credentials: "include",
})
