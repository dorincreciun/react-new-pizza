import { create } from "zustand"
import { persist } from "zustand/middleware"

import { StorageKeys } from "@shared/const"

interface AuthStore {
    token: string | null
    setToken: (token: string | null) => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token) => set({ token }),
            logout: () => set({ token: null }),
        }),
        { name: StorageKeys.AUTH },
    ),
)
