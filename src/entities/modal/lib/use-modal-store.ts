import { create } from "zustand"

import type { ModalKeyType } from "@shared/const/modal-keys"

interface ModalState {
    activeModal: ModalKeyType | null
    openModal: (type: ModalKeyType) => void
    closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
    activeModal: null,
    openModal: (activeModal) => set({ activeModal }),
    closeModal: () => set({ activeModal: null }),
}))
