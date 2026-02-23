import { Image } from "@shared/ui"

interface Props {
    src?: string | null
    alt?: string
}

export const ProductImage = ({ ...rest }: Props) => {
    return (
        <div className="aspect-square rounded-2xl bg-[#FFF7EE]">
            <Image className="size-full p-7" {...rest} />
        </div>
    )
}
