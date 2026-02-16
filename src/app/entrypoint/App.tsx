import {RootLayout} from "@shared/layouts";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {Header} from "@widgets/header";
import {BrowserRouter} from "react-router";

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <RootLayout>
                    <Header />

                    {/* Tanstack Devtools */}
                    <ReactQueryDevtools initialIsOpen={false} />
                </RootLayout>
            </BrowserRouter>
        </QueryClientProvider>
    )
}