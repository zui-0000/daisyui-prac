import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type DropdownPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-end"
  | "bottom-end"
  | "left-end"
  | "right-end";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  position?: DropdownPosition;
  hover?: boolean;
  open?: boolean;
}

interface DropdownMenuProps extends HTMLAttributes<HTMLUListElement> {}
interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
  disabled?: boolean;
}

export function Dropdown({ position, hover, open, className, children, ...props }: DropdownProps) {
  return (
    <div
      className={cn(
        "dropdown",
        position && `dropdown-${position}`,
        hover && "dropdown-hover",
        open && "dropdown-open",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenu({ className, ...props }: DropdownMenuProps) {
  return (
    <ul
      className={cn("dropdown-content menu bg-base-100 rounded-box z-10 shadow", className)}
      {...props}
    />
  );
}

export function DropdownItem({ disabled, className, ...props }: DropdownItemProps) {
  return <li className={cn(disabled && "disabled", className)} {...props} />;
}
