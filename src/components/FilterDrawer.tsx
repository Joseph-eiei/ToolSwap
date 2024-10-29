import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react";

const FilterDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-primary transition-colors">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Price Range ($/day)</label>
              <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Distance (miles)</label>
              <Slider defaultValue={[5]} max={20} step={1} className="mt-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Minimum Rating</label>
              <Slider defaultValue={[4]} max={5} step={0.5} className="mt-2" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;