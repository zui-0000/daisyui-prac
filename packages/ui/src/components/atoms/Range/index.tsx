import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type RangeColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type RangeSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `range-${color}`,
        rangeSize && `range-${rangeSize}`,
        className,
      )}
      {...props}
    />
  );
}
