import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type CheckboxColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<CheckboxColor, string> = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
};
const sizeClass: Record<CheckboxSize, string> = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg",
  xl: "checkbox-xl",
};

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  color?: CheckboxColor;
  checkboxSize?: CheckboxSize;
}

export function Checkbox({ color, checkboxSize, className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "checkbox",
        color && colorClass[color],
        checkboxSize && sizeClass[checkboxSize],
        className,
      )}
      {...props}
    />
  );
}
