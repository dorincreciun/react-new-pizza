interface Props {
    count?: number
}

export const ProductCardSkeleton = ({ count = 1 }: Props) =>
    Array.from({ length: count }, (_, i) => (
        <div className="relative flex animate-pulse flex-col rounded-2xl p-4" key={i}>
            {/* Image skeleton */}
            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-gray-50 p-5">
                <div className="h-55 w-55 rounded-full bg-gray-200" />
            </div>

            {/* Content skeleton */}
            <div className="flex flex-1 flex-col">
                <div className="flex-1 py-3.5">
                    {/* Title */}
                    <div className="mb-2 h-6 w-3/4 rounded-md bg-gray-200" />

                    {/* Description */}
                    <div className="space-y-2">
                        <div className="h-4 w-full rounded-md bg-gray-200" />
                        <div className="h-4 w-5/6 rounded-md bg-gray-200" />
                    </div>
                </div>

                {/* Price + button */}
                <div className="flex items-center justify-between">
                    <div className="h-6 w-16 rounded-md bg-gray-200" />
                    <div className="h-10 w-28 rounded-xl bg-gray-200" />
                </div>
            </div>

            {/* Settings icon */}
            {/*<div className="absolute top-5 right-5 h-6 w-6 rounded-full bg-gray-200" />*/}
        </div>
    ))
