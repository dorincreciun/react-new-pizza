import { DropdownContent } from "./dropdown-content"
import { DropdownItem } from "./dropdown-item"
import { DropdownRoot } from "./dropdown-root"
import { DropdownTrigger } from "./dropdown-trigger"

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
