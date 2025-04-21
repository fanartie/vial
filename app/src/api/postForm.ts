import apiClient from "./apiClient";

// This function posts a new form
export const postForm = async (payload: any) => {
  const url = "/form";
  const response = await apiClient.post(url, payload);
  return response.data;
};
