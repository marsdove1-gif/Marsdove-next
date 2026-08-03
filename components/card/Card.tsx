import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  className,
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border bg-background shadow-sm",
        className
      )}
      {...props}
    />
  );
}