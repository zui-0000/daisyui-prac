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
        color && `divider-${color}`,
        position && `divider-${position}`,
        className,
      )}
      {...props}
    />
  );
}
