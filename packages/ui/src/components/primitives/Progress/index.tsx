import { cn } from "@ui/lib/utils";
import type { ProgressHTMLAttributes } from "react";

type ProgressColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  color?: ProgressColor;
}

export function Progress({ color, className, ...props }: ProgressProps) {
  return (
    <progress className={cn("progress", color && `progress-${color}`, className)} {...props} />
  );
}
