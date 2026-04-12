import { cn } from "@ui/lib/utils";
import type { SelectHTMLAttributes } from "react";

type SelectColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `select-${color}`,
        selectSize && `select-${selectSize}`,
        ghost && "select-ghost",
        bordered && "select-bordered",
        className,
      )}
      {...props}
    />
  );
}
