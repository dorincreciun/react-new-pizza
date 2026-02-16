import type { ReactNode } from "react"

import { useCartStore } from "@entities/cart"

import { Overlay } from "@shared/ui"
import { cn } from "@shared/utils"

interface Props {
    children: ReactNode
}

export const CartLayout = ({ children }: Props) => {
    const isOpen = useCartStore((s) => s.isOpen)

    if(!isOpen) return null

    return (
        <>
            <Overlay />
            <div
                className={cn(
                    "bg-white fixed top-0 right-0 z-50 h-full w-100",
                    "flex flex-col will-change-transform",
                    isOpen
                        ? "animate-[cart-slide-in_.55s_cubic-bezier(0.16,1,0.3,1)_both]"
                        : "animate-[cart-slide-out_.4s_cubic-bezier(0.4,0,0.2,1)_both]",
                )}
            >
                {children}
            </div>
        </>
    )
}
