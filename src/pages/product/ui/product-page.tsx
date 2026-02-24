import { useParams } from "react-router"

import { useProduct } from "@entities/product"

import { Button, Container, Image, SegmentedControl } from "@shared/ui"
import "swiper/css"

import { IngredientSelect } from "./ingredient-select"

// --- SKELETON ---
const ProductSkeleton = () => {
    return (
        <Container className="mt-10 animate-pulse">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="col-span-1 aspect-square rounded-3xl bg-gray-100 md:col-span-5" />
                <div className="col-span-1 space-y-6 md:col-span-7">
                    <div className="h-10 w-1/2 rounded-lg bg-gray-100" />
                    <div className="h-24 w-full rounded-lg bg-gray-100" />
                    <div className="h-40 w-full rounded-lg bg-gray-100" />
                </div>
            </div>
        </Container>
    )
}

// --- PRODUCT LENGTH < 1 ---
const ProductEmpty = () => {
    return (
        <Container className="mt-10 py-20 text-center">
            <p className="text-lg text-gray-400">Produsul nu a fost găsit.</p>
        </Container>
    )
}

// --- PRODUCT ERROR ---
const ProductError = () => {
    return (
        <Container className="flex h-[60vh] flex-col items-center justify-center gap-6">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Ups! Ceva nu a mers bine</h2>
                <p className="text-gray-500">Nu am putut încărca detaliile produsului.</p>
            </div>
            <Button size="lg" onClick={() => window.location.reload()}>
                Încearcă din nou
            </Button>
        </Container>
    )
}

// --- PRODUCT PAGE ---
export const ProductPage = () => {
    const { id } = useParams<{ id: string }>()
    const productId = Number(id)
    const { data, isLoading, isError } = useProduct(productId)

    if (isError) return <ProductError />
    if (isLoading) return <ProductSkeleton />
    if (!data) return <ProductEmpty />

    const { imageUrl, name, description, price, sizes, ingredients } = data

    return (
        <Container className="py-8 md:py-16">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-16">
                {/* Secțiunea Vizuală */}
                <div className="sticky top-28 col-span-1 md:col-span-5">
                    <div className="relative aspect-square overflow-hidden rounded-4xl border border-orange-50/50 bg-linear-to-b from-[#FFF7EE] to-[#FFF0E0] shadow-sm transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            className="size-full object-contain p-8 drop-shadow-2xl md:p-12"
                            src={imageUrl}
                            alt={name}
                        />
                    </div>
                </div>

                {/* Secțiunea Informații */}
                <div className="col-span-1 flex min-h-full flex-col md:col-span-7">
                    <div className="flex-1">
                        {/* Header: Titlu & Descriere */}
                        <header className="mb-8">
                            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                                {name}
                            </h1>
                            {description && (
                                <p className="text-base leading-relaxed font-medium text-gray-500 md:text-lg">
                                    {description}
                                </p>
                            )}
                        </header>

                        {/* Opțiuni: Mărime & Ingrediente */}
                        <section className="space-y-8">
                            {sizes && (
                                <div className="space-y-3">
                                    <p className="text-sm font-bold tracking-wider text-gray-400 uppercase">
                                        Alege mărimea
                                    </p>
                                    <SegmentedControl className="w-full max-w-md" options={sizes} />
                                </div>
                            )}

                            {ingredients.length > 0 && (
                                <div className="space-y-3">
                                    <p className="text-sm font-bold tracking-wider text-gray-400 uppercase">
                                        Adaugă în plus
                                    </p>
                                    <IngredientSelect ingredients={ingredients} />
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Footer: Preț & Acțiune */}
                    <footer className="sticky bottom-4 mt-12 border-t border-gray-100 bg-white/80 p-4 backdrop-blur-md md:static md:border-none md:bg-transparent md:p-0 md:backdrop-blur-none">
                        <Button
                            size="lg"
                            className="h-16 w-full rounded-2xl bg-[#FE5F00] text-lg font-bold shadow-xl shadow-orange-500/20 transition-all hover:bg-[#E55600] active:scale-95 md:w-[320px]"
                        >
                            Adaugă în coș — {price} MDL
                        </Button>
                    </footer>
                </div>
            </div>
        </Container>
    )
}
