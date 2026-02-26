import {
    createContext,
    type HTMLAttributes,
    type ReactElement,
    type ReactNode,
    type RefObject,
    useCallback,
    useContext,
    useLayoutEffect,
    useRef,
    useState,
} from "react"

import { cn } from "@shared/utils"

// --- TYPES ---

interface PriorityContextType {
    /** Referință către containerul părinte care limitează lățimea. */
    containerRef: RefObject<HTMLDivElement | null>
    /** Referință către elementul "Mai mult" (More) pentru calculul lățimii acestuia. */
    moreButtonRef: RefObject<HTMLButtonElement | null>
    /** Mapare a referințelor elementelor individuale pentru calcularea lățimii intrinseci. */
    itemsRef: RefObject<Map<string, HTMLElement>>
}

interface PriorityMainProps<T> extends HTMLAttributes<HTMLDivElement> {
    /** Lista completă de date ce trebuie randate. */
    items: T[]
    /** Funcție de randare pentru un element individual. */
    renderItem: (item: T) => ReactElement
    /** Funcție de randare pentru elementul de tip "dropdown" sau "collapse" care conține restul elementelor. */
    renderMore: (items: T[]) => ReactElement | null
    /** Înălțimea fixă a containerului pentru a preveni layout shift în timpul calculului. */
    height: number
}

interface PriorityNavigationProps<T> {
    items: T[]
    containerRef: RefObject<HTMLElement | null>
    itemsRef: RefObject<Map<string, HTMLElement>>
    moreButtonRef: RefObject<HTMLElement | null>
}

// --- UTILS ---

/**
 * Calculează lățimea reală (intrinsecă) a unui element fără a-l randa vizibil în layout-ul principal.
 * @param el - Elementul HTML pentru care se dorește calculul lățimii.
 * @returns Lățimea elementului în pixeli.
 */
export function calculateIntrinsicWidth<T extends HTMLElement>(el: T): number {
    const original = el.style.cssText

    el.style.display = "inline-block"
    el.style.width = "max-content"
    el.style.whiteSpace = "nowrap"
    el.style.position = "absolute"
    el.style.visibility = "hidden"

    const width = el.getBoundingClientRect().width
    el.style.cssText = original

    return width
}

// --- CONTEXT & HOOKS ---

const PriorityContext = createContext<PriorityContextType | null>(null)

export const usePriorityContext = () => {
    const ctx = useContext(PriorityContext)
    if (!ctx) {
        throw new Error("usePriorityContext must be used within PriorityContext")
    }
    return ctx
}

/**
 * Hook care implementează algoritmul de detectare a overflow-ului orizontal.
 * Calculează câte elemente încap în container și pe care le mută în lista de "overflow".
 */
export const usePriorityNavigation = <T,>({
    items,
    containerRef,
    itemsRef,
    moreButtonRef,
}: PriorityNavigationProps<T>) => {
    const [isReady, setIsReady] = useState<boolean>(false)
    const [visibleItems, setVisibleItems] = useState<T[]>([])
    const [overflowItems, setOverflowItems] = useState<T[]>([])

    const calculate = useCallback(() => {
        const container = containerRef.current
        const moreBtn = moreButtonRef.current
        const elements = Array.from(itemsRef.current.values())

        if (!container || !moreBtn || elements.length === 0) return

        const containerStyle = window.getComputedStyle(container)
        const paddingX =
            parseFloat(containerStyle.paddingLeft) + parseFloat(containerStyle.paddingRight)
        const borderX =
            parseFloat(containerStyle.borderLeftWidth) + parseFloat(containerStyle.borderRightWidth)

        const containerTotalWidth = container.getBoundingClientRect().width
        const availableWidth = containerTotalWidth - paddingX - borderX

        const SAFETY_BUFFER = 20
        const moreButtonWidth = calculateIntrinsicWidth(moreBtn) + SAFETY_BUFFER

        let usedWidth = 0
        let visibleCount = 0

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i]
            if (!element) continue

            const itemWidth = calculateIntrinsicWidth(element)
            const needsMoreButton = i < elements.length - 1
            const totalWidth = itemWidth + (needsMoreButton ? moreButtonWidth : 0)

            if (usedWidth + totalWidth <= availableWidth) {
                usedWidth += itemWidth
                visibleCount++
            } else {
                break
            }
        }

        setVisibleItems(items.slice(0, visibleCount))
        setOverflowItems(items.slice(visibleCount))
        setIsReady(true)
    }, [items, containerRef, itemsRef, moreButtonRef])

    useLayoutEffect(() => {
        setIsReady(false)
        calculate()

        const observer = new ResizeObserver(calculate)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [calculate, containerRef])

    return { visibleItems, overflowItems, isReady }
}

// --- COMPONENTS ---

/**
 * Componenta principală care gestionează randarea condiționată bazată pe lățimea disponibilă.
 * Randează o versiune invizibilă a tuturor elementelor pentru a le măsura, apoi afișează doar ce încape.
 */
const PriorityMain = <T,>({
    items,
    renderItem,
    renderMore,
    className,
    height,
    style,
    ...rest
}: PriorityMainProps<T>) => {
    const { containerRef, itemsRef, moreButtonRef } = usePriorityContext()

    const { visibleItems, overflowItems, isReady } = usePriorityNavigation<T>({
        items,
        containerRef,
        itemsRef,
        moreButtonRef,
    })

    return (
        <div
            ref={containerRef}
            className={cn("relative", className)}
            style={{ ...style, height }}
            {...rest}
        >
            {/* Starea de încărcare / calcul */}
            {!isReady && (
                <div className="flex size-full items-center justify-around gap-2 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-full shrink-0 animate-pulse rounded-2xl bg-[#F0F0F0]",
                                i % 2 === 0 ? "w-24" : "w-32",
                            )}
                        />
                    ))}
                </div>
            )}

            {/* Elementele vizibile */}
            {isReady && (
                <>
                    {visibleItems.map(renderItem)}
                    {overflowItems.length > 0 && renderMore(overflowItems)}
                </>
            )}

            {/* Zonă invizibilă pentru măsurători */}
            <div
                className="pointer-events-none invisible absolute top-0 left-0 flex flex-nowrap opacity-0"
                aria-hidden="true"
            >
                {/* Măsurăm elementul "More" */}
                {overflowItems.length === 0 && (
                    <div ref={moreButtonRef as any} className="shrink-0">
                        {renderMore(items)}
                    </div>
                )}

                {/* Măsurăm fiecare element individual */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) itemsRef.current.set(index.toString(), el)
                            else itemsRef.current.delete(index.toString())
                        }}
                        className="shrink-0"
                    >
                        {renderItem(item)}
                    </div>
                ))}
            </div>
        </div>
    )
}

/**
 * Provider care gestionează referințele necesare pentru logica de Priority Navigation.
 */
const PriorityProvider = ({ children }: { children: ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const moreButtonRef = useRef<HTMLButtonElement>(null)
    const itemsRef = useRef<Map<string, HTMLElement>>(new Map())

    return (
        <PriorityContext.Provider value={{ containerRef, moreButtonRef, itemsRef }}>
            {children}
        </PriorityContext.Provider>
    )
}

/**
 * Sistem de navigare inteligentă care mută automat elementele ce nu încap într-un meniu tip "Mai mult".
 * @example
 * ```tsx
 *      <PriorityNavigation>
 *          <PriorityNavigation.Main
 *              items={categories}
 *              height={48}
 *              renderItem={(cat) => <CategoryLink key={cat.id} data={cat} />}
 *              renderMore={(overflow) => <DropdownMenu items={overflow} />}
 *          />
 *      </PriorityNavigation>
 * ```
 */
export const PriorityNavigation = Object.assign(PriorityProvider, {
    Main: PriorityMain,
})
