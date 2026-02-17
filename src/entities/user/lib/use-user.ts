import { useQuery } from "@tanstack/react-query"

import type { UserEntity } from "@entities/user"

export const useUser = () => {
    const { data } = useQuery<UserEntity | null>({
        queryKey: ["authUser"],
        enabled: false,
    })

    return data ?? null
}
