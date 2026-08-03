export default function progress(
  current: number,
  total: number,
) {
  if (total <= 0) return 0;

  return ((current + 1) / total) * 100;
}