import apiClient from "./apiClient";

// This function fetches a form by its ID or all forms if no ID is provided
export const getForm = async (id?: string) => {
  const url = id ? `/form/${id}` : "/form"; // if id is provided, fetch specific form
  const response = await apiClient.get(url);
  return response.data;
};
