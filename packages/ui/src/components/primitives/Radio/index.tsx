import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type RadioColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type RadioSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `radio-${color}`,
        radioSize && `radio-${radioSize}`,
        className,
      )}
      {...props}
    />
  );
}
