import api from "./app";

export const saveEnquiry = (data) => {
  return api.post("/enquiries", data);
};