import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type ToggleColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type ToggleSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `toggle-${color}`,
        toggleSize && `toggle-${toggleSize}`,
        className,
      )}
      {...props}
    />
  );
}
