import { cn } from "@ui/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonVariant = "outline" | "dash" | "soft";

const colorClass: Record<ButtonColor, string> = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  ghost: "btn-ghost",
  link: "btn-link",
};
const sizeClass: Record<ButtonSize, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};
const variantClass: Record<ButtonVariant, string> = {
  outline: "btn-outline",
  dash: "btn-dash",
  soft: "btn-soft",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  wide?: boolean;
  block?: boolean;
  circle?: boolean;
  square?: boolean;
  active?: boolean;
  loading?: boolean;
}

export function Button({
  color,
  size,
  variant,
  wide,
  block,
  circle,
  square,
  active,
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "btn",
        color && colorClass[color],
        size && sizeClass[size],
        variant && variantClass[variant],
        wide && "btn-wide",
        block && "btn-block",
        circle && "btn-circle",
        square && "btn-square",
        active && "btn-active",
        className,
      )}
      {...props}
    >
      {loading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}
