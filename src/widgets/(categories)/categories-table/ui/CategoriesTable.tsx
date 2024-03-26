"use client";

import { DataTable } from "@/shared/ui";
import { columns } from "../constants/columns";
import { useEffect, useState } from "react";
import { findManyCategories } from "@/entities/category";
import { usePagination } from "@/shared/lib";

const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const { page, limit } = usePagination();

  const skip = (page - 1) * limit;

  useEffect(() => {
    const findCategories = async () => {
      const data = await findManyCategories({
        limit: limit.toString(),
        skip: skip.toString(),
      });

      setCategories(() => data.products);
      setTotalCount(data.total);
    };

    if (page && limit) {
      findCategories();
    }
  }, [skip, limit]);

  return (
    <>
      <DataTable columns={columns} data={categories} rowCount={totalCount} />
    </>
  );
};

export default CategoriesTable;
