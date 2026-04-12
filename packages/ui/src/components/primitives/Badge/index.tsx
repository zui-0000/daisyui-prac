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
        color && `badge-${color}`,
        size && `badge-${size}`,
        outline && "badge-outline",
        dash && "badge-dash",
        className,
      )}
      {...props}
    />
  );
}
