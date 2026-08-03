"use client";

import { Input } from "@/components/ui/input";

import Field from "../Field";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type EmailFieldProps<
  T extends FieldValues,
  N extends FieldPath<T>,
> = {
  control: Control<T>;
  name: N;
  label?: string;
  description?: string;
  placeholder?: string;
};

export default function EmailField<
  T extends FieldValues,
  N extends FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  placeholder,
}: EmailFieldProps<T, N>) {
  return (
    <Field
      control={control}
      name={name}
      label={label}
      description={description}
    >
      <Input
        type="email"
        placeholder={placeholder}
      />
    </Field>
  );
}