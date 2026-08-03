import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLDivElement>;

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("space-y-6", className)}
      {...props}
    >
      {children}
    </section>
  );
}