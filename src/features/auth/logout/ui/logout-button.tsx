import { useLogout } from "@features/auth/logout/lib/use-logout"

import { Button } from "@shared/ui"

interface Props {
    className?: string
}

export const LogoutButton = ({ className }: Props) => {
    const { isPending, mutate } = useLogout()

    return (
        <Button
            isLoading={isPending}
            kind={"ghost"}
            color="tertiary"
            className={className}
            onClick={() => mutate()}
        >
            Logout
        </Button>
    )
}
