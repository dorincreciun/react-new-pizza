import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { StorageKeys } from "@shared/const"

import type { CartState } from "../model/types"

export const useCartStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                isOpen: false,
                items: [],

                openCart: () => set({ isOpen: true }),

                closeCart: () => set({ isOpen: false }),

                addToCart: (id) =>
                    set((state) => {
                        const existingItem = state.items.find((item) => item.id === id)
                        const newItems = existingItem
                            ? state.items.map((item) =>
                                  item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
                              )
                            : [...state.items, { id, quantity: 1 }]

                        return { items: newItems }
                    }),

                removeFromCart: (id) =>
                    set((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                    })),
            }),
            {
                name: StorageKeys.CART,
                partialize: (state) => ({ items: state.items }),
            },
        ),
    ),
)
