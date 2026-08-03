"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GroupProps = HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4;
};

export default function Group({
  columns = 1,
  className,
  children,
  ...props
}: GroupProps) {
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-6",
        cols[columns],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}