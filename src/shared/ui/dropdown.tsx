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

// --- TYPES & CONTEXT ---

interface DropdownContextProps {
    isOpen: boolean
    toggle: () => void
    closeOnSelect: boolean
}

const DropdownContext = createContext<DropdownContextProps | null>(null)

const useDropdownContext = () => {
    const ctx = useContext(DropdownContext)
    if (!ctx) {
        throw new Error("useDropdownContext must be used within Dropdown")
    }
    return ctx
}

// --- COMPONENTS ---

/**
 * TRIGGER: Activează/Dezactivează meniul.
 * Folosește Slot pentru a fuziona cu elementul copil (ex: UserAvatar).
 */
interface DropdownTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    className?: ((state: { isOpen: boolean }) => string | undefined) | string
    ref?: Ref<HTMLButtonElement>
    asChild?: boolean
}

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

/**
 * CONTENT: Containerul pentru elementele meniului.
 * Include animația de zoom-in la montare.
 */
interface DropdownContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    className?: ((state: { isOpen: boolean }) => string | undefined) | string
}

const DropdownContent = ({ className, ...rest }: DropdownContentProps) => {
    const { isOpen } = useDropdownContext()

    if (!isOpen) return null

    const baseStyles = cn(
        "absolute right-0 z-50 mt-3 w-64 origin-top-right overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-black/5",
        "animate-zoom-in", // Asigură-te că ai definit-o în CSS sau config
    )

    const resolvedClassName = typeof className === "function" ? className({ isOpen }) : className

    return <div className={cn(baseStyles, resolvedClassName)} {...rest} />
}

/**
 * ITEM: Element individual din meniu.
 */
interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
    asChild?: boolean
}

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
                "hover:text-[#FE5F1E] hover:bg-[#FE5F1E]/5",
                "transition-colors",
                className,
            )}
            onClick={handleClick}
            {...rest}
        />
    )
}

/**
 * ROOT: Componenta părinte care gestionează starea.
 */
interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    defaultOpen?: boolean
    closeOnSelect?: boolean
    children: ReactNode
}

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

// --- EXPORT API ---

export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
    Item: DropdownItem,
})
