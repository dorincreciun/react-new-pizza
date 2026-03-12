import { Container } from "@shared/ui"
import { cn } from "@shared/utils"

import { HeaderActions } from "./header-actions"
import { HeaderLogo } from "./header-logo"
import { useScrollThreshold } from "../lib/use-scroll-treshold"

export const Header = () => {
    const isReached = useScrollThreshold(50)

    return (
        <header
            className={cn(
                "sticky top-0 z-10 border-b border-gray-200 bg-white transition-all duration-300 ease-in-out",
                isReached ? "py-4" : "py-10",
            )}
        >
            <Container className="flex items-center justify-between gap-4">
                <HeaderLogo />
                <HeaderActions />
            </Container>
        </header>
    )
}
