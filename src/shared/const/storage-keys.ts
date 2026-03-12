export const StorageKeys = {
    AUTH: "auth-storage",
    CART: "cart-storage",
} as const

export type StorageKeys = (typeof StorageKeys)[keyof typeof StorageKeys]