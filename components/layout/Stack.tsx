import { cn } from "@/lib/utils";

type StackProps = React.HTMLAttributes<HTMLDivElement>;

export default function Stack({
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}