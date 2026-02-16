import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter } from "react-router"

import { AppRouter } from "@app/providers/router"

import { Header } from "@widgets/header"

import { RootLayout } from "@shared/layouts"

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <RootLayout>
                    <Header />
                    <AppRouter />
                    {/* Tanstack Devtools */}
                    <ReactQueryDevtools initialIsOpen={false} />
                </RootLayout>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
