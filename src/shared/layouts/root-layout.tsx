import type { ReactNode } from "react"

interface Props {
    readonly children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
    return <div>{children}</div>
}
