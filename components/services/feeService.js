import api from "./api";

export const feeLogin = (data) => {
  return api.post("/fee/login", data);
};
