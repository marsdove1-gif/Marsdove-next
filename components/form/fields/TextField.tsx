"use client";

import { Input } from "@/components/ui/input";
import Field from "../Field";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type TextFieldProps<
  T extends FieldValues,
  N extends FieldPath<T>,
> = {
  control: Control<T>;
  name: N;
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
};

export default function TextField<
  T extends FieldValues,
  N extends FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  placeholder,
  disabled,
}: TextFieldProps<T, N>) {

  return (
    <Field
      control={control}
      name={name}
      label={label}
      description={description}
    >
      <Input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
    </Field>
  );

}