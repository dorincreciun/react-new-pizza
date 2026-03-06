import { Slot } from "@radix-ui/react-slot"

import { cn } from "@shared/utils"

import { useDropdownItem } from "./dropdown.hooks"
import type { DropdownItemProps } from "./dropdown.types"

const ITEM_BASE_STYLES = cn(
    "text-sm font-semibold text-black",
    "hover:bg-[#FE5F1E]/5 hover:text-[#FE5F1E]",
    "transition-colors",
)

/**
 * Element individual de meniu.
 * Închide automat dropdown-ul la click dacă `closeOnSelect` este activat.
 *
 * @example
 * <DropdownItem onClick={() => console.log("click")}>
 *   Profil
 * </DropdownItem>
 *
 * @example — asChild (Slot)
 * <DropdownItem asChild>
 *   <a href="/profile">Profil</a>
 * </DropdownItem>
 */
export const DropdownItem = ({ onClick, className, asChild, ...rest }: DropdownItemProps) => {
    const { handleItemClick } = useDropdownItem({ onClick })

    const Component = asChild ? Slot : "div"

    return (
        <Component
            role="menuitem"
            className={cn(ITEM_BASE_STYLES, className)}
            onClick={handleItemClick}
            {...rest}
        />
    )
}
