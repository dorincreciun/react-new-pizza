import type { ElementType } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/utils"

const statCardVariants = cva("rounded-xl p-6 transition-all duration-200", {
    variants: {
        variant: {
            white: "bg-white border border-black/[0.06] shadow-sm text-gray-900",
            primary: "bg-gradient-to-br from-[#FE5F00] to-[#F45A00] text-white shadow-md",
        },
    },
    defaultVariants: {
        variant: "white",
    },
})

const iconVariants = cva("flex h-10 w-10 items-center justify-center rounded-lg", {
    variants: {
        variant: {
            white: "bg-[#FE5F00]/10 text-[#FE5F00]",
            primary: "bg-white/20 text-white",
        },
    },
    defaultVariants: {
        variant: "white",
    },
})

const textVariants = cva("text-sm font-medium", {
    variants: {
        variant: {
            white: "text-gray-600",
            primary: "opacity-90",
        },
    },
    defaultVariants: {
        variant: "white",
    },
})

const labelVariants = cva("mt-1 text-xs", {
    variants: {
        variant: {
            white: "text-gray-500",
            primary: "opacity-75",
        },
    },
    defaultVariants: {
        variant: "white",
    },
})

interface StatCardProps extends VariantProps<typeof statCardVariants> {
    /** Titlul scurt al cardului (ex: "Total Vânzări"). */
    title: string
    /** Valoarea principală afișată (ex: "1,240 €"). */
    value: string
    /** Text secundar sub valoare (ex: "+12% față de luna trecută"). */
    label: string
    /** Componenta de iconiță (ex: din lucide-react). */
    icon: ElementType
    /** Clase CSS adiționale pentru containerul principal. */
    className?: string
}

/**
 * Componentă pentru afișarea statisticilor cheie într-un format vizual atractiv.
 * Oferă suport pentru o variantă albă (standard) și una primară (accentuată cu gradient).
 * @example
 * ```tsx
 *      <StatCard
 *          title="Utilizatori"
 *          value="2,450"
 *          label="În creștere"
 *          icon={UserIcon}
 *          variant="primary"
 *      />
 * ```
 */
export const StatCard = ({
    title,
    value,
    label,
    icon: Icon,
    variant,
    className,
}: StatCardProps) => {
    return (
        <div className={cn(statCardVariants({ variant }), className)}>
            <div className="mb-2 flex items-center justify-between">
                <p className={textVariants({ variant })}>{title}</p>
                <div className={iconVariants({ variant })}>
                    <Icon size={18} />
                </div>
            </div>
            <p className="text-3xl font-bold">{value}</p>
            <p className={labelVariants({ variant })}>{label}</p>
        </div>
    )
}
