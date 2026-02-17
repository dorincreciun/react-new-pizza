import type { ElementType } from "react"

import { Calendar, Mail, Shield } from "lucide-react"

import { StatCard } from "@shared/ui"

interface StatsProps {
    title: string
    value: string
    label: string
    icon: ElementType
    variant: "white" | "primary"
}

export const DashboardStats = () => {
    const stats: StatsProps[] = [
        {
            title: "Total comenzi",
            value: "24",
            label: "În ultimele 30 zile",
            icon: Calendar,
            variant: "primary",
        },
        {
            title: "Puncte fidelitate",
            value: "1,250",
            label: "Disponibile acum",
            icon: Shield,
            variant: "white",
        },
        {
            title: "Valoare totală",
            value: "2,450",
            label: "Lei cheltuiți",
            icon: Mail,
            variant: "white",
        },
    ]
    return (
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    )
}
