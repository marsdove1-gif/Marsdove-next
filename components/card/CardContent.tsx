import { cn } from "@/lib/utils";

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export default function CardContent({
  className,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn(
        "p-4",
        className
      )}
      {...props}
    />
  );
}