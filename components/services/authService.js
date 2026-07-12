import api from "./api";

export const registerStudent = (data) => {
  return api.post("/auth/register", data);
};

export const loginStudent = (data) => {
  return api.post("/auth/login", data);
};