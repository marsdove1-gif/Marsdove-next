"use client";

import { Textarea } from "@/components/ui/textarea";

import Field from "../Field";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type TextAreaFieldProps<
  T extends FieldValues,
  N extends FieldPath<T>,
> = {
  control: Control<T>;
  name: N;
  label?: string;
  description?: string;
  placeholder?: string;
  rows?: number;
};

export default function TextAreaField<
  T extends FieldValues,
  N extends FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  placeholder,
  rows = 5,
}: TextAreaFieldProps<T, N>) {

  return (
    <Field
      control={control}
      name={name}
      label={label}
      description={description}
    >
      <Textarea
        rows={rows}
        placeholder={placeholder}
      />
    </Field>
  );

}