import { Title } from "@shared/ui"
import { Checkbox } from "@shared/ui/checkbox"

import { useFilterParams } from "../lib/use-filter-params"

export type BaseFilterOption = {
    id: number
    name: string
}

interface Props<T extends BaseFilterOption> {
    name: string
    urlKey: string
    items: T[]
}

export const FilterGroup = <T extends BaseFilterOption>({ name, urlKey, items }: Props<T>) => {
    const { isSelected, toggleStep } = useFilterParams(urlKey)

    return (
        <div className="my-7.5 flex flex-col gap-3.5">
            {name && <Title as="h3">{name}</Title>}

            {items.map(({ id, name }) => {
                const stringId = String(id)

                return (
                    <Checkbox
                        key={id}
                        label={name}
                        checked={isSelected(stringId)}
                        onChange={() => toggleStep(stringId)}
                    />
                )
            })}
        </div>
    )
}
