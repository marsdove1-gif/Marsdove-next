"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StepProps = {
  active?: boolean;
  completed?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Step({
  active,
  completed,
  children,
  className,
}: StepProps) {

  return (
    <div
      className={cn(
        "rounded-xl border p-6 transition-all",
        active && "border-primary",
        completed && "opacity-80",
        className,
      )}
    >
      {children}
    </div>
  );

}