import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type DividerColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";
type DividerPosition = "start" | "end";

const colorClass: Record<DividerColor, string> = {
  primary: "divider-primary",
  secondary: "divider-secondary",
  accent: "divider-accent",
  info: "divider-info",
  success: "divider-success",
  warning: "divider-warning",
  error: "divider-error",
  neutral: "divider-neutral",
};
const positionClass: Record<DividerPosition, string> = {
  start: "divider-start",
  end: "divider-end",
};

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  color?: DividerColor;
  position?: DividerPosition;
}

export function Divider({ vertical, color, position, className, ...props }: DividerProps) {
  return (
    <div
      className={cn(
        "divider",
        vertical && "divider-vertical",
        color && colorClass[color],
        position && positionClass[position],
        className,
      )}
      {...props}
    />
  );
}
