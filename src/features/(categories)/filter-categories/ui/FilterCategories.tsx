import { Button } from "@/shared/ui/(shadcn)/Button";

const FilterCategories = () => {
  return (
    <form className="flex w-full items-center gap-x-8">
      <input className="w-1/2" />
      <div className="w-1/2 flex gap-x-3">
        <Button
          type="submit"
          className="filled-btn !bg-green-600 hover:!bg-green-600/80 w-1/2"
        >
          Filter
        </Button>
        <Button
          type="reset"
          className="filled-btn !bg-gray-600 hover:!bg-gray-600/80 w-1/2"
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FilterCategories;
