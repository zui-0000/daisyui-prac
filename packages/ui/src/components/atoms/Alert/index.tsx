import { cn } from "@ui/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  icon?: ReactNode;
}

export function Alert({ variant, icon, className, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={cn("alert", variant && `alert-${variant}`, className)} {...props}>
      {icon}
      <span>{children}</span>
    </div>
  );
}
