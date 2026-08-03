import { cn } from "@/lib/utils";

type CaptionProps = React.HTMLAttributes<HTMLElement>;

export default function Caption({
  className,
  ...props
}: CaptionProps) {
  return (
    <small
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}