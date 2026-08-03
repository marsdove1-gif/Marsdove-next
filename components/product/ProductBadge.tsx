import { Badge } from "@/components/ui/badge";

type Props = {
  children: React.ReactNode;
};

export default function ProductBadge({
  children,
}: Props) {
  return <Badge>{children}</Badge>;
}