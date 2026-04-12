import { cn } from "@ui/lib/utils";
import type { HTMLAttributes, LiHTMLAttributes } from "react";

type MenuSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClass: Record<MenuSize, string> = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg",
  xl: "menu-xl",
};

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  menuSize?: MenuSize;
  horizontal?: boolean;
  compact?: boolean;
}

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  disabled?: boolean;
}

interface MenuTitleProps extends LiHTMLAttributes<HTMLLIElement> {}

export function Menu({ menuSize, horizontal, compact, className, ...props }: MenuProps) {
  return (
    <ul
      className={cn(
        "menu",
        menuSize && sizeClass[menuSize],
        horizontal && "menu-horizontal",
        compact && "menu-compact",
        className,
      )}
      {...props}
    />
  );
}

export function MenuItem({ disabled, className, ...props }: MenuItemProps) {
  return <li className={cn(disabled && "disabled", className)} {...props} />;
}

export function MenuTitle({ className, ...props }: MenuTitleProps) {
  return <li className={cn("menu-title", className)} {...props} />;
}
