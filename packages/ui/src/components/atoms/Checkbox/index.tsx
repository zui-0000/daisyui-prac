import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type CheckboxColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `checkbox-${color}`,
        checkboxSize && `checkbox-${checkboxSize}`,
        className,
      )}
      {...props}
    />
  );
}
