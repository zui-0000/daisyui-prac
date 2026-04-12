import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

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
        position && `tooltip-${position}`,
        color && `tooltip-${color}`,
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
