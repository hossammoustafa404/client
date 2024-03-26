import { useSearchParams } from "next/navigation";

export const usePagination = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));

  return { page, limit };
};
