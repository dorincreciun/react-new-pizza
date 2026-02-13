import { create } from "zustand";
import type { UserEntity } from "@entities/user/@x";

interface SessionStore {
    accessToken: string | null;
    isAuthenticated: boolean;
    user: UserEntity | null;
}

interface SetSessionProps {
    user: UserEntity;
    token: string;
}

interface SessionActions {
    setSession: (data: SetSessionProps) => void;
    killSession: () => void;
}

export const useSessionStore = create<SessionStore & SessionActions>((set) => ({
    accessToken: null,
    isAuthenticated: false,
    user: null,

    setSession: (data): void => set({
        accessToken: data.token,
        isAuthenticated: true,
        user: data.user
    }),

    killSession: (): void => set({
        accessToken: null,
        isAuthenticated: false,
        user: null,
    })
}));