import { cn } from "@shared/utils"

import { DropdownContext } from "../model/dropdown.context"
import { useDropdownState } from "../model/dropdown.hooks"
import type { DropdownProps, DropdownContextProps } from "../model/dropdown.types"

/**
 * Componenta rădăcină a Dropdown-ului.
 * Gestionează starea internă și contextul.
 */
export const DropdownRoot = ({
    defaultOpen = false,
    closeOnSelect = true,
    closeOnClickOutside = true,
    children,
    className,
    ...rest
}: DropdownProps) => {
    const { rootRef, isOpen, toggle } = useDropdownState(closeOnClickOutside, defaultOpen)

    const contextValue: DropdownContextProps = { isOpen, toggle, rootRef, closeOnSelect }

    return (
        <DropdownContext value={contextValue}>
            <div
                ref={rootRef}
                className={cn("relative inline-block text-left", className)}
                {...rest}
            >
                {children}
            </div>
        </DropdownContext>
    )
}
