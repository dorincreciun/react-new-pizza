import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"

import { StorageKeys } from "@shared/const"

interface AuthStore {
    token: string | null
    setToken: (token: string | null) => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>()(
    devtools(
        persist(
            (set) => ({
                token: null,
                setToken: (token) => set({ token }),
                logout: () => set({ token: null }),
            }),
            { name: StorageKeys.AUTH },
        ),
        { name: "AuthStore" },
    ),
)
