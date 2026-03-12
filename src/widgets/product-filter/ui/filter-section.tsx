import { Title } from "@shared/ui"
import { Checkbox } from "@shared/ui/checkbox"

export type BaseFilterOption = {
    id: number
    name: string
}

interface Props<T extends BaseFilterOption> {
    name: string
    urlKey: string
    items: T[]
    selectedValues: string[]
    onChange: (id: string) => void
}

export const FilterGroup = <T extends BaseFilterOption>({
    name,
    urlKey,
    items,
    selectedValues,
    onChange,
}: Props<T>) => {
    const handleChange = (id: string) => onChange(id)

    return (
        <div className="my-7.5 flex flex-col gap-3.5">
            {name && <Title as={"h3"}>{name}</Title>}

            {items.map(({ id, name }) => {
                const stringId = String(id)
                const isChecked = selectedValues.includes(stringId)

                return (
                    <Checkbox
                        key={id}
                        label={name}
                        checked={isChecked}
                        onChange={() => handleChange(stringId)}
                    />
                )
            })}
        </div>
    )
}
