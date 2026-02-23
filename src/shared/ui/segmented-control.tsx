import {
    type HTMLAttributes,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react"

import { cn } from "@shared/utils"

type OptionType = {
    name: string
    id: string
}

interface ISegmentedControlProps {
    options: readonly OptionType[]
    defaultValue?: string
    onChange?: (value: string, index: number) => void
    name?: string
    className?: string
}

interface SegmentedThumbProps extends HTMLAttributes<HTMLDivElement> {
    thumbWidth: number
    thumbX: number
    ref?: React.Ref<HTMLDivElement>
}

export const SegmentedThumb = ({
    thumbWidth,
    thumbX,
    style,
    className,
    ref,
    ...props
}: SegmentedThumbProps) => {
    return (
        <div
            ref={ref}
            style={{
                transform: `translateX(${thumbX}px)`,
                width: `${thumbWidth}px`,
                ...style,
            }}
            className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 z-0",
                "h-[calc(100%-5px)] rounded-xl bg-white",
                // "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
                "transition-transform duration-300 ease-in-out will-change-transform",
                className,
            )}
            {...props}
        />
    )
}

export const SegmentedControl = ({
    options = [],
    defaultValue,
    onChange,
    name = "segmented-control",
    className,
}: ISegmentedControlProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(() => {
        if (!defaultValue || !options.length) return 0
        const idx = options.findIndex((opt) => opt.id === defaultValue)
        return idx === -1 ? 0 : idx
    })

    const [thumbWidth, setThumbWidth] = useState<number>(0)
    const [thumbX, setThumbX] = useState<number>(0)

    const containerRef = useRef<HTMLDivElement | null>(null)
    const optionRefs = useRef<(HTMLDivElement | null)[]>([])

    const recalcThumb = useCallback(() => {
        const container = containerRef.current
        const activeEl = optionRefs.current[activeIndex]

        if (!container || !activeEl) return

        const containerRect = container.getBoundingClientRect()
        const activeRect = activeEl.getBoundingClientRect()

        setThumbWidth(activeRect.width)
        setThumbX(activeRect.left - containerRect.left)
    }, [activeIndex])

    useEffect(() => {
        if (defaultValue !== undefined && options.length > 0) {
            const idx = options.findIndex((opt) => opt.id === defaultValue)
            if (idx !== -1) setActiveIndex(idx)
        }
    }, [defaultValue, options])

    useLayoutEffect(() => {
        if (options.length === 0) return

        recalcThumb()

        const container = containerRef.current
        if (!container) return

        const observer = new ResizeObserver(recalcThumb)
        observer.observe(container)

        return () => observer.disconnect()
    }, [recalcThumb, options.length])

    const handleChange = (index: number) => {
        const selectedOption = options[index]
        if (!selectedOption) return

        setActiveIndex(index)
        onChange?.(selectedOption.id, index)
    }

    if (!options || options.length === 0) {
        return null
    }

    return (
        <div
            ref={containerRef}
            role="radiogroup"
            className={cn(
                "relative flex w-full items-center h-10 px-0.75",
                "rounded-2xl bg-[#F5F5F5]",
                "focus-within:ring-2 focus-within:ring-black/5",
                "transition-all duration-200",
                className,
            )}
        >
            <SegmentedThumb thumbWidth={thumbWidth} thumbX={thumbX} />

            {options.map((option, index) => {
                const id = `${option.id}`
                const isActive = index === activeIndex

                return (
                    <div
                        key={option.id}
                        ref={(el) => {
                            optionRefs.current[index] = el
                        }}
                        className="relative z-10 flex-1"
                    >
                        <input
                            type="radio"
                            id={id}
                            name={name}
                            value={option.id}
                            checked={isActive}
                            onChange={() => handleChange(index)}
                            className="peer sr-only"
                        />
                        <label
                            htmlFor={id}
                            className={cn(
                                "block w-full cursor-pointer px-4 py-2",
                                "text-center text-sm font-semibold tracking-tight",
                                "transition-colors duration-300",
                                isActive ? "text-[#FE5F00]" : "text-[#606060] hover:text-[#202020]",
                            )}
                        >
                            {option.name}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}
