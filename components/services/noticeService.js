import api from "./app";

// Get All Notices
export const getAllNotices = () => {
    return api.get("/notices");
};

// Get Notice By Id
export const getNoticeById = (id) => {
    return api.get(`/notices/${id}`);
};

// Add Notice
export const saveNotice = (data) => {
    return api.post("/notices", data);
};

// Update Notice
export const updateNotice = (id, data) => {
    return api.put(`/notices/${id}`, data);
};

// Soft Delete
export const deactivateNotice = (id) => {
    return api.patch(`/notices/${id}/deactivate`);
};