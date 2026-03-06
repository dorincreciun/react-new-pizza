import { type RefObject, useEffect } from "react"

/**
 * Hook utilitar pentru detectarea click-urilor în afara unui element specificat.
 * Se folosește pentru a închide meniuri, modale sau pentru a anula acțiuni de focus.
 * @param ref - Referința (React Ref) către elementul care trebuie monitorizat.
 * @param handler - Funcția de callback care se execută când are loc un click în exterior.
 * @param enabled - Flag opțional pentru a activa/dezactiva ascultarea evenimentelor. Implicit: `true`.
 * @example
 * useClickOutside(menuRef, () => setIsOpen(false), isOpen);
 */
export const useClickOutside = (
    ref: RefObject<HTMLElement | null>,
    handler: (event: Event) => void,
    enabled: boolean = true,
) => {
    useEffect(() => {
        if (!enabled) return

        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) return

            handler(event)
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, handler, enabled])
}