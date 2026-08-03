"use client";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";

import Field from "../Field";

import type {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type PasswordFieldProps<
  T extends FieldValues,
  N extends FieldPath<T>,
> = {
  control: Control<T>;
  name: N;
  label?: string;
  description?: string;
  placeholder?: string;
};

export default function PasswordField<
  T extends FieldValues,
  N extends FieldPath<T>,
>({
  control,
  name,
  label,
  description,
  placeholder,
}: PasswordFieldProps<T, N>) {

  const [show, setShow] = useState(false);

  return (
    <Field
      control={control}
      name={name}
      label={label}
      description={description}
    >
      <div className="relative">

        <Input
          type={show ? "text" : "password"}
          placeholder={placeholder}
        />

        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={() => setShow(!show)}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

      </div>
    </Field>
  );

}