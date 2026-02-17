import { useLogout } from "@features/auth/logout/lib/use-logout"

import { Button } from "@shared/ui"

export const LogoutButton = () => {
    const { isPending, mutate } = useLogout()

    return (
        <Button isLoading={isPending} onClick={() => mutate()}>
            logout
        </Button>
    )
}
