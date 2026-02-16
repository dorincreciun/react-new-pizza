interface OverlayProps {
    onClick?: () => void
}

export const Overlay = ({ onClick }: OverlayProps) => {
    return (
        <div
            role="presentation"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
            onClick={onClick}
        />
    )
}
