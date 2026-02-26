import { type InputHTMLAttributes, type ReactNode, useId, useState } from "react"

import { Check } from "lucide-react"

import { cn } from "../utils"

/**
 * Proprietățile pentru componenta individuală Checkbox.
 */
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "id"> {
    /** Eticheta afișată lângă elementul de bifare. */
    label: ReactNode
    /** Clase CSS adiționale pentru personalizarea stilului containerului. */
    className?: string
}

/**
 * Proprietățile pentru grupul de checkbox-uri.
 */
interface CheckboxGroupProps<T extends string> {
    /** Valorile selectate implicit la montarea componentei. */
    defaultValue?: T[]
    /** Funcție de callback apelată la schimbarea selecției, returnând noul set de valori. */
    onChange?: (values: T[]) => void
    /** Lista de opțiuni ce vor fi randate în grup. */
    options: Array<CheckboxProps & { value: T }>
    /** Clase CSS pentru containerul grupului. */
    className?: string
}

/**
 * Proprietățile pentru starea de încărcare (Skeleton) a grupului.
 */
interface CheckboxGroupSkeletonProps {
    /** Numărul de elemente de tip skeleton ce vor fi afișate. */
    count?: number
    /** Clase CSS pentru containerul skeleton-ului. */
    className?: string
}

/**
 * Componentă Checkbox personalizată cu feedback vizual și suport pentru accesibilitate.
 * @param label - Eticheta descriptivă a input-ului.
 * @param className - Clase Tailwind pentru container.
 * @param rest - Atribute native de input (checked, disabled, onChange etc.).
 * @example
 * ```tsx
 * <Checkbox label="Accept termeni și condiții" onChange={(e) => console.log(e.target.checked)} />
 * ```
 */
export const Checkbox = ({ label, className, ...rest }: CheckboxProps) => {
    const id = useId()

    return (
        <label
            htmlFor={id}
            className={cn(
                "inline-flex cursor-pointer items-center gap-2 select-none",
                "has-disabled:cursor-not-allowed has-disabled:opacity-50",
                className,
            )}
        >
            <span className="relative size-6 shrink-0 overflow-hidden rounded-lg">
                <input type="checkbox" id={id} className="peer sr-only" {...rest} />

                <span
                    className={cn(
                        "absolute inset-0 flex items-center justify-center",
                        "bg-[#F1F1F1]",
                        "transition-all duration-200",
                        "peer-checked:bg-[#FE5F00]",
                        "peer-checked:[&_svg]:opacity-100",
                        "peer-checked:[&_svg]:scale-100",
                    )}
                >
                    <Check
                        size={16}
                        strokeWidth={3}
                        className="scale-90 text-white opacity-0 transition-all duration-200"
                    />
                </span>
            </span>

            <span className="text-base">{label}</span>
        </label>
    )
}

/**
 * Container pentru gestionarea unei liste de opțiuni multiple (Checkbox-uri).
 * Gestionează intern starea selecției și oferă sincronizare prin callback-ul onChange.
 * @param defaultValue - Array cu valorile selectate inițial.
 * @param onChange - Callback declanșat la fiecare modificare a listei de selecție.
 * @param options - Configurația fiecărui element din listă (label, value, disabled).
 * @param className - Clase pentru layout-ul containerului (implicit vertical flex).
 */
export const CheckboxGroup = <T extends string>({
    defaultValue = [],
    onChange,
    options,
    className,
}: CheckboxGroupProps<T>) => {
    const [selectedValues, setSelectedValues] = useState<T[]>(defaultValue)

    const toggle = (value: T) => {
        const nextValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value]

        setSelectedValues(nextValues)

        if (onChange) {
            onChange(nextValues)
        }
    }

    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {options.map((option) => (
                <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={selectedValues.includes(option.value)}
                    disabled={option.disabled}
                    onChange={() => toggle(option.value)}
                />
            ))}
        </div>
    )
}

/**
 * Componentă de tip placeholder (Skeleton) utilizată în timpul încărcării datelor pentru un grup de checkbox-uri.
 * @param count - Numărul de linii de skeleton randate.
 * @param className - Clase adiționale pentru containerul skeleton-ului.
 */
export const CheckboxGroupSkeleton = ({ count = 3, className }: CheckboxGroupSkeletonProps) => {
    return (
        <div className={cn("flex w-full flex-col gap-2", className)}>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="inline-flex items-center gap-4 select-none">
                    <span className="size-6 shrink-0 animate-pulse rounded-lg bg-gray-200" />
                    <span className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
                </div>
            ))}
        </div>
    )
}
