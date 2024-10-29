import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Search for tools..."
        className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200 focus:border-primary focus:ring-primary"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
};

export default SearchBar;