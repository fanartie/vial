import apiClient from "./apiClient";

export const getForm = async (id?: string) => {
  const url = id ? `/form/${id}` : "/form"; // if id is provided, fetch specific form
  const response = await apiClient.get(url);
  return response.data;
};
