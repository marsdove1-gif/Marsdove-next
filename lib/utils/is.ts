export const is = {
  string: (value: unknown): value is string =>
    typeof value === "string",

  number: (value: unknown): value is number =>
    typeof value === "number",

  boolean: (value: unknown): value is boolean =>
    typeof value === "boolean",

  function: (value: unknown): value is Function =>
    typeof value === "function",

  object: (value: unknown): value is object =>
    value !== null && typeof value === "object",

  array: Array.isArray,
};