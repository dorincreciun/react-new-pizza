import { Slot } from "@radix-ui/react-slot"

import type { DropdownTriggerProps } from "@shared/ui/dropdown/model/dropdown.types"
import { cn } from "@shared/utils"

import { useDropdownTrigger } from "../model/dropdown.hooks"

const TRIGGER_BASE_STYLES = "cursor-pointer outline-hidden transition-transform duration-200"

/**
 * Elementul declanșator pentru dropdown.
 * Gestionează accesibilitatea (aria-expanded, data-state) și starea de deschidere.
 *
 * @example
 * <DropdownTrigger>Open menu</DropdownTrigger>
 *
 * @example — cu className dinamic
 * <DropdownTrigger className={({ isOpen }) => isOpen ? "text-blue-500" : ""}>
 *   Open menu
 * </DropdownTrigger>
 *
 * @example — asChild (Slot)
 * <DropdownTrigger asChild>
 *   <button>Custom trigger</button>
 * </DropdownTrigger>
 */
export const DropdownTrigger = ({
    onClick,
    className,
    asChild,
    ref,
    ...rest
}: DropdownTriggerProps) => {
    const { triggerProps, isOpen } = useDropdownTrigger({ onClick })

    const resolvedClassName = typeof className === "function" ? className({ isOpen }) : className

    const Component = asChild ? Slot : "button"

    return (
        <Component
            ref={ref}
            type={asChild ? undefined : "button"}
            {...triggerProps}
            {...rest}
            className={cn(TRIGGER_BASE_STYLES, resolvedClassName)}
        />
    )
}