import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductActions() {
  return (
    <Button className="w-full">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
}