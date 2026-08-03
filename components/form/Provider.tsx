"use client";

import {
  FormProvider as RHFProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

type ProviderProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  children: React.ReactNode;
};

export default function Provider<T extends FieldValues>({
  form,
  children,
}: ProviderProps<T>) {
  return (
    <RHFProvider {...form}>
      {children}
    </RHFProvider>
  );
}