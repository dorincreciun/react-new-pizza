import { type ReactNode, useEffect, useState } from "react"

import ReactDOM from "react-dom"

interface Props {
    children: ReactNode
}

export const Portal = ({ children }: Props) => {
    const [container] = useState((): HTMLDivElement => document.createElement("div"))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}
