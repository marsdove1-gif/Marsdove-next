import theme from "./tokens";

export default function cssVariables() {
  return {
    "--md-primary": theme.colors.primary,
    "--md-secondary": theme.colors.secondary,
    "--md-accent": theme.colors.accent,

    "--md-bg": theme.colors.background,
    "--md-surface": theme.colors.surface,

    "--md-text": theme.colors.text.primary,
    "--md-text-secondary": theme.colors.text.secondary,

    "--md-border": theme.colors.border,

    "--md-radius": theme.radius.md,

    "--md-shadow": theme.shadow.md,
  };
}