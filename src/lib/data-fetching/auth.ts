import { postRequest } from "@config/axios";

/**
 * Reusable Register Request Function
 * @param {any} body
 */
export const registerRequest = async (body: any) => {
  const data = await postRequest("/auth/register", body);
  return data;
};

/**
 * Reusable Login Request Function
 * @param {any} body
 */
export const loginRequest = async (body: any) => {
  const data = await postRequest("/auth/login", body);
  return data;
};
