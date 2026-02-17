import { Calendar, Shield } from "lucide-react"

export const UserInfoProfile = () => {
    return (
        <div className="flex-1">
            <div className="mb-2 flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                <span className="flex items-center gap-1.5 rounded-lg bg-[#FE5F00]/10 px-3 py-1 text-xs font-semibold text-[#FE5F00]">
                    <Shield size={12} />
                    USER
                </span>
            </div>
            <p className="mb-4 text-gray-600">john.doe@example.com</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    Membru din ianuarie 2024
                </span>
            </div>
        </div>
    )
}
