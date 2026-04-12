import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

const positionClass: Record<TooltipPosition, string> = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};
const colorClass: Record<TooltipColor, string> = {
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  tip: string;
  position?: TooltipPosition;
  color?: TooltipColor;
  open?: boolean;
}

export function Tooltip({
  tip,
  position,
  color,
  open,
  className,
  children,
  ...props
}: TooltipProps) {
  return (
    <div
      className={cn(
        "tooltip",
        position && positionClass[position],
        color && colorClass[color],
        open && "tooltip-open",
        className,
      )}
      data-tip={tip}
      {...props}
    >
      {children}
    </div>
  );
}
