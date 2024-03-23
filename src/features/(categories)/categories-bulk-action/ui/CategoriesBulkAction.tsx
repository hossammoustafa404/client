import { Button } from "@/shared/ui/(shadcn)/Button";
import { Edit } from "lucide-react";

const CategoriesBulkAction = () => {
  return (
    <Button className="filled-btn !bg-blue-600 hover:!bg-blue-600/80">
      <Edit className="w-4" />
      <span>Bulk Action</span>
    </Button>
  );
};

export default CategoriesBulkAction;
