import { type FilterOption, useProductsFilters } from "@entities/product"

import { Title } from "@shared/ui"
import { Checkbox, CheckboxGroupSkeleton } from "@shared/ui/checkbox"

export const ProductFilter = () => {
    // Scoatem și isError, și error pentru a vedea ce se întâmplă
    const { data, isLoading, isError, error } = useProductsFilters()

    console.log("React Query Status:", { isLoading, isError, error, data })

    // Dacă este eroare, afișăm eroarea, nu skeletonul!
    if (isError) {
        return <div className="text-red-500">A apărut o eroare: {error?.message}</div>
    }

    if (isLoading || !data) {
        return (
            <div className="w-56 shrink-0">
                <CheckboxGroupSkeleton />
            </div>
        )
    }

    const { types, sizes, ingredients } = data

    return (
        <div className="w-56 shrink-0">
            {/* Types */}
            <div className="flex flex-col gap-3.5">
                <Title as={"h3"}>Types</Title>
                {types.map(({ id, name }: FilterOption) => (
                    <Checkbox key={id} label={name} />
                ))}
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-3.5">
                <Title as={"h3"}>Sizes</Title>
                {sizes.map(({ id, name }: FilterOption) => (
                    <Checkbox key={id} label={name} />
                ))}
            </div>

            {/* Ingredients */}
            <div className="flex flex-col gap-3.5">
                <Title as={"h3"}>Ingredients</Title>
                {ingredients.map(({ id, name }: FilterOption) => (
                    <Checkbox key={id} label={name} />
                ))}
            </div>
        </div>
    )
}
