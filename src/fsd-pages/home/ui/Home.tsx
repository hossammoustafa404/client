import { Button } from "@/shared/ui/(shadcn)/Button";
import { Eye } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Button className="bg-red-500">
        <Eye />
        Home
      </Button>
    </div>
  );
};

export default Home;
