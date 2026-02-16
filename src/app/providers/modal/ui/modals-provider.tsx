import type { ReactNode } from "react"

import { ModalManager } from "./modal-manager"

interface Props {
    children: ReactNode
}

export const ModalsProvider = ({ children }: Props) => {
    return (
        <>
            {children}
            <ModalManager />
        </>
    )
}
