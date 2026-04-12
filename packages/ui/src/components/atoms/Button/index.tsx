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
        color && `btn-${color}`,
        size && `btn-${size}`,
        variant && `btn-${variant}`,
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
