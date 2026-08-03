"use client";

import { Input } from "@/components/ui/input";

import Field from "../Field";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type NumberFieldProps<
  T extends FieldValues,
  N extends FieldPath<T>,
> = {
  control: Control<T>;
  name: N;
  label?: string;
  description?: string;
  placeholder?: string;
  min?: number;
  max?: number;
};

export default function NumberField<
  T extends FieldValues,
  N extends FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  placeholder,
  min,
  max,
}: NumberFieldProps<T, N>) {
  return (
    <Field
      control={control}
      name={name}
      label={label}
      description={description}
    >
      <Input
        type="number"
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </Field>
  );
}