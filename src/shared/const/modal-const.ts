export const ModalKey = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    SETTINGS: "SETTINGS",
} as const

export type ModalKeyType = keyof typeof ModalKey
