type CartItem = {
    id: string
    image: string
    title: string
    description: string
    quantity: number
    price: number
}

export interface CartState {
    isOpen: boolean
    openCart: () => void
    closeCart: () => void
    items: CartItem[]
}
