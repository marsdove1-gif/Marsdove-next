import { cn } from "@/lib/utils";

type GridProps = React.HTMLAttributes<HTMLDivElement>;

export default function Grid({
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        className
      )}
      {...props}
    />
  );
}