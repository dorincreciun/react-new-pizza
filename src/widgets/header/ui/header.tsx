import { useEffect, useState } from "react"

import { Container } from "@shared/ui"
import { cn } from "@shared/utils"

import { HeaderActions } from "./header-actions"
import { HeaderLogo } from "./header-logo"

export const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-10 border-b border-gray-200 bg-white transition-all duration-300 ease-in-out",
                isShrunk ? "py-4" : "py-10",
            )}
        >
            <Container className="flex items-center justify-between gap-4">
                <HeaderLogo />
                <HeaderActions />
            </Container>
        </header>
    )
}
