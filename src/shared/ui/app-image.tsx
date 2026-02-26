import { type ImgHTMLAttributes, useEffect, useState } from "react"

import { cn } from "@shared/utils"

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
    fallback?: string
    src?: string | null
}

/**
 * Componentă pentru afișarea imaginilor cu suport integrat pentru fallback și gestionarea erorilor.
 * @param props - Proprietățile componentei, extinzând atributele standard `img`.
 * @param props.src - URL-ul imaginii sursă. Dacă este `null`, `undefined` sau sursa eșuează, se va folosi fallback-ul.
 * @param props.fallback - Calea către imaginea de rezervă (ex: un placeholder local). Implicit: `"/img/no-preview.jpg"`.
 * @param props.alt - Text alternativ pentru accesibilitate. Implicit: `"image"`.
 * @param props.loading - Strategia de încărcare (ex: "lazy", "eager"). Implicit: `"lazy"`.
 * @param props.className - Clase CSS adiționale (Tailwind) pentru personalizarea stilului imaginii.
 * @remarks
 * Componenta resetează starea de eroare ori de câte ori prop-ul `src` se schimbă.
 * Folosește utilitarul `cn` pentru a fuziona clasa default `object-cover` cu cele primite prin props.
 * @example
 * ```tsx
 * <Image
 *      src={avatarUrl}
 *      className="w-12 h-12 rounded-full border"
 *      alt="Profil utilizator"
 * />
 * ```
 */
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
