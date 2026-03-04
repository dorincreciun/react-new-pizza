import { Blocks, Grid2x2Plus, Plus } from "lucide-react"

import { QuantitySelector } from "@features/cart-change-quantity"
import { Pagination } from "@features/pagination"

import { ProductCard, useProducts } from "@entities/product"

import { useQueryParams } from "@shared/lib"
import { Button } from "@shared/ui"

import { ProductListEmpty } from "./product-list-empty"
import { ProductListError } from "./product-list-error"
import { ProductListSkeleton } from "./product-list-skeleton"

export const ProductList = () => {
    const filters = useQueryParams()
    const { data: response, isLoading, isError } = useProducts(filters)

    if (isError) return <ProductListError />
    if (isLoading || !response) return <ProductListSkeleton />

    const { data: products, meta } = response

    if (products.length === 0) return <ProductListEmpty />

    return (
        <div>
            <div className="grid flex-1 pb-15 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 xl:gap-10">
                {products.map(({ imageUrl, name, description, price, type, id, cartQuantity }) => (
                    <ProductCard id={id} key={id}>
                        <ProductCard.Header>
                            <ProductCard.Image src={imageUrl} alt={name} />

                            <ProductCard.BadgeSlot>
                                {type === "CONFIGURABLE" && <Blocks />}
                            </ProductCard.BadgeSlot>
                        </ProductCard.Header>
                        <ProductCard.Content>
                            <ProductCard.Title>{name}</ProductCard.Title>
                            <ProductCard.Description>{description}</ProductCard.Description>
                        </ProductCard.Content>
                        <ProductCard.Footer>
                            <span>{price} lei</span>
                            {type === "CONFIGURABLE" ? (
                                <Button kind="soft">
                                    <Grid2x2Plus /> Config
                                </Button>
                            ) : (
                                <Button kind="soft">
                                    <Plus /> Adaugă
                                </Button>
                            )}
                            <QuantitySelector qty={cartQuantity} />
                        </ProductCard.Footer>
                    </ProductCard>
                ))}
            </div>

            <Pagination totalPages={meta.totalPages} />
        </div>
    )
}
