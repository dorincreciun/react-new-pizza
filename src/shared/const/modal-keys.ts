export const ModalKeys = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
} as const

export type ModalKeyType = keyof typeof ModalKeys
