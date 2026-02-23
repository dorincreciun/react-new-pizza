import { cn } from "@shared/utils"

interface Props {
    className?: string
    preview?: string | null
}

export const UserAvatar = ({ className, preview }: Props) => {
    return (
        <div
            className={cn(
                // 1. Poziționare și Layout
                "flex items-center justify-center overflow-hidden",

                // 2. Formă
                "shrink-0 rounded-full",

                // 3. Tipografie
                "text-2xl font-bold text-white uppercase",

                // 4. Background & Efecte Vizuale
                "bg-linear-to-br from-[#FE5F00] to-[#F45A00] shadow-md",

                // 5. Override-uri
                className,
            )}
        >
            {preview ? (
                <img
                    src={preview}
                    alt="User avatar"
                    className="h-full w-full object-cover"
                />
            ) : (
                "JD"
            )}
        </div>
    )
}
