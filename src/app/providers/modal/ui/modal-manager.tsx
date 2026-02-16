import { Suspense, useEffect, useCallback } from "react"


import { useModalStore } from "@entities/modal"

import { Overlay, Portal } from "@shared/ui"
import { cn } from "@shared/utils"

import { MODAL_REGISTRY } from "./modal-registry"

export const ModalManager = () => {
    const activeModal = useModalStore((s) => s.activeModal)
    const closeModal = useModalStore((s) => s.closeModal)

    const handleEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal()
        },
        [closeModal],
    )

    useEffect(() => {
        if (!activeModal) return
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [activeModal, handleEscape])

    if (!activeModal) return null

    const Component = MODAL_REGISTRY[activeModal]

    if (!Component) {
        console.error(`Modal with key "${activeModal}" is not registered in MODAL_REGISTRY.`)
        return null
    }

    return (
        <Suspense fallback={null}>
            <Portal>
                <Overlay onClick={closeModal} />
                <div
                    role="dialog"
                    aria-modal="true"
                    className={cn([
                        "absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
                        "w-full max-w-112.5 rounded-[18px] bg-white p-11.5",
                        "space-y-5",
                    ])}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Component />
                </div>
            </Portal>
        </Suspense>
    )
}
