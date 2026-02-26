import React, { createContext, useContext } from "react"

import { Link } from "react-router"

import { getRouteProductDetails } from "@shared/const"
import { Image } from "@shared/ui"

const ProductCardContext = createContext<{ id: number; name: string } | null>(null)

function useProductCard() {
    const context = useContext(ProductCardContext)
    if (!context) throw new Error("ProductCard sub-components must be rendered within ProductCard")
    return context
}

interface ProductCardProps {
    id: number
    name: string
    children: React.ReactNode
    className?: string
}

export const ProductCard = ({ id, name, children, className = "" }: ProductCardProps) => {
    return (
        <ProductCardContext.Provider value={{ id, name }}>
            <div className={`relative flex w-full flex-col ${className}`}>{children}</div>
        </ProductCardContext.Provider>
    )
}

const ProductCardImage = ({
    src,
    alt,
    children,
}: {
    src: string
    alt?: string
    children?: React.ReactNode
}) => {
    const { id, name } = useProductCard()
    return (
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#FE5F00]/5 p-5 transition-colors hover:bg-[#FE5F00]/10">
            <Link
                to={getRouteProductDetails(id)}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${name}`}
            />
            <Image
                src={src.startsWith("http") ? src : `http://localhost:3000/${src}`}
                alt={alt || name}
                width={220}
                height={220}
            />
            {children}
        </div>
    )
}

const ProductCardContent = ({ title, description }: { title: string; description: string }) => (
    <div className="flex-1 py-3.5">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="line-clamp-2 text-[#B1B1B1]">{description}</p>
    </div>
)

const ProductCardFooter = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-auto flex items-center justify-between pt-2">{children}</div>
)

ProductCard.Image = ProductCardImage
ProductCard.Content = ProductCardContent
ProductCard.Footer = ProductCardFooter