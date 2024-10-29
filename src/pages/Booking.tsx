import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [insurance, setInsurance] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: "You will receive a confirmation email shortly.",
    });
    navigate("/");
  };

  const basePrice = 15;
  const insurancePrice = 5;
  const total = basePrice + (insurance ? insurancePrice : 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Book Power Drill</h1>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">Select Rental Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="insurance"
                  checked={insurance}
                  onCheckedChange={(checked) => setInsurance(checked as boolean)}
                />
                <div>
                  <label
                    htmlFor="insurance"
                    className="font-medium cursor-pointer"
                  >
                    Add Tool Protection
                  </label>
                  <p className="text-sm text-gray-500">
                    Covers accidental damage during rental period
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    +${insurancePrice}/day
                  </p>
                </div>
                <Shield className="h-5 w-5 text-primary ml-auto flex-shrink-0" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-lg border hover:border-primary transition-colors">
                  <span className="font-medium">Credit/Debit Card</span>
                  <CreditCard className="h-5 w-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg border hover:border-primary transition-colors">
                  <span className="font-medium">PayPal</span>
                  <img src="/paypal.svg" alt="PayPal" className="h-5" />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-3">Rental Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Base Price</span>
                  <span>${basePrice}/day</span>
                </div>
                {insurance && (
                  <div className="flex justify-between text-sm">
                    <span>Tool Protection</span>
                    <span>${insurancePrice}/day</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>${total}/day</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100">
            <div className="max-w-md mx-auto">
              <Button
                onClick={handleBooking}
                className="w-full"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;