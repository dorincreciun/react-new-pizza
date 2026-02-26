import {
    type ButtonHTMLAttributes,
    createContext,
    type HTMLAttributes,
    type MouseEvent,
    type ReactNode,
    type Ref,
    useContext,
    useState,
} from "react"

import { Slot } from "@radix-ui/react-slot"

import { cn } from "@shared/utils"

// --- CONTEXT ---

interface DropdownContextProps {
    isOpen: boolean
    toggle: () => void
    closeOnSelect: boolean
}

const DropdownContext = createContext<DropdownContextProps | null>(null)

/**
 * Hook intern pentru accesarea stării Dropdown-ului.
 * @throws {Error} Dacă este utilizat în afara componentei Dropdown.
 */
const useDropdownContext = () => {
    const ctx = useContext(DropdownContext)
    if (!ctx) {
        throw new Error("useDropdownContext must be used within Dropdown")
    }
    return ctx
}

// --- COMPONENTS ---

interface DropdownTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    /** Stiluri CSS sau funcție care returnează clase în funcție de starea meniului. */
    className?: ((state: { isOpen: boolean }) => string | undefined) | string
    /** Referință către elementul buton. */
    ref?: Ref<HTMLButtonElement>
    /** Dacă este `true`, fuzionează stilurile și comportamentul cu primul copil. */
    asChild?: boolean
}

/**
 * Elementul declanșator pentru meniu. Gestionează accesibilitatea și starea de deschidere.
 */
const DropdownTrigger = ({ onClick, className, asChild, ref, ...rest }: DropdownTriggerProps) => {
    const { toggle, isOpen } = useDropdownContext()

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        toggle()
    }

    const baseStyles = "cursor-pointer outline-hidden transition-transform duration-200"
    const resolvedClassName = typeof className === "function" ? className({ isOpen }) : className

    const Component = asChild ? Slot : "button"

    return (
        <Component
            ref={ref}
            type={asChild ? undefined : "button"}
            onClick={handleClick}
            className={cn(baseStyles, resolvedClassName)}
            aria-expanded={isOpen}
            data-state={isOpen ? "open" : "closed"}
            {...rest}
        />
    )
}

interface DropdownContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    /** Stiluri CSS sau funcție care returnează clase în funcție de starea meniului. */
    className?: ((state: { isOpen: boolean }) => string | undefined) | string
}

/**
 * Containerul plutitor care randează elementele meniului atunci când acesta este deschis.
 */
const DropdownContent = ({ className, ...rest }: DropdownContentProps) => {
    const { isOpen } = useDropdownContext()

    if (!isOpen) return null

    const baseStyles = cn(
        "absolute right-0 z-50 mt-3 w-64 origin-top-right overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-black/5",
        "animate-zoom-in",
    )

    const resolvedClassName = typeof className === "function" ? className({ isOpen }) : className

    return <div className={cn(baseStyles, resolvedClassName)} {...rest} />
}

interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
    /** Dacă este `true`, elementul devine componenta copil (ex: un Link). */
    asChild?: boolean
}

/**
 * Element individual de meniu. Închide automat meniul la click dacă `closeOnSelect` este activat.
 */
const DropdownItem = ({ onClick, className, asChild, ...rest }: DropdownItemProps) => {
    const { closeOnSelect, toggle } = useDropdownContext()

    const Component = asChild ? Slot : "div"

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        onClick?.(event)

        if (closeOnSelect && !event.defaultPrevented) {
            toggle()
        }
    }

    return (
        <Component
            role="menuitem"
            className={cn(
                "text-sm font-semibold text-black",
                "hover:bg-[#FE5F1E]/5 hover:text-[#FE5F1E]",
                "transition-colors",
                className,
            )}
            onClick={handleClick}
            {...rest}
        />
    )
}

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    /** Starea inițială a meniului. Implicit: `false`. */
    defaultOpen?: boolean
    /** Închide meniul automat când un item este selectat. Implicit: `true`. */
    closeOnSelect?: boolean
    /** Elementele componentei (Trigger, Content, Items). */
    children: ReactNode
}

/**
 * Componenta rădăcină a Dropdown-ului. Gestionează starea internă și contextul.
 */
const DropdownRoot = ({
    defaultOpen = false,
    closeOnSelect = true,
    children,
    className,
    ...rest
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen)
    const toggle = () => setIsOpen((prev) => !prev)

    return (
        <DropdownContext value={{ isOpen, toggle, closeOnSelect }}>
            <div className={cn("relative inline-block text-left", className)} {...rest}>
                {children}
            </div>
        </DropdownContext>
    )
}

/**
 * Sistem de meniu Dropdown compozit.
 * @example
 * ```tsx
 * <Dropdown closeOnSelect>
 *      <Dropdown.Trigger asChild>
 *          <button>Contul meu</button>
 *      </Dropdown.Trigger>
 *      <Dropdown.Content>
 *          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
 *      </Dropdown.Content>
 * </Dropdown>
 * ```
 */
export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
    Item: DropdownItem,
})
