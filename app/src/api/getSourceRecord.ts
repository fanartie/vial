import apiClient from "./apiClient";

// This function fetches a source record by its ID or all source records if no ID is provided
export const getSourceRecord = async (id?: string) => {
  const url = `/source-record/${id}`;
  const response = await apiClient.get(url);
  return response.data;
};
