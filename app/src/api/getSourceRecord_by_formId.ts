import apiClient from "./apiClient";

export const getSourceRecord_by_formId = async (id?: string) => {
  const url = `/source-record/form/${id}`;
  const response = await apiClient.get(url);
  return response.data;
};
