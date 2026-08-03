import { cn } from "@/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium",
        className
      )}
      {...props}
    />
  );
}