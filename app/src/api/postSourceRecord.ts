import apiClient from "./apiClient";

// This function posts a new source record
export const postSourceRecord = async (payload: any) => {
  const url = "/source-record";
  const response = await apiClient.post(url, payload);
  return response.data;
};
