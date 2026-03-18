import { Button, Container, Image } from "@shared/ui"

export const ProductPageError = () => {
    return (
        <Container className="flex h-[60vh] flex-col items-center justify-center gap-6">
            <div className="space-y-2 text-center">
                <Image src="/img/ceva-nu-a-mers-bine.png" width={450} height={450} />
                <h2 className="text-3xl font-bold text-gray-800">Ups! Ceva nu a mers bine</h2>
                <p className="text-gray-500">Nu am putut încărca detaliile produsului.</p>
            </div>
            <Button size="lg" onClick={() => window.location.reload()}>
                Încearcă din nou
            </Button>
        </Container>
    )
}
