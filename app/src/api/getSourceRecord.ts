import apiClient from "./apiClient";

export const getSourceRecord = async (id?: string) => {
  const url = `/source-record/${id}`;
  const response = await apiClient.get(url);
  return response.data;
};
