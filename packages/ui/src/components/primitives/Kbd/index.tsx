import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type KbdSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClass: Record<KbdSize, string> = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "kbd-md",
  lg: "kbd-lg",
  xl: "kbd-xl",
};

interface KbdProps extends HTMLAttributes<HTMLElement> {
  kbdSize?: KbdSize;
}

export function Kbd({ kbdSize, className, ...props }: KbdProps) {
  return <kbd className={cn("kbd", kbdSize && sizeClass[kbdSize], className)} {...props} />;
}
