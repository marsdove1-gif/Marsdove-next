"use client";

import { cn } from "@/lib/utils";

type FeedbackProps = {
  message?: string;
  type?: "success" | "error" | "warning" | "info";
  className?: string;
};

export default function Feedback({
  message,
  type = "info",
  className,
}: FeedbackProps) {
  if (!message) return null;

  const styles = {
    success:
      "border-green-500 bg-green-50 text-green-700 dark:bg-green-950/20 dark:text-green-400",
    error:
      "border-red-500 bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400",
    warning:
      "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-950/20 dark:text-yellow-400",
    info:
      "border-primary bg-primary/10 text-primary",
  };

  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        styles[type],
        className,
      )}
    >
      {message}
    </div>
  );
}