interface Props {
    error?: {
        message?: string
    }
}

export const ProductFilterError = ({ error }: Props) => {
    if (!error?.message) {
        return null
    }

    return <div className="text-red-500">A apărut o eroare: {error.message}</div>
}
