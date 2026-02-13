import {apiClient} from "@shared/lib/openapi-fetch";

export const refreshSession = async (): Promise<string> => {
    const { data, error } = await apiClient.POST('/auth/refresh');

    if (error) {
        console.error("[RefreshSession Error]:", error);
        throw new Error("Sesiunea a expirat. Te rugăm să te reautentifici.");
    }

    const token = data?.data?.accessToken;

    if (!token) {
        throw new Error("Serverul nu a trimis un token nou.");
    }

    return token;
}