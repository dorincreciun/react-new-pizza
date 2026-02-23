import { type ImgHTMLAttributes, useEffect, useState } from "react"

import { cn } from "@shared/utils"

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
    fallback?: string
    src?: string | null
}

export const Image = ({
    src,
    fallback = "/img/no-preview.jpg",
    alt = "image",
    loading = "lazy",
    className,
    ...props
}: ImageProps) => {
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsError(false)
    }, [src])

    const imageSrc = isError || !src ? fallback : src

    return (
        <img
            src={imageSrc}
            alt={alt}
            onError={() => setIsError(true)}
            loading={loading}
            className={cn("object-cover", className)}
            {...props}
        />
    )
}
