import type {ApiSchema} from "@shared/types";
import {apiClient} from "@shared/lib/openapi-fetch";

export const registerAccount = async (dto: ApiSchema<'RegisterDto'>): Promise<ApiSchema<'AuthResponseDto'>> => {
    const {data, error} = await apiClient.POST('/auth/register', {
        body: dto
    })

    if (error) {
        console.error("[RegisterSession Error]:", error);
        throw new Error(error.error);
    }

    if (!data?.data) {
        throw new Error("Utilizatorul nu a putut fi creat");
    }

    return data.data;
}