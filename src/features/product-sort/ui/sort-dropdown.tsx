import { ArrowDownUp, Check } from "lucide-react"


import { Dropdown } from "@shared/ui"
import { cn } from "@shared/utils"

import { useProductSort } from "../lib/use-product-sort"
import type { SortOption } from "../model/types"


const SORT_OPTIONS: SortOption[] = [
    { value: "rating", label: "рейтингу" },
    { value: "price", label: "цене" },
    { value: "popularity", label: "популярности" },
]

export const SortDropdown = () => {
    const { sort, setSort } = useProductSort()

    const selectedLabel = SORT_OPTIONS.find((opt) => opt.value === sort)?.label

    return (
        <Dropdown closeOnSelect className="relative inline-block">
            <Dropdown.Trigger
                className={({ isOpen }) =>
                    cn(
                        "group relative flex items-center gap-2.5",
                        "cursor-pointer rounded-2xl px-5 py-3.5",
                        "bg-[#FAFAFA] hover:bg-[#F5F5F5]",
                        "transition-all",
                        isOpen && "bg-[#F5F5F5] shadow-sm",
                    )
                }
            >
                <ArrowDownUp size={18} className="text-[#808080] group-hover:text-[#FE5F00]" />

                <span className="text-[#808080]">Сортировка:</span>
                <span className="font-medium text-[#FE5F00]">{selectedLabel}</span>
            </Dropdown.Trigger>

            <Dropdown.Content className="absolute right-0 z-10 mt-3 w-64 rounded-2xl bg-white p-2 shadow-lg">
                <ul className="flex flex-col gap-1">
                    {SORT_OPTIONS.map((option) => {
                        const isActive = option.value === sort

                        return (
                            <Dropdown.Item key={option.value}>
                                <li
                                    onClick={() => setSort(option.value)}
                                    className={cn(
                                        "flex cursor-pointer items-center justify-between rounded-xl px-4 py-3",
                                        isActive
                                            ? "bg-[#FE5F00]/10 text-[#FE5F00]"
                                            : "hover:bg-[#FAFAFA]",
                                    )}
                                >
                                    {option.label}
                                    {isActive && <Check size={16} />}
                                </li>
                            </Dropdown.Item>
                        )
                    })}
                </ul>
            </Dropdown.Content>
        </Dropdown>
    )
}
