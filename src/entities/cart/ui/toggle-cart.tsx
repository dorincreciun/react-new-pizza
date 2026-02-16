import { ShoppingBag } from "lucide-react"

import { useCartStore } from "@entities/cart"

import { Button } from "@shared/ui"

export const ToggleCart = () => {
    const openCart = useCartStore((s) => s.openCart)
    return (
        <Button kind={"outline"} onlyIcon onClick={() => openCart()}>
            <ShoppingBag />
        </Button>
    )
}