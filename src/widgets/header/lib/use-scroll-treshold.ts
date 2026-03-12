import { useState, useEffect } from "react"

/**
 * Hook care returnează true dacă scroll-ul vertical depășește o anumită valoare.
 * @param threshold - Distanța în pixeli (default 50)
 */
export const useScrollThreshold = (threshold: number = 50) => {
    const [isExceeded, setIsExceeded] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > threshold
            setIsExceeded((prev) => (prev !== scrolled ? scrolled : prev))
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    return isExceeded
}
