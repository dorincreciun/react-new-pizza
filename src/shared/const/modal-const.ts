export const ModalKey = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
} as const

export type ModalKeyType = keyof typeof ModalKey
