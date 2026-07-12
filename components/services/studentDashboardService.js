import api from "./app";

export const getStudentDashboard = (studentId) => {
    return api.get(`/dashboard/student/${studentId}`);
};