import { ofetch } from "ofetch";
const baseURL = "https://dummyjson.com";

export const apiClient = ofetch.create({ baseURL });
