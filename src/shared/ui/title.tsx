import { createElement } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/utils"

/**
 * Definiția variantelor de stilizare pentru titluri folosind CVA.
 * Gestionează ierarhia vizuală prin dimensiuni predefinite.
 */
const titleVariants = cva("font-bold tracking-tight text-gray-900", {
    variants: {
        size: {
            xs: "text-[16px]",
            sm: "text-[22px]",
            md: "text-[26px]",
            lg: "text-[32px]",
            xl: "text-[36px] font-extrabold",
            "2xl": "text-[40px]",
        },
    },
    defaultVariants: {
        size: "xs",
    },
})

type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type SizeType = VariantProps<typeof titleVariants>["size"]

export interface TitleProps {
    /** Elementul HTML randat (ex: h1, h2). Determină importanța semantică a titlului. */
    as: TitleType
    /** Dimensiunea vizuală a titlului. Poate fi independentă de tag-ul HTML ales. */
    size?: SizeType
    /** Clase CSS adiționale pentru personalizarea stilului. */
    className?: string
    /** Textul afișat în interiorul titlului. */
    children: string
}

/**
 * Componentă polimorfică pentru titluri, care permite separarea semanticii HTML de stilizarea vizuală.
 * @param as - Tag-ul HTML dorit (h1-h6).
 * @param size - Varianta de dimensiune (xs-2xl).
 * @param className - Clase Tailwind adiționale.
 * @param children - Conținutul de tip text.
 * @example
 * ```tsx
 * // h1 semantic, dar cu aspect de titlu mediu
 * <Title as="h1" size="md">Titlu Pagina</Title>
 * * // h3 semantic, cu aspect foarte mare
 * <Title as="h3" size="2xl" className="text-orange-500">
 *       Promovare Specială
 * </Title>
 * ```
 */
export const Title = ({ as, children, size, className }: TitleProps) => {
    return createElement(as, {
        children,
        className: cn(titleVariants({ size }), className),
    })
}
