import { queryClient } from "@app/api/query-client"

import { useAuthStore } from "@entities/user"

import { createAuthMiddleware } from "@shared/api"
import { QueryKeys } from "@shared/const"
import { apiClient } from "@shared/lib"

/* Auth middleware */
apiClient.use(
    createAuthMiddleware({
        getToken: () => useAuthStore.getState().token,
        setToken: (token) => useAuthStore.getState().setToken(token),
        onRefreshFailed: () => {
            useAuthStore.getState().logout()
            queryClient.setQueryData(QueryKeys.authUser, null)
            queryClient.clear()
        },
    }),
)
