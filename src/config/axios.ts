import axios from "axios";

// Axios Instanse
const authAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer token",
  },
});

/**
 * Reusable Post Request Function
 * @param {string} endpoint
 * @param {any} body
 */
export const postRequest = async (endpoint: string, body: any) => {
  const { data } = await authAxios.post(endpoint, body);
  return data;
};

/**
 * Reusable Get Request Function
 * @param {string} endpoint
 */
export const getRequest = async (endpoint: string) => {
  const { data } = await authAxios.get(endpoint);
  return data;
};

/**
 * Reusable Patch Request Function
 * @param {string} endpoint
 * @param {any} body
 */
export const patchRequest = async (endpoint: string, body: any) => {
  const { data } = await authAxios.patch(endpoint, body);
  return data;
};

/**
 * Reusable Delete Request Function
 * @param {string} endpoint
 */
export const deleteRequest = async (endpoint: string) => {
  const { data } = await authAxios.delete(endpoint);
  return data;
};

export default authAxios;
