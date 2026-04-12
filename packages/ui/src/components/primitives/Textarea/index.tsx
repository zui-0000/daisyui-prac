import { cn } from "@ui/lib/utils";
import type { TextareaHTMLAttributes } from "react";

type TextareaColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type TextareaSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<TextareaColor, string> = {
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
};
const sizeClass: Record<TextareaSize, string> = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg",
  xl: "textarea-xl",
};

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: TextareaColor;
  textareaSize?: TextareaSize;
  ghost?: boolean;
  bordered?: boolean;
}

export function Textarea({
  color,
  textareaSize,
  ghost,
  bordered,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        "textarea",
        color && colorClass[color],
        textareaSize && sizeClass[textareaSize],
        ghost && "textarea-ghost",
        bordered && "textarea-bordered",
        className,
      )}
      {...props}
    />
  );
}
