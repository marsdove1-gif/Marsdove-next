"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type DividerProps = HTMLAttributes<HTMLHRElement>;

export default function Divider({
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-border",
        className,
      )}
      {...props}
    />
  );
}