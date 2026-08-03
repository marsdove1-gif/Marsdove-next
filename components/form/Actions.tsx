"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ActionsProps = {
  children: ReactNode;
  className?: string;
  align?: "start" | "center" | "end" | "between";
};

export default function Actions({
  children,
  className,
  align = "end",
}: ActionsProps) {

  const justify = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 pt-6",
        justify[align],
        className,
      )}
    >
      {children}
    </div>
  );
}