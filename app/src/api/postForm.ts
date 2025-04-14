import apiClient from "./apiClient";

export const postForm = async (payload: any) => {
  const url = "/form";
  const response = await apiClient.post(url, payload);
  return response.data;
};
