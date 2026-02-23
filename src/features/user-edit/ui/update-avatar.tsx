import { Edit2 } from "lucide-react"

import { UserAvatar } from "@entities/user"

import { cn } from "@shared/utils"

import { useUpdateAvatar } from "../lib/use-update-avatar"

export const UpdateAvatar = () => {
    const { preview, handleFileChange } = useUpdateAvatar()

    return (
        <div className="relative inline-block">
            <UserAvatar preview={preview} className="size-24" />

            <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            <label
                htmlFor="avatar-upload"
                className={cn(
                    // 1. Poziționare (Layout)
                    "absolute right-0 bottom-0",

                    // 2. Box Model & Flex (Size & Alignment)
                    "flex h-8 w-8 items-center justify-center",

                    // 3. Stil Vizual (Shape, Colors, Shadows)
                    "rounded-full bg-[#FFFAF4] text-[#FE5F00] shadow-sm shadow-[#FE5F00]/20",

                    // 4. Interactivitate (Transitions & Animations)
                    "cursor-pointer transition-all duration-200",
                    "hover:scale-110 hover:opacity-95",
                    "active:scale-95",
                )}
            >
                <Edit2 size={14} />
            </label>
        </div>
    )
}
