import { cn } from "@ui/lib/utils";
import type { HTMLAttributes, LiHTMLAttributes } from "react";

type StepColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

interface StepsProps extends HTMLAttributes<HTMLUListElement> {
  vertical?: boolean;
}

interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  dataContent?: string;
  color?: StepColor;
  active?: boolean;
}

export function Steps({ vertical, className, ...props }: StepsProps) {
  return <ul className={cn("steps", vertical && "steps-vertical", className)} {...props} />;
}

export function Step({ dataContent, color, active, className, ...props }: StepProps) {
  return (
    <li
      className={cn(
        "step",
        color && `step-${color}`,
        active && `step-${color ?? "primary"}`,
        className,
      )}
      data-content={dataContent}
      {...props}
    />
  );
}
