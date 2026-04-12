import { cn } from "@ui/lib/utils";
import type { SelectHTMLAttributes } from "react";

type SelectColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<SelectColor, string> = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};
const sizeClass: Record<SelectSize, string> = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
  xl: "select-xl",
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  color?: SelectColor;
  selectSize?: SelectSize;
  ghost?: boolean;
  bordered?: boolean;
}

export function Select({ color, selectSize, ghost, bordered, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "select",
        color && colorClass[color],
        selectSize && sizeClass[selectSize],
        ghost && "select-ghost",
        bordered && "select-bordered",
        className,
      )}
      {...props}
    />
  );
}
