import { LoginButton } from "@features/auth/login"
import { UserProfileMenu } from "@features/user-profile-menu"

import { ToggleCart } from "@entities/cart"
import { useUser } from "@entities/user"

export const HeaderActions = () => {
    const user = useUser()

    return (
        <div className="flex items-center gap-4">
            <ToggleCart />
            {user ? <UserProfileMenu /> : <LoginButton />}
        </div>
    )
}
