import { Heading } from "@/shared/ui";
import { AddCategoryForm } from "@/features/(categories)/add-category";

const AddCategory = () => {
  return (
    <>
      {/* Header */}
      <header>
        <Heading title="Add Category" />
      </header>

      {/* Form Section */}
      <section className="mt-8 p-6 md:p-12 bg-white dark:bg-slate-950 rounded-md shadow-md max-w-[50rem] mx-auto">
        <AddCategoryForm />
      </section>
    </>
  );
};

export default AddCategory;
