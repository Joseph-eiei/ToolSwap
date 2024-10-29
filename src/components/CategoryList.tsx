import { Wrench, Scissors, TreePine, Hammer, PaintBucket } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Power Tools", icon: Wrench },
  { name: "Garden", icon: TreePine },
  { name: "Hand Tools", icon: Hammer },
  { name: "Painting", icon: PaintBucket },
  { name: "Others", icon: Scissors },
];

const CategoryList = () => {
  return (
    <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.name}
            className={cn(
              "flex flex-col items-center min-w-[80px] p-3 rounded-lg",
              "bg-white border border-gray-100 shadow-sm",
              "hover:border-primary hover:text-primary transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
          >
            <Icon className="h-6 w-6 mb-2" />
            <span className="text-sm whitespace-nowrap">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;