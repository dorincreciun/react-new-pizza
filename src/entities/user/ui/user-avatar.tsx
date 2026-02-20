import { cn } from "@shared/utils"

interface Props {
    className?: string
}

export const UserAvatar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                // 1. Poziționare și Layout (Box Model)
                "flex items-center justify-center",

                // 2. Dimensiuni (dacă vei adăuga w- și h- ulterior)
                "rounded-full",

                // 3. Tipografie
                "text-2xl font-bold text-white",

                // 4. Background & Efecte Vizuale
                "bg-linear-to-br from-[#FE5F00] to-[#F45A00] shadow-md",

                // 5. Override-uri (clasele care vin din exterior)
                className,
            )}
        >
            JD
        </div>
    )
}
