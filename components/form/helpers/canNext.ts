export default function canNext(
  current: number,
  total: number,
) {
  return current < total - 1;
}