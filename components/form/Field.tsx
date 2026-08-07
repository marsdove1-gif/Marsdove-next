"use client";

import type { ReactElement, ReactNode } from "react";
import { cloneElement } from "react";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import {
  Controller,
} from "react-hook-form";

type FieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  label?: ReactNode;
  description?: ReactNode;
  children: ReactElement;
};

export default function Field<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  children,
}: FieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="space-y-2">
          {label && (
            <label
              htmlFor={name}
              className="text-sm font-medium"
            >
              {label}
            </label>
          )}

          {cloneElement(children, {
            ...field,
            id: name,
            "aria-invalid": fieldState.invalid,
            "aria-describedby": description
              ? `${name}-description`
              : undefined,
          })}

          {description && (
            <p
              id={`${name}-description`}
              className="text-sm text-muted-foreground"
            >
              {description}
            </p>
          )}

          {fieldState.error?.message && (
            <p
              role="alert"
              className="text-sm text-destructive"
            >
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}


