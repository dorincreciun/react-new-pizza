import { type ReactNode, useEffect, useState } from "react"

import ReactDOM from "react-dom"

interface PortalProps {
    /** Elementele ce vor fi redate în afara ierarhiei DOM curente. */
    children: ReactNode
}

/**
 * Componentă utilitară pentru randarea elementelor într-un nod DOM separat,
 * adăugat direct la sfârșitul document.body.
 * * Este esențială pentru elemente care trebuie să ignore containerele cu `overflow: hidden`
 * sau `z-index` restrictiv (ex: modale, tooltip-uri, notificări).
 * @param children - Conținutul ce urmează a fi teleportat.
 * @example
 * ```tsx
 *      <Portal>
 *          <div className="fixed inset-0 bg-black">Acest div este acum un copil direct al body-ului.</div>
 *      </Portal>
 * ```
 */
export const Portal = ({ children }: PortalProps) => {
    const [container] = useState((): HTMLDivElement => document.createElement("div"))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [container])

    return ReactDOM.createPortal(children, container)
}
