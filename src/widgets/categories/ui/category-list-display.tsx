import { ArrowDown } from "lucide-react"
import { useLocation } from "react-router"

import { CategoryItem } from "@widgets/categories/ui/category-item"

import type { CategoryType } from "@entities/category"

import { Dropdown, usePriorityContext, PriorityNavigation } from "@shared/ui"
import { cn } from "@shared/utils"

interface Props {
    categories: CategoryType[]
}

export const CategoryListDisplay = ({ categories }: Props) => {
    const { pathname } = useLocation()
    const { moreButtonRef } = usePriorityContext()

    return (
        <PriorityNavigation.Main
            height={52}
            className={cn(
                // Base Layout & Background
                "relative flex flex-1 items-center rounded-2xl bg-[#FAFAFA] px-2 py-1.5",
                "w-full max-w-192.5 min-w-0 select-none",

                // Focus States
                "focus-within:ring-2 focus-within:ring-[#E0E0E0]",
                "focus-within:ring-offset-2 focus-within:ring-offset-white",
                "focus-within:shadow-sm",

                // Animation
                "transition-all duration-200 ease-in-out",
            )}
            items={categories}
            renderItem={(item) => (
                <CategoryItem key={item.slug} isActive={pathname === `/${item.slug}`} {...item} />
            )}
            renderMore={(item) => {
                return (
                    <Dropdown closeOnSelect className="flex-1">
                        <Dropdown.Trigger
                            ref={moreButtonRef}
                            className={({ isOpen }) =>
                                cn(
                                    // Layout & Sizing
                                    "flex w-full items-center justify-center gap-2 px-4 py-2",

                                    // Typography & Visuals
                                    "text-base font-medium text-nowrap text-[#202020]",

                                    // States
                                    "cursor-pointer rounded-2xl hover:text-[#FE5F00]",
                                    isOpen && "text-[#FE5F00] [&>svg]:rotate-180",
                                )
                            }
                        >
                            Mai multe
                            <ArrowDown size={16} className="transition-transform duration-300" />
                        </Dropdown.Trigger>

                        <Dropdown.Content className="absolute right-0 z-50 mt-3 w-64 rounded-2xl bg-white p-2 shadow-lg">
                            {item.map((item) => (
                                <Dropdown.Item
                                    key={item.slug}
                                    className="rounded-lg p-2 hover:bg-orange-50"
                                >
                                    {item.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Content>
                    </Dropdown>
                )
            }}
        />
    )
}
