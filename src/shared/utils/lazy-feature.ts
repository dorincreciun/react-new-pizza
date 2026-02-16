import { type ComponentType, lazy } from "react"

export const lazyFeature = <T extends Record<string, unknown>>(
    importFn: () => Promise<T>,
    componentName: keyof T,
) => {
    return lazy(async () => {
        const module = await importFn()
        return {
            default: module[componentName] as ComponentType<Record<string, never>>,
        }
    })
}
