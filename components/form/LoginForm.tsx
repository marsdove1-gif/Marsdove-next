"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import Form from "./Form";
import Section from "./Section";
import Group from "./Group";
import SubmitButton from "./SubmitButton";

import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";

import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),

  password: z
    .string()
    .min(1, "Password is required."),

  remember: z.boolean(),
});

type LoginValues = z.infer<typeof loginSchema>;

type LoginFormProps = {
  onSubmit?: (
    values: LoginValues,
  ) => Promise<void> | void;

  forgotPasswordHref?: string;

  registerHref?: string;
};

export default function LoginForm({
  onSubmit,
  forgotPasswordHref = "/forgot-password",
  registerHref = "/register",
}: LoginFormProps) {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),

    mode: "onChange",

    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleSubmit = async (
    values: LoginValues,
  ) => {
    try {
      await onSubmit?.(values);

      toast.success("Login successful.");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to log in. Please try again.",
      );
    }
  };

  return (
    <Form
      form={form}
      onSubmit={handleSubmit}
    >
      <Section>
        <Group>
          <EmailField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <PasswordField
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
        </Group>

        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...form.register("remember")}
              className="size-4 rounded border-input"
            />

            <span>
              Remember me
            </span>
          </label>

          <Link
            href={forgotPasswordHref}
            className="text-sm font-medium text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <SubmitButton
          className="w-full"
          loadingText="Logging in..."
        >
          Login
        </SubmitButton>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href={registerHref}
            className="font-medium text-primary hover:underline"
          >
            Create one
          </Link>
        </p>
      </Section>
    </Form>
  );
}