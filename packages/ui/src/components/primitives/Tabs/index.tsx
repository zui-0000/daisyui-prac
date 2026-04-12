import { cn } from "@ui/lib/utils";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

type TabsVariant = "boxed" | "bordered" | "lifted";
type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TabsVariant;
  tabsSize?: TabsSize;
}

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Tabs({ variant, tabsSize, className, ...props }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "tabs",
        variant && `tabs-${variant}`,
        tabsSize && `tabs-${tabsSize}`,
        className,
      )}
      {...props}
    />
  );
}

export function Tab({ active, className, ...props }: TabProps) {
  return <button role="tab" className={cn("tab", active && "tab-active", className)} {...props} />;
}
