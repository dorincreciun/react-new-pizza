import { create } from "zustand"

import type { ModalKeyType } from "@shared/const/modal-const"

interface ModalState {
    activeModal: ModalKeyType | null
    isOpen: boolean
    openModal: (type: ModalKeyType) => void
    closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
    activeModal: null,
    isOpen: false,
    openModal: (activeModal) => set({ isOpen: true, activeModal }),
    closeModal: () => set({ isOpen: false, activeModal: null }),
}))
