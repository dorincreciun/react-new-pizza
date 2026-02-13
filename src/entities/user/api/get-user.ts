import {apiClient} from "@shared/lib/openapi-fetch";
import type {ApiSchema} from "@shared/types";

export const getUser = async (): Promise<ApiSchema<'UserResponseDto'>> => {
    const { data, error } = await apiClient.GET('/auth/me');

    if (error) {
        console.error("[GetUser Error]:", error);
        throw new Error(error.error);
    }

    if (!data?.data) {
        throw new Error("Datele utilizatorului sunt indisponibile în acest moment");
    }

    return data.data;
}