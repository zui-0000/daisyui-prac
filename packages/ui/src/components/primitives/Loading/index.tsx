import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type LoadingVariant = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
type LoadingSize = "xs" | "sm" | "md" | "lg" | "xl";
type LoadingColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

interface LoadingProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: LoadingVariant;
  loadingSize?: LoadingSize;
  color?: LoadingColor;
}

export function Loading({
  variant = "spinner",
  loadingSize,
  color,
  className,
  ...props
}: LoadingProps) {
  return (
    <span
      className={cn(
        "loading",
        `loading-${variant}`,
        loadingSize && `loading-${loadingSize}`,
        color && `text-${color}`,
        className,
      )}
      {...props}
    />
  );
}
