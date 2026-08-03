import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default function Section({
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-20", className)}
      {...props}
    />
  );
}