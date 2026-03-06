import { cn } from "@shared/utils"

import { useDropdownContext } from "../model/dropdown.hooks"
import type { DropdownContentProps } from "../model/dropdown.types"

const CONTENT_BASE_STYLES = cn(
    "absolute right-0 z-50 mt-3 w-64 origin-top-right overflow-hidden rounded-2xl",
    "bg-white p-1.5 shadow-2xl ring-1 ring-black/5",
    "animate-zoom-in",
)

/**
 * Containerul plutitor care randează elementele meniului atunci când este deschis.
 *
 * @example
 * <DropdownContent>
 *   <DropdownItem>Profil</DropdownItem>
 * </DropdownContent>
 *
 * @example — cu className dinamic
 * <DropdownContent className={({ isOpen }) => isOpen ? "opacity-100" : ""}>
 *   ...
 * </DropdownContent>
 */
export const DropdownContent = ({ className, ...rest }: DropdownContentProps) => {
    const { isOpen } = useDropdownContext()

    if (!isOpen) return null

    const resolvedClassName =
        typeof className === "function" ? className({ isOpen }) : className

    return <div className={cn(CONTENT_BASE_STYLES, resolvedClassName)} {...rest} />
}