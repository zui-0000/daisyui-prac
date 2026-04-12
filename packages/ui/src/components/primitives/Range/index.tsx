import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type RangeColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type RangeSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<RangeColor, string> = {
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  info: "range-info",
  success: "range-success",
  warning: "range-warning",
  error: "range-error",
};
const sizeClass: Record<RangeSize, string> = {
  xs: "range-xs",
  sm: "range-sm",
  md: "range-md",
  lg: "range-lg",
  xl: "range-xl",
};

interface RangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  color?: RangeColor;
  rangeSize?: RangeSize;
}

export function Range({ color, rangeSize, className, ...props }: RangeProps) {
  return (
    <input
      type="range"
      className={cn(
        "range",
        color && colorClass[color],
        rangeSize && sizeClass[rangeSize],
        className,
      )}
      {...props}
    />
  );
}
