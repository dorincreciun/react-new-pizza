type CartItem = {
    id: string
    quantity: number
}

export interface CartState {
    isOpen: boolean
    openCart: () => void
    closeCart: () => void
    addToCart: (id: string) => void
    removeFromCart: (id: string) => void
    items: CartItem[]
}
