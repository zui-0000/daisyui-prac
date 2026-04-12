import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type RadioColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type RadioSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<RadioColor, string> = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  info: "radio-info",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error",
};
const sizeClass: Record<RadioSize, string> = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg",
  xl: "radio-xl",
};

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  color?: RadioColor;
  radioSize?: RadioSize;
}

export function Radio({ color, radioSize, className, ...props }: RadioProps) {
  return (
    <input
      type="radio"
      className={cn(
        "radio",
        color && colorClass[color],
        radioSize && sizeClass[radioSize],
        className,
      )}
      {...props}
    />
  );
}
