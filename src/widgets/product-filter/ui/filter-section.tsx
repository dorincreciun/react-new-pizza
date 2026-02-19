import type { FilterOption } from "@entities/product"

import { Title } from "@shared/ui"
import { Checkbox } from "@shared/ui/checkbox"

interface Props {
    title?: string
    data: FilterOption[]
}

export const FilterSection = ({ title, data }: Props) => {
    return (
        <div className="my-7.5 flex flex-col gap-3.5">
            {title && <Title as={"h3"}>{title}</Title>}
            {data.map(({ id, name }: FilterOption) => (
                <Checkbox key={id} label={name} />
            ))}
        </div>
    )
}