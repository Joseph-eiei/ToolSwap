import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ToolCard from "@/components/ToolCard";

const RentalList = () => {
  const navigate = useNavigate();

  // Mock rental data
  const rentals = [
    {
      name: "Power Drill",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      price: 15,
      rating: 4.8,
      distance: "0.5 miles",
      owner: "John D.",
    },
    {
      name: "Lawn Mower",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      price: 25,
      rating: 4.5,
      distance: "0.8 miles",
      owner: "Sarah M.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mr-3 hover:text-gray-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">My Rentals</h1>
        </div>

        <div className="grid gap-4">
          {rentals.map((tool) => (
            <div key={tool.name} className="relative">
              <ToolCard {...tool} />
              <button
                onClick={() => navigate("/messages")}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
              >
                Message
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentalList;