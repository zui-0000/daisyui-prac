import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type InputColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<InputColor, string> = {
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};
const sizeClass: Record<InputSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: InputColor;
  inputSize?: InputSize;
  ghost?: boolean;
  bordered?: boolean;
}

export function Input({ color, inputSize, ghost, bordered, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "input",
        color && colorClass[color],
        inputSize && sizeClass[inputSize],
        ghost && "input-ghost",
        bordered && "input-bordered",
        className,
      )}
      {...props}
    />
  );
}
