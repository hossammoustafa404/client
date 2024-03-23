import { Button } from "@/shared/ui/(shadcn)/Button";
import { Download } from "lucide-react";

const ExportCategories = () => {
  return (
    <Button variant="outline" className="outline-btn">
      <Download className="w-4" />
      <span>Export</span>
    </Button>
  );
};

export default ExportCategories;
