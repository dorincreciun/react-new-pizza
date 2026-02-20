import { CheckboxGroupSkeleton } from "@shared/ui/checkbox"

interface Props {
    count?: number
}

export const ProductFilterSkeleton = ({ count = 3 }: Props) => {
    return (
        <div className="w-56 shrink-0">
            {Array.from({ length: count }).map((_, index) => (
                <div className="my-7.5 flex flex-col gap-3.5" key={index}>
                    <div className="h-6 w-24 animate-pulse rounded-md bg-gray-200"></div>
                    <CheckboxGroupSkeleton />
                </div>
            ))}
        </div>
    )
}
