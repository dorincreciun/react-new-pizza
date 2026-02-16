import { EmptyCart } from "@entities/cart"

import { Portal } from "@shared/ui"

import { CartHeader } from "./cart-header"
import { CartLayout } from "./cart-layout"

export const CartDrawer = () => {
    return (
        <Portal>
            <CartLayout>
                <CartHeader />

                {/* Is cart Empty */}
                <EmptyCart />
            </CartLayout>
        </Portal>
    )
}
