import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type KbdSize = "xs" | "sm" | "md" | "lg" | "xl";

interface KbdProps extends HTMLAttributes<HTMLElement> {
  kbdSize?: KbdSize;
}

export function Kbd({ kbdSize, className, ...props }: KbdProps) {
  return <kbd className={cn("kbd", kbdSize && `kbd-${kbdSize}`, className)} {...props} />;
}
