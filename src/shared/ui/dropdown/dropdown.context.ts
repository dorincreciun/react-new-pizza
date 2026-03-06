import { createContext } from "react"

import type { DropdownContextProps } from "./dropdown.types"

export const DropdownContext = createContext<DropdownContextProps | null>(null)