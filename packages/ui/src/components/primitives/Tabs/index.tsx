import { cn } from "@ui/lib/utils";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

type TabsVariant = "boxed" | "bordered" | "lifted";
type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";

const variantClass: Record<TabsVariant, string> = {
  boxed: "tabs-boxed",
  bordered: "tabs-bordered",
  lifted: "tabs-lifted",
};
const sizeClass: Record<TabsSize, string> = {
  xs: "tabs-xs",
  sm: "tabs-sm",
  md: "tabs-md",
  lg: "tabs-lg",
  xl: "tabs-xl",
};

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
        variant && variantClass[variant],
        tabsSize && sizeClass[tabsSize],
        className,
      )}
      {...props}
    />
  );
}

export function Tab({ active, className, ...props }: TabProps) {
  return <button role="tab" className={cn("tab", active && "tab-active", className)} {...props} />;
}
