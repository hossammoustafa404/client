"use client";

import { Button } from "@/shared/ui/(shadcn)/Button";
import { Download } from "lucide-react";

const ImportCategories = () => {
  return (
    <Button
      variant="outline"
      className="outline-btn"
      onClick={() => console.log("feature")}
    >
      <Download className="w-4" />
      <span>Import</span>
    </Button>
  );
};

export default ImportCategories;
