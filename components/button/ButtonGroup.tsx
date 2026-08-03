import { cn } from "@/lib/utils";

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>;

export default function ButtonGroup({
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        className
      )}
      {...props}
    />
  );
}