import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost";
type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<BadgeColor, string> = {
  neutral: "badge-neutral",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
  ghost: "badge-ghost",
};
const sizeClass: Record<BadgeSize, string> = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
  xl: "badge-xl",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  size?: BadgeSize;
  outline?: boolean;
  dash?: boolean;
}

export function Badge({ color, size, outline, dash, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge",
        color && colorClass[color],
        size && sizeClass[size],
        outline && "badge-outline",
        dash && "badge-dash",
        className,
      )}
      {...props}
    />
  );
}
