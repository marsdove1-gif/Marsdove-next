"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import Field from "../Field";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type SearchFieldProps<
  T extends FieldValues,
  N extends FieldPath<T>,
> = {
  control: Control<T>;
  name: N;
  label?: string;
  description?: string;
  placeholder?: string;
};

export default function SearchField<
  T extends FieldValues,
  N extends FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  placeholder,
}: SearchFieldProps<T, N>) {
  return (
    <Field
      control={control}
      name={name}
      label={label}
      description={description}
    >
      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          type="search"
          placeholder={placeholder}
          className="pl-10"
        />

      </div>
    </Field>
  );
}