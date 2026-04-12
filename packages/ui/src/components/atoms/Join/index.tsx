import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

interface JoinProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
}

interface JoinItemProps extends HTMLAttributes<HTMLDivElement> {}

export function Join({ vertical, className, ...props }: JoinProps) {
  return <div className={cn("join", vertical && "join-vertical", className)} {...props} />;
}

export function JoinItem({ className, ...props }: JoinItemProps) {
  return <div className={cn("join-item", className)} {...props} />;
}
