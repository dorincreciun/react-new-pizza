export const parsePageParam = (value: string | null, totalPages: number): number => {
    const page = Number(value) || 1
    return Math.max(1, Math.min(page, Math.max(1, totalPages)))
}
