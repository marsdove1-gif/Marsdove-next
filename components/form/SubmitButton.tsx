"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubmitButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  children: ReactNode;
  loadingText?: ReactNode;
  disableWhenInvalid?: boolean;
};

export default function SubmitButton({
  children,
  loadingText = "Submitting...",
  disableWhenInvalid = true,
  disabled,
  className,
  ...props
}: SubmitButtonProps) {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext();

  const isDisabled =
    disabled ||
    isSubmitting ||
    (disableWhenInvalid && !isValid);

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isSubmitting}
      className={cn(className)}
      {...props}
    >
      {isSubmitting ? loadingText : children}
    </Button>
  );
}