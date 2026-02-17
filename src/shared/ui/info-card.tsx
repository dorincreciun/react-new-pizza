import type { ElementType, ReactNode } from "react"

const Root = ({ children }: { children: ReactNode }) => (
    <div className="overflow-hidden rounded-xl border border-black/6 bg-white shadow-sm">
        {children}
    </div>
)

const Header = ({ children }: { children: ReactNode }) => (
    <div className="border-b border-gray-100 px-6 py-4">{children}</div>
)

const Body = ({ children }: { children: ReactNode }) => (
    <div className="space-y-4 p-6">{children}</div>
)

const Row = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center gap-4 rounded-xl border border-black/6 bg-[#FAFAFA] p-4 transition-all duration-150 hover:bg-white">
        {children}
    </div>
)

const Icon = ({ icon: IconComponent }: { icon: ElementType }) => (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FE5F00]/10 text-[#FE5F00]">
        <IconComponent size={18} />
    </div>
)

const Content = ({ label, value }: { label: string; value: string }) => (
    <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs text-gray-500">{label}</p>
        <p className="truncate text-base font-medium text-gray-900">{value}</p>
    </div>
)

const Action = ({ children }: { children: ReactNode }) => (
    <div className="flex shrink-0 items-center justify-center">{children}</div>
)

export const InfoCard = Object.assign(Root, {
    Header,
    Body,
    Row,
    Icon,
    Content,
    Action,
})
