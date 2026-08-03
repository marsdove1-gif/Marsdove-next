"use client";

import type {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

import Provider from "./Provider";

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
};

export default function Form<T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: FormProps<T>) {
  return (
    <Provider form={form}>
      <form
        className={className}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </Provider>
  );
}