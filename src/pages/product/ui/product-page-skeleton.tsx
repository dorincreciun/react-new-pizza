import { Container } from "@shared/ui"

export const ProductPageSkeleton = () => {
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
