import { cn } from "@ui/lib/utils";
import type { TextareaHTMLAttributes } from "react";

type TextareaColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type TextareaSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `textarea-${color}`,
        textareaSize && `textarea-${textareaSize}`,
        ghost && "textarea-ghost",
        bordered && "textarea-bordered",
        className,
      )}
      {...props}
    />
  );
}
