import { User } from "lucide-react"

import { useModalStore } from "@entities/modal"

import { Button } from "@shared/ui"

export const LoginButton = () => {
    const openModal = useModalStore((s) => s.openModal)

    return (
        <Button onClick={() => openModal("LOGIN")}>
            <User />
            <span className="max-md:hidden">Login</span>
        </Button>
    )
}
