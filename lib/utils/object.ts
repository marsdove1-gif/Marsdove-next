export function omit<T extends object, K extends keyof T>(
  object: T,
  keys: K[],
): Omit<T, K> {

  const clone = { ...object };

  keys.forEach((key) => delete clone[key]);

  return clone;
}