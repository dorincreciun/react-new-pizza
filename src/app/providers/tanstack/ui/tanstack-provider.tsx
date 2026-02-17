import type { ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { queryClient } from "../../../api"

interface Props {
    children: ReactNode
}

export const TanstackProvider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}

            {/* Tanstack Devtools */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
