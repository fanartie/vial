import apiClient from "./apiClient";

// This function fetches a source record by its form ID or all source records if no ID is provided
export const getSourceRecord_by_formId = async (id?: string) => {
  const url = `/source-record/form/${id}`;
  const response = await apiClient.get(url);
  return response.data;
};
