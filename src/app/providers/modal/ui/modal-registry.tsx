import { type ComponentType } from "react"

import { ModalKey, type ModalKeyType } from "@shared/const/modal-const"
import { lazyFeature } from "@shared/utils"

const LoginModal = lazyFeature(() => import("@features/auth/login"), "LoginModal")
const RegisterModal = lazyFeature(() => import("@features/auth/register"), "RegisterModal")

export const MODAL_REGISTRY: Partial<Record<ModalKeyType, ComponentType<Record<string, never>>>> = {
    [ModalKey.LOGIN]: LoginModal,
    [ModalKey.REGISTER]: RegisterModal,
}