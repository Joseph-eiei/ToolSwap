import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import ToolCard from "@/components/ToolCard";
import FilterDrawer from "@/components/FilterDrawer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const tools = [
  {
    name: "Power Drill",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407",
    price: 15,
    rating: 4.8,
    distance: "0.5 miles",
    owner: "John D.",
  },
  {
    name: "Lawn Mower",
    image: "https://mobileimages.lowes.com/productimages/f94bc9a9-5609-4c7c-9a57-054db6b1bf9a/65712550.png?size=pdhism",
    price: 25,
    rating: 4.5,
    distance: "0.8 miles",
    owner: "Sarah M.",
  },
  {
    name: "Chainsaw",
    image: "https://stihlusa-images.imgix.net/Product/527/ms180cbe.png",
    price: 30,
    rating: 4.9,
    distance: "1.2 miles",
    owner: "Mike R.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-6">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">ToolSwap</h1>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/rentals")}
              className="flex items-center gap-2"
            >
              My Rentals
            </Button>
          </div>
          <SearchBar />
        </header>

        <CategoryList />

        <div className="flex justify-between items-center my-6">
          <h2 className="text-lg font-semibold">Nearby Tools</h2>
          <FilterDrawer />
        </div>

        <div className="grid gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;