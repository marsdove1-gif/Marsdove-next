import { cn } from "@/lib/utils";

type CardActionsProps =
  React.HTMLAttributes<HTMLDivElement>;

export default function CardActions({
  className,
  ...props
}: CardActionsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className
      )}
      {...props}
    />
  );
}