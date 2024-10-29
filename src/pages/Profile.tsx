import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ToolCard from "@/components/ToolCard";
import Reviews from "@/components/Reviews";

const mockTools = [
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

const Profile = () => {
  const navigate = useNavigate();
  const isOwnProfile = false; // This would be determined by comparing the profile ID with the logged-in user's ID

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </button>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-500">Member since 2023</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium">4.8 ★</span>
                  <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
                </div>
              </div>
            </div>
            {isOwnProfile && (
              <Button variant="outline" size="sm" onClick={() => navigate("/settings")}>
                Edit Profile
              </Button>
            )}
          </div>

          <p className="text-gray-600 mb-4">
            DIY enthusiast and tool collector. I love helping others with their projects
            by sharing my tools with the community.
          </p>
        </div>

        <Tabs defaultValue="tools" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tools">Listed Tools</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="tools" className="space-y-4">
            {mockTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </TabsContent>
          <TabsContent value="reviews">
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;