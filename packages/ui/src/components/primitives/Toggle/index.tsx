import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type ToggleColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type ToggleSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<ToggleColor, string> = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
};
const sizeClass: Record<ToggleSize, string> = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
  xl: "toggle-xl",
};

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  color?: ToggleColor;
  toggleSize?: ToggleSize;
}

export function Toggle({ color, toggleSize, className, ...props }: ToggleProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "toggle",
        color && colorClass[color],
        toggleSize && sizeClass[toggleSize],
        className,
      )}
      {...props}
    />
  );
}
