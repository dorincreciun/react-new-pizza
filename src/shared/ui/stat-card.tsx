import type { ElementType } from "react"

interface Props {
    title: string
    value: string
    label: string
    icon: ElementType
    variant: "white" | "primary"
}

export const StatCard = ({ title, value, label, icon: Icon, variant = "white" }: Props) => {
    const isPrimary = variant === "primary"

    const containerClasses = isPrimary
        ? "bg-gradient-to-br from-[#FE5F00] to-[#F45A00] text-white shadow-md"
        : "bg-white border border-black/[0.06] shadow-sm text-gray-900"

    const iconContainerClasses = isPrimary
        ? "bg-white/20 text-white"
        : "bg-[#FE5F00]/10 text-[#FE5F00]"

    const labelClasses = isPrimary ? "opacity-75" : "text-gray-500"
    const titleClasses = isPrimary ? "opacity-90" : "text-gray-600"

    return (
        <div className={`${containerClasses} rounded-xl p-6`}>
            <div className="mb-2 flex items-center justify-between">
                <p className={`text-sm font-medium ${titleClasses}`}>{title}</p>
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconContainerClasses}`}
                >
                    <Icon size={18} />
                </div>
            </div>
            <p className="text-3xl font-bold">{value}</p>
            <p className={`mt-1 text-xs ${labelClasses}`}>{label}</p>
        </div>
    )
}