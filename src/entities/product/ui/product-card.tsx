import { Link } from "react-router"

import type { ProductEntity } from "@entities/product/model/types"

import { getRouteProductDetails } from "@shared/const"
import { Image } from "@shared/ui"

type ProductCardActionType = ProductEntity["type"]

interface Props {
    id: number
    imageUrl: string
    name: string
    description: string
    price: number
    action: ProductCardActionType
}

export const ProductCard = ({ imageUrl, name, description, price, id }: Props) => {
    return (
        <div className="relative flex w-full flex-col">
            {/* Product image */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#FE5F00]/5 p-5">
                <Link
                    to={getRouteProductDetails(id)}
                    className="absolute inset-0 z-10"
                    aria-label={`View details for ${name}`}
                />
                <Image src={imageUrl} alt={`${name} | ${description}`} width={220} height={220} />
            </div>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 py-3.5">
                    <h3 className="mb-2 text-xl font-bold">{name}</h3>
                    <p className="text-[#B1B1B1]">{description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div>{price}</div>
                    <div>action</div>
                </div>
            </div>
        </div>
    )
}
