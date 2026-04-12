import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type LoadingVariant = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
type LoadingSize = "xs" | "sm" | "md" | "lg" | "xl";
type LoadingColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

const variantClass: Record<LoadingVariant, string> = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};
const sizeClass: Record<LoadingSize, string> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "loading-xl",
};
const colorClass: Record<LoadingColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

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
        variantClass[variant],
        loadingSize && sizeClass[loadingSize],
        color && colorClass[color],
        className,
      )}
      {...props}
    />
  );
}
