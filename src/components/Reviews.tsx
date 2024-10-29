import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const mockReviews = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
    date: "2024-02-15",
    text: "Great experience! The tools were in perfect condition and John was very helpful.",
  },
  {
    id: 2,
    author: "Mike R.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 4,
    date: "2024-02-10",
    text: "Very responsive and professional. Would rent from again.",
  },
];

const Reviews = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {mockReviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={review.avatar} />
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <button 
                    className="font-semibold hover:text-primary transition-colors"
                    onClick={() => navigate(`/profile/1`)}
                  >
                    {review.author}
                  </button>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium">
                    {review.rating} {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{review.text}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Reviews;