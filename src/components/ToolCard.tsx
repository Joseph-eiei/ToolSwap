import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  distance: string;
  owner: string;
}

const ToolCard = ({ name, image, price, rating, distance, owner }: ToolCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="animate-fade-in bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      onClick={() => navigate(`/tool/1`)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{distance} away</span>
          <span className="mx-2">•</span>
          <button 
            className="text-primary hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/1`);
            }}
          >
            {owner}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">${price}/day</span>
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;