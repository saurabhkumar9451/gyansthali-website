import api from "./app";




// export const getAllCourses = (page = 0, size = 5) => {
//   return api.get(`/admin/courses?page=${page}&size=${size}`);
// };

export const getAllCourses = (
    page,
    size,
    sortBy,
    sortDir
) => {
    return api.get(
        `/admin/courses?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`
    );
};

// Get Course By Id
export const getCourseById = (id) => {
  return api.get(`/admin/courses/${id}`);
};

// Add Course
export const saveCourse = (data) => {
  return api.post("/admin/courses", data);
};

// Update Course
export const updateCourse = (id, data) => {
  return api.put(`/admin/courses/${id}`, data);
};

// Soft Delete
export const deactivateCourse = (id) => {
  return api.patch(`/admin/courses/${id}/deactivate`);
};

// SEARCH BY PAGE 
export const searchCourses = (keyword, page, size) => {
    return api.get(
        `/admin/courses/search?keyword=${keyword}&page=${page}&size=${size}`
    );
};