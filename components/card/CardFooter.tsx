import { cn } from "@/lib/utils";

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export default function CardFooter({
  className,
  ...props
}: CardFooterProps) {
  return (
    <footer
      className={cn(
        "flex items-center justify-between p-4",
        className
      )}
      {...props}
    />
  );
}