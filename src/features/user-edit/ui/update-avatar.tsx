import { Edit2 } from "lucide-react"

import { UserAvatar } from "@entities/user"

export const UpdateAvatar = () => {
    return (
        <div className="relative">
            <UserAvatar />
            <button className="absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white text-[#FE5F00] shadow-md transition-all duration-150 hover:bg-[#FE5F00]/10">
                <Edit2 size={14} />
            </button>
        </div>
    )
}