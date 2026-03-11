import { Suspense, useEffect, useCallback } from "react"
import { X } from "lucide-react"

import { useModalStore } from "@entities/modal"

import { Button, Overlay, Portal } from "@shared/ui"
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
        if (!activeModal) {
            document.body.style.overflow = ""
            return
        }

        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = ""
        }
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
                        "fixed inset-0 z-50 flex items-center justify-center",
                        "px-4",
                        "animate-in fade-in zoom-in-95 duration-200",
                    ])}
                    onClick={closeModal}
                >
                    <div
                        className={cn([
                            "w-full max-w-112.5 rounded-[18px] bg-white p-11.5",
                            "space-y-5",
                            "relative",
                        ])}
                        onClick={(e) => e.stopPropagation()}
                    >
                    <Button
                        type="button"
                        kind="ghost"
                        onlyIcon
                        size="sm"
                        className="absolute right-4 top-4"
                        aria-label="Închide fereastra"
                        onClick={closeModal}
                    >
                        <X size={18} />
                    </Button>

                    <Component />
                    </div>
                </div>
            </Portal>
        </Suspense>
    )
}
