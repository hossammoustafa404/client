import { apiClient } from "@/shared/api";

// Find Many Categories
export const findManyCategories = async (params?: {
  skip?: string;
  limit?: string;
}) => {
  const query: { skip?: string; limit?: string } = {};
  if (params) {
    const { skip, limit } = params;
    if (skip) {
      query.skip = skip;
    }

    if (limit) {
      query.limit = limit;
    }
  }

  const data = await apiClient("/products", {
    params: query,
  });
  console.log(data);

  return data;
};
