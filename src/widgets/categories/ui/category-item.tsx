import type { Ref } from "react"

import { cn } from "@shared/utils"

interface Props {
    name: string
    isActive: boolean
    onClick: () => void
    ref?: Ref<HTMLButtonElement>
}

export const CategoryItem = ({ name, isActive, ...rest }: Props) => {
    return (
        <button
            type="button"
            className={cn(
                // Layout & Sizing
                "flex h-full flex-1 shrink-0 items-center justify-center",

                // Spacing & Shape
                "rounded-2xl px-6",

                // Typography
                "text-center text-base font-medium text-nowrap",

                // Transitions & Interactivity
                "cursor-pointer transition-all duration-300 ease-out",

                // Conditional Styles
                isActive
                    ? "bg-white text-[#FE5F00] shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
                    : "text-[#202020] hover:text-[#FE5F00]",
            )}
            {...rest}
        >
            {name}
        </button>
    )
}
