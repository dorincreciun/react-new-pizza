import { Suspense } from "react"

import { MODAL_REGISTRY } from "@app/providers/modal/ui/modal-registry"

import { useModalStore } from "@entities/modal"

import { Overlay, Portal } from "@shared/ui"
import { cn } from "@shared/utils"

export const ModalManager = () => {
    const isOpen = useModalStore((s) => s.isOpen)
    const activeModal = useModalStore((s) => s.activeModal)

    if (!isOpen || !activeModal) return null

    const Component = MODAL_REGISTRY[activeModal]

    if (!Component) {
        console.error(`Modal with key "${activeModal}" is not registered in MODAL_REGISTRY.`)
        return null
    }

    return (
        <Suspense fallback={null}>
            <Portal>
                <Overlay />
                <div
                    className={cn([
                        "absolute top-1/2 left-1/2 z-50 -translate-1/2",
                        "w-full max-w-112.5 rounded-[18px] bg-white p-11.5",
                        "space-y-5",
                    ])}
                >
                    <Component />
                </div>
            </Portal>
        </Suspense>
    )
}
