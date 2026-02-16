import { BrowserRouter } from "react-router"

import { ModalsProvider, RouterProvider, TanstackProvider } from "@app/providers"

import { Header } from "@widgets/header"

import { RootLayout } from "@shared/layouts"

export const App = () => {
    return (
        <TanstackProvider>
            <BrowserRouter>
                <ModalsProvider>
                    <RootLayout>
                        <Header />
                        <RouterProvider />
                    </RootLayout>
                </ModalsProvider>
            </BrowserRouter>
        </TanstackProvider>
    )
}
