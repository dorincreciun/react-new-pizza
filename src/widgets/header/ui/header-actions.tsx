import { User } from "lucide-react"

import { ToggleCart } from "@entities/cart"
import { useModalStore } from "@entities/modal"

import { Button } from "@shared/ui"

export const HeaderActions = () => {
    const openModal = useModalStore((s) => s.openModal)

    return (
        <div className="flex items-center gap-4">
            <ToggleCart />
            <Button onClick={() => openModal("LOGIN")}>
                <User />
                <span className="max-md:hidden">Login</span>
            </Button>
        </div>
    )
}
