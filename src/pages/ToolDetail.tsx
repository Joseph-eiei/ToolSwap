import { Calendar, Star, MapPin, Shield, User, ChevronLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const toolImages = [
  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407",
  "https://images.unsplash.com/photo-1504148455328-c376907d081c",
];

const ToolDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 pb-24">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 py-4 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Home
        </button>

        <Carousel className="w-full max-w-md mx-auto mb-6">
          <CarouselContent>
            {toolImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img src={image} alt={`Tool view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">Power Drill - Professional Grade</h1>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate("/messages")}
                className="rounded-full"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>0.5 miles away</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div 
                  className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => navigate('/profile/1')}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                    alt="Owner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <button
                    onClick={() => navigate('/profile/1')}
                    className="font-semibold hover:text-primary transition-colors"
                  >
                    John D.
                  </button>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span>Verified Owner</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              Professional-grade power drill with variable speed control and hammer function. 
              Perfect for both DIY projects and professional use. Includes carrying case and 
              standard drill bits.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 20V Lithium-Ion Battery</li>
              <li>• Variable Speed: 0-2000 RPM</li>
              <li>• LED Work Light</li>
              <li>• Weight: 3.5 lbs</li>
            </ul>
          </div>

          <Separator />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">$15</span>
            <span className="text-gray-500">/day</span>
          </div>
          <Button 
            onClick={() => navigate("/booking")}
            className="px-8"
          >
            Request Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;