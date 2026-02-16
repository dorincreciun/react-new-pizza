import { create } from "zustand"

import type { CartState } from "../model/types"

export const useCartStore = create<CartState>((set) => ({
    isOpen: false,
    items: [],
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
}))
