import { ShoppingBag, User } from "lucide-react"

import { Button } from "@shared/ui"

export const HeaderActions = () => {
    return (
        <div className="flex items-center gap-4">
            <Button kind={"outline"} onlyIcon>
                <ShoppingBag />
            </Button>
            <Button>
                <User />
                <span className="max-md:hidden">Login</span>
            </Button>
        </div>
    )
}
