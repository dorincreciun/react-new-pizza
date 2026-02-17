import type { ReactNode } from "react"

import { useAuthInit } from "@entities/user"

interface AuthInitializerProps {
    children: ReactNode
}

export const AuthInitializer = ({ children }: AuthInitializerProps) => {
    const { isLoading } = useAuthInit()

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <p>Se verifică sesiunea...</p>
            </div>
        )
    }

    return <>{children}</>
}
