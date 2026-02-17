import { LoginButton } from "@features/auth/login"
import { LogoutButton } from "@features/auth/logout"

import { ToggleCart } from "@entities/cart"
import { useUser } from "@entities/user"

export const HeaderActions = () => {
    const user = useUser()

    return (
        <div className="flex items-center gap-4">
            <ToggleCart />
            {user ? <LogoutButton /> : <LoginButton />}
        </div>
    )
}
