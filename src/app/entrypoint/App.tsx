import {RootLayout} from "@shared/layouts";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {Header} from "@widgets/header";
import {useEffect} from "react";
import {getUser} from "@entities/user";

const queryClient = new QueryClient()

export const App = () => {

    useEffect(() => void getUser(), []);

    return (
        <QueryClientProvider client={queryClient}>
            <RootLayout>
                <Header />

                {/* Tanstack Devtools */}
                <ReactQueryDevtools initialIsOpen={false} />
            </RootLayout>
        </QueryClientProvider>
    )
}