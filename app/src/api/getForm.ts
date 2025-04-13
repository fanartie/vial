import apiClient from "./apiClient";

const getForm = async (id?: string) => {
  const url = id ? `/form/${id}` : "/form"; // if id is provided, fetch specific form
  const response = await apiClient.get(url);
  return response.data;
};

export default getForm;
