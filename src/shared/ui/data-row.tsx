import type { ElementType, ReactNode } from "react"

interface Props {
    icon: ElementType
    label: string
    value: string
    action?: ReactNode
}

export const DataRow = ({ icon: Icon, label, value, action }: Props) => {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-black/6 bg-[#FAFAFA] p-4 transition-all duration-150 hover:bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FE5F00]/10">
                <Icon size={18} className="text-[#FE5F00]" />
            </div>
            <div className="flex-1">
                <p className="mb-1 text-xs text-gray-500">{label}</p>
                <p className="text-base font-medium text-gray-900">{value}</p>
            </div>
            {action}
        </div>
    )
}