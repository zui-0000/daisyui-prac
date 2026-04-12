import { cn } from "@ui/lib/utils";
import type { ProgressHTMLAttributes } from "react";

type ProgressColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

const colorClass: Record<ProgressColor, string> = {
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
};

interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  color?: ProgressColor;
}

export function Progress({ color, className, ...props }: ProgressProps) {
  return <progress className={cn("progress", color && colorClass[color], className)} {...props} />;
}
