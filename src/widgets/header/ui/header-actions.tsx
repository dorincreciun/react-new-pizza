import { ShoppingBag, User } from "lucide-react"

import { useModalStore } from "@entities/modal"

import { Button } from "@shared/ui"

export const HeaderActions = () => {
    const openModal = useModalStore((s) => s.openModal)

    return (
        <div className="flex items-center gap-4">
            <Button kind={"outline"} onlyIcon>
                <ShoppingBag />
            </Button>
            <Button onClick={() => openModal("LOGIN")}>
                <User />
                <span className="max-md:hidden">Login</span>
            </Button>
        </div>
    )
}
