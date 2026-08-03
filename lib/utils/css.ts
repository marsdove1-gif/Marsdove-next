export function css(
  ...styles: Array<Record<string, string | number | undefined>>
) {
  return Object.assign({}, ...styles);
}