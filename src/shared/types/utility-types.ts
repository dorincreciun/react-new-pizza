import type { components_v1 } from "@shared/types"

export type ApiSchema<T extends keyof components_v1["schemas"]> = components_v1["schemas"][T]
