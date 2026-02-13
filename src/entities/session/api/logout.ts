import {apiClient} from "@shared/lib/openapi-fetch";

export const logout = async (): Promise<void> => {
    const { error } = await apiClient.POST('/auth/logout');

    if (error) {
        console.error("[Logout Error]:", error);
        throw new Error("Deconectarea a eșuat pe server.");
    }
}