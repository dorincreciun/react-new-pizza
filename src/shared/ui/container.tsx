import type { HTMLAttributes } from "react"

import { cn } from "@/shared/utils"

export const Container = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-360 px-[clamp(16px,calc((100vw-390px)*0.05+16px),32px)]",
                className,
            )}
            {...rest}
        />
    )
}
