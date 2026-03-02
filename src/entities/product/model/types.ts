import type { ApiSchema } from "@shared/types"

export type FilterOption = ApiSchema<'FilterOptionDto'>
export type IngredientType = ApiSchema<'IngredientResponseDto'>

export interface ProductEntity {
    /**
     * @description ID-ul unic al produsului
     * @example 1
     */
    id: number
    /**
     * @description Slug-ul unic al produsului (URL-friendly)
     * @example margherita
     */
    slug: string
    /**
     * @description Numele produsului
     * @example Pizza Margherita
     */
    name: string
    /**
     * @description Descrierea produsului
     * @example Pizza clasică cu roșii și mozzarella
     */
    description: string | null
    /**
     * @description Prețul produsului
     * @example 24.99
     */
    price: number
    /**
     * @description URL-ul imaginii produsului
     * @example https://example.com/images/margherita.jpg
     */
    imageUrl: string | null
    /**
     * @description Tipul produsului
     * @example SIMPLE
     * @enum {string}
     */
    type: "SIMPLE" | "CONFIGURABLE"
    /**
     * @description Lista de ingrediente (id = valoare tehnică, name = etichetă afișare)
     * @example [
     *       {
     *         "id": "roșii",
     *         "name": "Roșii"
     *       },
     *       {
     *         "id": "mozzarella",
     *         "name": "Mozzarella"
     *       },
     *       {
     *         "id": "busuioc",
     *         "name": "Busuioc"
     *       }
     *     ]
     */
    ingredients: IngredientType[]
    /**
     * @description Lista de mărimi disponibile (id = valoare tehnică, name = etichetă afișare)
     * @example [
     *       {
     *         "id": "mică",
     *         "name": "Mică"
     *       },
     *       {
     *         "id": "medie",
     *         "name": "Medie"
     *       },
     *       {
     *         "id": "mare",
     *         "name": "Mare"
     *       }
     *     ]
     */
    sizes: FilterOption[]
}


