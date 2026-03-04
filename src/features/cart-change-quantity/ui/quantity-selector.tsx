import { Minus, Plus } from "lucide-react"

import { Button } from "@shared/ui"

interface Props {
    qty: number | null
}

export const QuantitySelector = ({ qty }: Props) => {
    if (!qty || qty < 1) return null

    return (
        <div className="relative flex items-center justify-center gap-10">
            <Button onlyIcon kind="outline">
                <Minus />
            </Button>
            <span className="absolute top-1/2 left-1/2 w-[24px] -translate-1/2 text-[20px] font-bold">
                {qty}
            </span>
            <Button onlyIcon kind="outline">
                <Plus />
            </Button>
        </div>
    )
}
