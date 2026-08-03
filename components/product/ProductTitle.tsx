import { Heading } from "@/components/typography";
import { cn } from "@/lib/utils";

type ProductTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ProductTitle({
  children,
  className,
}: ProductTitleProps) {
  return (
    <Heading
      level={4}
      className={cn("line-clamp-2", className)}
    >
      {children}
    </Heading>
  );
}