import { createContext, type ReactNode, useContext } from "react"

import { Link } from "react-router"

import { getRouteProductDetails } from "@shared/const"
import { Image } from "@shared/ui"
import { cn } from "@shared/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

interface WithClassName {
    className?: string
}

interface WithChildren {
    children: ReactNode
}

type SlotProps = WithClassName & WithChildren

// ─── Context ──────────────────────────────────────────────────────────────────

interface ProductContextValue {
    id: number
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined)

const useProductCard = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("ProductCard.* trebuie randat în interiorul lui <ProductCard />")
    }
    return context
}

// ─── Root ─────────────────────────────────────────────────────────────────────

interface RootProps extends ProductContextValue, SlotProps {}

const Root = ({ id, className, children }: RootProps) => (
    <ProductContext.Provider value={{ id }}>
        <div className={cn("relative flex w-full flex-col", className)}>{children}</div>
    </ProductContext.Provider>
)

// ─── Header ───────────────────────────────────────────────────────────────────

const Header = ({ className, children }: SlotProps) => {
    const { id } = useProductCard()
    return (
        <div
            className={cn(
                "relative flex items-center justify-center overflow-hidden",
                "rounded-2xl bg-[#FE5F00]/5 p-5 transition-colors hover:bg-[#FE5F00]/10",
                className,
            )}
        >
            <Link
                to={getRouteProductDetails(id)}
                className="absolute inset-0 z-10"
                aria-label="Vezi produsul"
            />
            {children}
        </div>
    )
}

// ─── Image ────────────────────────────────────────────────────────────────────

interface ImageProps extends WithClassName {
    src: string | null
    alt: string
}

const IMG = ({ className, src, alt }: ImageProps) => {
    const resolvedSrc =
        src === null
            ? null
            : src.startsWith("http")
              ? src
              : `${import.meta.env.VITE_API_URL}/${src}`

    if (!resolvedSrc) return null

    return <Image className={className} src={resolvedSrc} alt={alt} width={220} height={220} />
}

// ─── BadgeSlot ────────────────────────────────────────────────────────────────

const BadgeSlot = ({ className, children }: SlotProps) => (
    <div className={cn("absolute top-3 right-3 z-20 flex gap-1", className)}>{children}</div>
)

// ─── Content ──────────────────────────────────────────────────────────────────

const Content = ({ className, children }: SlotProps) => (
    <div className={cn("flex-1 py-3.5", className)}>{children}</div>
)

// ─── Title ────────────────────────────────────────────────────────────────────

const Title = ({ className, children }: SlotProps) => (
    <h3 className={cn("mb-2 text-xl font-bold", className)}>{children}</h3>
)

// ─── Description ──────────────────────────────────────────────────────────────

const Description = ({ className, children }: SlotProps) => (
    <p className={cn("line-clamp-2 text-[#B1B1B1]", className)}>{children}</p>
)

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = ({ className, children }: SlotProps) => (
    <div className={cn("mt-auto flex items-center justify-between pt-2", className)}>
        {children}
    </div>
)

// ─── Export ───────────────────────────────────────────────────────────────────

export const ProductCard = Object.assign(Root, {
    Header,
    Image: IMG,
    BadgeSlot,
    Content,
    Title,
    Description,
    Footer,
})
