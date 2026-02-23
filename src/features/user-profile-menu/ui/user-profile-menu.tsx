import { Link } from "react-router"

import { LogoutButton } from "@features/auth/logout"

import { UserAvatar } from "@entities/user"

import { AppRoutes } from "@shared/const"
import { Dropdown } from "@shared/ui"

export const UserProfileMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <UserAvatar className="size-11 border-2 border-white ring-2 ring-[#FE5F00]/10" />
            </Dropdown.Trigger>

            <Dropdown.Content>
                {/* Header-ul Dropdown-ului - Oferă context utilizatorului */}
                <div className="mb-1 border-b border-gray-50 px-3 py-3">
                    <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                        Contul meu
                    </p>
                    <p className="truncate text-sm font-semibold text-gray-900">John Doe</p>
                    <p className="truncate text-[11px] text-gray-500">john.doe@example.com</p>
                </div>

                {/* Opțiuni Meniu */}
                <div className="space-y-1">
                    <Dropdown.Item className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3" asChild>
                        <Link to={AppRoutes.PROFILE}>Setări profil</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3">
                        Comenzile mele
                    </Dropdown.Item>
                </div>

                {/* Separator și Buton de Logout */}
                <div className="mt-1 border-t border-gray-50 pt-1">
                    <Dropdown.Item
                        className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3"
                        asChild
                    >
                        <LogoutButton />
                    </Dropdown.Item>
                </div>
            </Dropdown.Content>
        </Dropdown>
    )
}
