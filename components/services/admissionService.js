// import api from "./app";

// export const saveAdmission = (data) => {
//   return api.post("/admissions", data);
// };

// // Admissions
// export const getAllAdmissions = () => {
//   return api.get("/admin/admissions");
// };

// export const getAdmissionById = (id) => {
//   return api.get(`/admin/admissions/${id}`);
// };

// export const approveAdmission = (id) => {
//   return api.put(`/admin/admissions/${id}/approve`);
// };

// export const rejectAdmission = (id) => {
//   return api.put(`/admin/admissions/${id}/reject`);
// };

// // Students
// export const getAllStudents = () => {
//   return api.get("/admin/students");
// };

// // Payments
// export const getAllPayments = () => {
//   return api.get("/admin/payments");
// };

// export const deactivateStudent = (id) => {
//   return api.patch(`/admin/students/${id}/deactivate`);

  
// };


import api from "./app";

export const saveAdmission = (data) => {
  return api.post("/admissions", data);
};

// Admissions
export const getAllAdmissions = () => {
  return api.get("/admin/admissions");
};

export const getAdmissionById = (id) => {
  return api.get(`/admin/admissions/${id}`);
};

export const getAdmissionByStudentId = (studentId) => {
  return api.get(`/admissions/student/${studentId}`);
};

export const approveAdmission = (id) => {
  return api.put(`/admin/admissions/${id}/approve`);
};

export const rejectAdmission = (id) => {
  return api.put(`/admin/admissions/${id}/reject`);
};

// Students
export const getAllStudents = () => {
  return api.get("/admin/students");
};

// Payments
export const getAllPayments = () => {
  return api.get("/admin/payments");
};

export const deactivateStudent = (id) => {
  return api.patch(`/admin/students/${id}/deactivate`);
};

export const getAdmissionByAdmissionNo = (admissionNo) => {
    return api.get(`/admissions/admission-no/${admissionNo}`);
};