import type {
    ButtonHTMLAttributes,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
    Ref,
    RefObject,
} from "react"

/**
 * Tip de stare utilizat pentru manipularea dinamică a claselor CSS
 * în funcție de starea de deschidere a dropdown-ului.
 */
type DropdownState = (state: { isOpen: boolean }) => string | undefined

/**
 * Opțiunile de configurare pentru comportamentul Dropdown-ului.
 */
interface DropdownOptions {
    /** @default true */
    closeOnSelect?: boolean
    /** @default false */
    defaultOpen?: boolean
    /** @default true */
    closeOnClickOutside?: boolean
}

/**
 * Prop-urile pentru componentul principal `Dropdown`.
 */
export interface DropdownProps extends HTMLAttributes<HTMLDivElement>, DropdownOptions {
    children: ReactNode
}

/**
 * Valorile expuse prin context pentru sub-componentele dropdown-ului.
 */
export interface DropdownContextProps {
    isOpen: boolean
    toggle: () => void
    rootRef?: RefObject<HTMLDivElement | null>
    closeOnSelect: boolean
}

/**
 * Prop-urile pentru butonul care deschide/închide dropdown-ul.
 */
export interface DropdownTriggerProps extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
> {
    className?: DropdownState | string
    ref?: Ref<HTMLButtonElement>
    /** @default false */
    asChild?: boolean
}

/**
 * Prop-urile pentru containerul care deține elementele din meniu.
 */
export interface DropdownContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    className?: DropdownState | string
}

/**
 * Prop-urile pentru un singur element din interiorul meniului.
 */
export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
    /** @default false */
    asChild?: boolean
}

/**
 * Opțiuni pentru hook-ul de gestionare a trigger-ului.
 * @template T - Tipul elementului HTML.
 */
export interface UseDropdownTriggerOptions<T extends HTMLElement> {
    onClick?: MouseEventHandler<T>
}

/**
 * Opțiuni pentru hook-ul de gestionare a unui item din dropdown.
 * @template T - Tipul elementului HTML.
 */
export interface UseDropdownItemOptions<T extends HTMLElement> {
    onClick?: MouseEventHandler<T>
}
