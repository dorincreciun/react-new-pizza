import { Edit2 } from "lucide-react"

import { UserAvatar } from "@entities/user"

import { Button } from "@shared/ui"

export const UpdateAvatar = () => {
    return (
        <div className="relative">
            <UserAvatar className={'size-24'} />
            <Button
                onlyIcon
                size={'sm'}
                color={'secondary'}
                className="absolute right-0 bottom-0 rounded-full"
            >
                <Edit2 size={14} />
            </Button>
        </div>
    )
}
