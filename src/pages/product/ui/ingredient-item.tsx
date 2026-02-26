import { Image } from "@shared/ui"
import { cn } from "@shared/utils"

interface Props {
    name: string
    image?: string | null
    price: string
    isActive: boolean
    onClick: () => void
}

export const IngredientItem = ({ name, image, price, isActive, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "rounded-2xl border p-3",
                "flex cursor-pointer flex-col items-center gap-2",
                "transition-all duration-300 ease-in-out",
                isActive
                    ? "border-[#FE5F00] bg-[#FE5F00]/5 shadow-sm"
                    : "border-transparent hover:border-gray-300 hover:bg-gray-50",
                "focus-visible:ring-2 focus-visible:ring-[#FE5F00] focus-visible:outline-none",
            )}
        >
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={"http://localhost:3000/" + image}
                    alt={name}
                    width={110}
                    height={110}
                    className={cn(
                        "rounded-xl object-cover transition-transform duration-300 ease-in-out",
                        isActive ? "scale-105" : "group-hover:scale-105",
                    )}
                />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-1 text-center">
                <div className="text-xs font-normal text-gray-700">{name}</div>
                <div className="text-sm font-semibold text-gray-900">{price} MDL</div>
            </div>
        </div>
    )
}
