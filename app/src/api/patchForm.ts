import apiClient from "./apiClient";

export const patchForm = async (id: string, payload: any) => {
  const url = `/form/${id}`; // URL to patch the form
  const response = await apiClient.patch(url, payload);
  return response.data;
};
