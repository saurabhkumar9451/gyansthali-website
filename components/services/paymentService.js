import api from "./app";

export const getAllPayments = () => {
    return api.get("/admin/payments");
};