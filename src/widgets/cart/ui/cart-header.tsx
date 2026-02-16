import { X } from "lucide-react"

import { useCartStore } from "@entities/cart"

import { Button } from "@shared/ui"

export const CartHeader = () => {
    const closeCart = useCartStore((s) => s.closeCart)
    const cartItems = useCartStore((s) => s.items.length)

    return (
        <div className={"flex items-center justify-between p-5"}>
            <div className={"text-xl"}>
                {cartItems > 0 && (
                    <div>
                        В корзине <span className={"font-bold"}>3 товара</span>
                    </div>
                )}
            </div>
            {/* Close */}
            <Button
                onlyIcon
                aria-label={"Close"}
                color={"secondary"}
                className={"absolute top-2 right-2 bg-transparent"}
                size={'sm'}
                onClick={closeCart}
            >
                <X />
            </Button>
        </div>
    )
}