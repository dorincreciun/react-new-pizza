import { BrowserRouter } from "react-router"


import { Header } from "@widgets/header"

import { RootLayout } from "@shared/layouts"

import { ModalsProvider, RouterProvider, TanstackProvider } from "../providers"

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
