import type {ApiSchema} from "@shared/types";
import {apiClient} from "@shared/lib/openapi-fetch";

export const loginAccount = async (dto: ApiSchema<'LoginDto'>): Promise<ApiSchema<'AuthResponseDto'>> => {
    const {data, error} = await apiClient.POST('/auth/login', {
        body: dto
    })

    if (error) {
        console.error("[LoginSession Error]:", error);
        throw new Error(error.error);
    }

    if (!data?.data) {
        throw new Error("Utilizatorul nu a putut fi creat");
    }

    return data.data;
}