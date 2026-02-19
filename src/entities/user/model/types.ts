export type UserEntity = {
    /**
     * @description ID-ul unic al utilizatorului
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    id: string
    /**
     * @description Adresa de email a utilizatorului
     * @example john.doe@example.com
     */
    email: string
    /**
     * @description Numele utilizatorului
     * @example John
     */
    firstName: string | null
    /**
     * @description Prenumele utilizatorului
     * @example Doe
     */
    lastName: string | null
    /**
     * @description URL-ul imaginii de profil
     * @example https://example.com/profile.jpg
     */
    profileImage: string | null
    /**
     * @description Rolul utilizatorului în sistem
     * @example USER
     * @enum {string}
     */
    rol: "USER" | "ADMIN"
}