import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex w-full space-x-4 bg-white px-8 py-2 rounded-lg">
      <Search className="my-auto me-4" />
      <Input placeholder="Search" className="grow" />
    </div>
  );
};

export default SearchBar;
