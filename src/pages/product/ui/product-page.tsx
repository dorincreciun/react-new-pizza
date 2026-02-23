import { useParams } from "react-router"

import { useProduct } from "@entities/product"

import { Button, Container } from "@shared/ui"

import { ProductDescription } from "./product-description"
import { ProductImage } from "./product-image"
import { ProductTitle } from "./product-title"

const ProductSkeleton = () => {
    return (
        <Container className="mt-10 animate-pulse">
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-5 aspect-square rounded-2xl bg-gray-100" />
                <div className="col-span-7 space-y-6">
                    <div className="h-10 w-3/4 rounded bg-gray-100" />
                    <div className="h-24 w-full rounded bg-gray-100" />
                </div>
            </div>
        </Container>
    )
}

const ProductEmpty = () => {
    return <Container className="mt-10">Produsul nu a fost găsit.</Container>
}

const ProductError = () => {
    return (
        <Container className="flex h-[50vh] flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Ceva nu a mers bine...</h2>
            <Button onClick={() => window.location.reload()}>Reîncearcă</Button>
        </Container>
    )
}

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>()
    const productId = Number(id)

    const { data, isLoading, isError } = useProduct(productId)

    // 1. Handling de eroare mai prietenos
    if (isError) {
        return <ProductError />
    }

    if (isLoading) {
        return <ProductSkeleton />
    }

    if (!data) return <ProductEmpty />

    const { imageUrl, name, description, price } = data

    return (
        <Container className="py-10">
            <div className="grid grid-cols-12 items-start gap-12">
                {/* Product Visual Section */}
                <div className="sticky top-24 col-span-12 md:col-span-5">
                    <ProductImage src={imageUrl} alt={name} />
                </div>

                {/* Product Info Section */}
                <div className="col-span-12 md:col-span-7">
                    <div className="flex min-h-125 flex-col justify-between">
                        <div className="flex flex-col gap-8">
                            {/* Header: Title & Description */}
                            <header className="space-y-4">
                                <ProductTitle>{name}</ProductTitle>
                                {description && (
                                    <ProductDescription>{description}</ProductDescription>
                                )}
                            </header>

                            {/* Options: Size/Dough/Extras */}
                            <section className="flex flex-col gap-4">
                                {/* Aici vor veni selectoarele tale de dimensiune */}
                                <div className="h-px bg-gray-100" /> {/* Divider subtil */}
                            </section>
                        </div>

                        {/* Footer Action: Price & Cart */}
                        <footer className="mt-10 pt-6">
                            <Button
                                size="lg"
                                className="h-14 w-full text-lg font-semibold shadow-lg shadow-[#FE5F00]/20"
                            >
                                Добавить в корзину за {price} MDL
                            </Button>
                        </footer>
                    </div>
                </div>
            </div>
        </Container>
    )
}
