import { Blocks, Plus, Grid2x2Plus } from "lucide-react"

import { Pagination } from "@features/pagination"

import { ProductCard, useProducts } from "@entities/product"

import { useQueryParams } from "@shared/lib"
import { Button } from "@shared/ui"

import { ProductListEmpty } from "./product-list-empty"
import { ProductListError } from "./product-list-error"
import { ProductListSkeleton } from "./product-list-skeleton"

type ProductUrlParams = {
    page: number
    categoryId: number
}

export const ProductList = () => {
    const { categoryId, page } = useQueryParams<ProductUrlParams>(["page", "categoryId"])
    const { data: response, isLoading, isError } = useProducts(categoryId, page)

    if (isError) return <ProductListError />
    if (isLoading || !response) return <ProductListSkeleton />

    const { data: products, meta } = response

    if (products.length === 0) return <ProductListEmpty />

    return (
        <div>
            <div className="grid flex-1 pb-15 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 xl:gap-10">
                {products.map((product) => (
                    <ProductCard key={product.id} id={product.id} name={product.name}>
                        <ProductCard.Image src={product.imageUrl || "/img/no-preview.png"}>
                            {product.type === "CONFIGURABLE" && (
                                <Blocks className="text-[#FE5F00]" />
                            )}
                        </ProductCard.Image>

                        <ProductCard.Content
                            title={product.name}
                            description={product.description || "Fără descriere disponibilă"}
                        />

                        <ProductCard.Footer>
                            <span className="text-xl font-bold">{product.price} MDL</span>

                            {product.type === "CONFIGURABLE" ? (
                                <Button kind="soft">
                                    <Grid2x2Plus size={20} className="mr-2" />
                                    Собрать
                                </Button>
                            ) : (
                                <Button kind="soft">
                                    <Plus size={20} className="mr-2" />
                                    Добавить
                                </Button>
                            )}
                        </ProductCard.Footer>
                    </ProductCard>
                ))}
            </div>

            <Pagination totalPages={meta.totalPages} />
        </div>
    )
}
