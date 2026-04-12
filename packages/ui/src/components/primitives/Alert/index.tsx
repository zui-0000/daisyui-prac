import { cn } from "@ui/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

const variantClass: Record<AlertVariant, string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  icon?: ReactNode;
}

export function Alert({ variant, icon, className, children, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn("alert", variant && variantClass[variant], className)}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
