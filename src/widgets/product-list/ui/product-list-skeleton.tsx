import { ProductCardSkeleton } from "@entities/product"

export const ProductListSkeleton = () => {
    return (
        <div className="grid flex-1 grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
            <ProductCardSkeleton count={6} />
        </div>
    )
}