import { cn } from "@/lib/utils";

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

export default function Text({
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-7 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}