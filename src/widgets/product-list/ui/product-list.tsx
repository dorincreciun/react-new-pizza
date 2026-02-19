import { ProductCard, ProductCardSkeleton, useProducts } from "@entities/product"

export const ProductList = () => {
    const { data = [], isLoading } = useProducts(null)

    if (isLoading) {
        return (
            <div className="grid grid-cols-3 gap-4">
                <ProductCardSkeleton count={6} />
            </div>
        )
    }

    return (
        <div className="grid grid-cols-3 gap-4">
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
