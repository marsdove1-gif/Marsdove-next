export interface FormStep {
  id: string;
  title?: string;
  description?: string;
}

export interface FormFlow {
  current: number;
  total: number;
}

export interface FormActions {
  next(): void;
  prev(): void;
  submit(): void;
}