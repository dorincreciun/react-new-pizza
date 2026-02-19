import { ProductCard, ProductCardSkeleton, useProducts } from "@entities/product"

export const ProductList = () => {
    const { data = [], isLoading } = useProducts()

    if (isLoading) {
        return (
            <div className="grid flex-1 grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
                <ProductCardSkeleton count={6} />
            </div>
        )
    }

    return (
        <div className="grid flex-1 grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10">
            {data?.map((product) => (
                <ProductCard
                    key={product.id}
                    imageUrl={product.imageUrl || "/img/no-preview.jpg"}
                    name={product.name}
                    description={product.description || ""}
                    price={product.price || 0}
                    action={"SIMPLE"}
                />
            ))}
        </div>
    )
}
