import { type ComponentType } from "react"

import { ModalKeys, type ModalKeyType } from "@shared/const/modal-keys"
import { lazyFeature } from "@shared/utils"

const LoginModal = lazyFeature(() => import("@features/auth/login"), "LoginModal")
const RegisterModal = lazyFeature(() => import("@features/auth/register"), "RegisterModal")

export const MODAL_REGISTRY: Partial<Record<ModalKeyType, ComponentType<Record<string, never>>>> = {
    [ModalKeys.LOGIN]: LoginModal,
    [ModalKeys.REGISTER]: RegisterModal,
}