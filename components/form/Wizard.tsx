"use client";

import type { ReactNode } from "react";

type WizardProps = {
  step: number;
  children: ReactNode[];
};

export default function Wizard({
  step,
  children,
}: WizardProps) {

  return (
    <>
      {children[step] ?? null}
    </>
  );

}