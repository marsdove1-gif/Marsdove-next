import { cn } from "@/lib/utils";

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export default function CardHeader({
  className,
  ...props
}: CardHeaderProps) {
  return (
    <header
      className={cn(
        "p-4",
        className
      )}
      {...props}
    />
  );
}