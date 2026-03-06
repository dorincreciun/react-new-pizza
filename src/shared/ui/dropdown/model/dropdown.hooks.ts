import { type MouseEvent, useCallback, useContext, useRef, useState } from "react"

import { useClickOutside } from "@shared/hooks"
import type {
    DropdownContextProps,
    UseDropdownItemOptions,
    UseDropdownTriggerOptions,
} from "@shared/ui/dropdown/model/dropdown.types"

import { DropdownContext } from "./dropdown.context"

/**
 * Hook intern pentru accesarea contextului Dropdown-ului.
 * @returns {DropdownContextProps} Obiectul de context care conține `isOpen`, `toggle`, `rootRef`, etc.
 * @throws {Error} Dacă este utilizat în afara componentei `<Dropdown />Hierarchy`.
 */
export const useDropdownContext = (): DropdownContextProps => {
    const ctx = useContext(DropdownContext)
    if (!ctx) {
        throw new Error("useDropdownContext must be used within Dropdown hierarchy")
    }
    return ctx
}

/**
 * Gestionează starea de bază a Dropdown-ului și interacțiunile cu exteriorul.
 * @param {boolean} closeOnClickOutside - Dacă meniul trebuie să se închidă la click în afara elementului rădăcină.
 * @param {boolean} defaultOpen - Starea de vizibilitate inițială a meniului.
 */
export const useDropdownState = (closeOnClickOutside: boolean, defaultOpen: boolean) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(defaultOpen)

    const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
    const close = useCallback(() => setIsOpen(false), [])

    useClickOutside(rootRef, close, closeOnClickOutside && isOpen)

    return { rootRef, isOpen, toggle, close }
}

/**
 * Configurează interacțiunile pentru elementul de declanșare (Trigger).
 * @template T - Tipul elementului HTML.
 * @param {UseDropdownTriggerOptions<T>} options - Opțiuni ce includ handler-ul de click extern.
 */
export const useDropdownTrigger = <T extends HTMLElement>({
    onClick,
}: UseDropdownTriggerOptions<T>) => {
    const { toggle, isOpen } = useDropdownContext()

    const handleClick = useCallback(
        (event: MouseEvent<T>) => {
            onClick?.(event)

            if (event.defaultPrevented) return

            toggle()
        },
        [onClick, toggle],
    )

    return {
        triggerProps: {
            onClick: handleClick,
        },
        isOpen,
    }
}

/**
 * Hook specializat pentru logica unui element individual de meniu (DropdownItem).
 * @template T - Tipul elementului HTML.
 * @param {UseDropdownItemOptions<T>} options - Opțiuni ce includ handler-ul de click extern.
 */
export const useDropdownItem = <T extends HTMLElement>({ onClick }: UseDropdownItemOptions<T>) => {
    const { closeOnSelect, toggle } = useDropdownContext()

    const handleClick = useCallback(
        (event: MouseEvent<T>) => {
            onClick?.(event)

            if (closeOnSelect && !event.defaultPrevented) {
                toggle()
            }
        },
        [onClick, closeOnSelect, toggle],
    )

    return {
        handleItemClick: handleClick,
    }
}
