import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type InputColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `input-${color}`,
        inputSize && `input-${inputSize}`,
        ghost && "input-ghost",
        bordered && "input-bordered",
        className,
      )}
      {...props}
    />
  );
}
