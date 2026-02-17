export const StorageKeys = {
    AUTH: "auth-storage",
} as const

export type StorageKeys = (typeof StorageKeys)[keyof typeof StorageKeys]