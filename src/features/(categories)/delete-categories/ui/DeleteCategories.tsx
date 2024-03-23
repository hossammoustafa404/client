import { Button } from "@/shared/ui/(shadcn)/Button";
import { Trash } from "lucide-react";

const DeleteCategories = () => {
  return (
    <Button className="filled-btn !bg-red-600 hover:!bg-red-600/80">
      <Trash className="w-4" />
      <span>Delete</span>
    </Button>
  );
};

export default DeleteCategories;
