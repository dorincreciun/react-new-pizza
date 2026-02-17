import type { ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { AuthInitializer } from "@app/providers/tanstack/ui/auth-initializer"

import { queryClient } from "../../../api"

interface Props {
    children: ReactNode
}

export const TanstackProvider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthInitializer>{children}</AuthInitializer>

            {/* Tanstack Devtools */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
