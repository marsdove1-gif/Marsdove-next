import { Text } from "@/components/typography";

type Props = {
  price: number;
  currency?: string;
};

export default function ProductPrice({
  price,
  currency = "₦",
}: Props) {
  return (
    <Text className="font-semibold text-primary">
      {currency}
      {price.toLocaleString()}
    </Text>
  );
}