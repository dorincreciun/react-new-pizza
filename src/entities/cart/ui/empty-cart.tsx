import { MoveLeft } from "lucide-react"

import { Button } from "@shared/ui"

import { useCartStore } from "../lib/use-cart-store"

export const EmptyCart = () => {
    const cartItemsLength = useCartStore((s) => s.items.length)
    const closeCart = useCartStore((s) => s.closeCart)

    if (cartItemsLength > 0) return null

    return (
        <div className={"flex size-full items-center justify-center"}>
            <div className={"flex w-75 flex-col items-center gap-6"}>
                <img src="/img/empty-cart.png" alt="" width={120} height={120} />
                <div>
                    <div className={"text-center text-[22px] font-semibold"}>Корзина пустая</div>
                    <p className={"text-muted text-center text-base"}>
                        Добавьте хотя бы одну пиццу, чтобы совершить заказ
                    </p>
                </div>
                <Button className={"w-full"} onClick={closeCart}>
                    <MoveLeft />
                    Назад
                </Button>
            </div>
        </div>
    )
}