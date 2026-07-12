import api from "./app";

export const getDashboardStatistics = () => {
    return api.get("/admin/dashboard");
};