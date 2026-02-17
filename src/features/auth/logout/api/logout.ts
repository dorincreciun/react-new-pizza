import {apiClient} from "@shared/lib";

export const logout = async () => {
    await apiClient.POST("/auth/logout")
}