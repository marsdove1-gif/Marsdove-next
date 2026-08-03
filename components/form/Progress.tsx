"use client";

import { cn } from "@/lib/utils";

type ProgressProps = {
  value: number;
  max?: number;
  className?: string;
};

export default function Progress({
  value,
  max = 100,
  className,
}: ProgressProps) {

  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100,
  );

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-full bg-muted",
        className,
      )}
    >
      <div
        className="h-2 rounded-full bg-primary transition-all duration-300"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );

}