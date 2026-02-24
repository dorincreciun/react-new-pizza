import { User } from "lucide-react"
import { Link } from "react-router"

import { LogoutButton } from "@features/auth/logout"

import { AppRoutes } from "@shared/const"
import { Button, Dropdown } from "@shared/ui"

export const UserProfileMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Trigger asChild>
                <Button kind={"outline"}>
                    <User />
                    Профиль
                </Button>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Item
                    className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3"
                    asChild
                >
                    <Link to={AppRoutes.PROFILE}>Setări profil</Link>
                </Dropdown.Item>
                <Dropdown.Item className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3">
                    Comenzile mele
                </Dropdown.Item>
                <Dropdown.Item
                    className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3"
                    asChild
                >
                    <LogoutButton />
                </Dropdown.Item>
            </Dropdown.Content>
        </Dropdown>
    )
}
