import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  arrow?: boolean;
  plus?: boolean;
}

interface CollapseTitleProps extends HTMLAttributes<HTMLDivElement> {}
interface CollapseContentProps extends HTMLAttributes<HTMLDivElement> {}

export function Collapse({ open, arrow, plus, className, children, ...props }: CollapseProps) {
  return (
    <div
      className={cn(
        "collapse",
        arrow && "collapse-arrow",
        plus && "collapse-plus",
        open === true && "collapse-open",
        open === false && "collapse-close",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CollapseTitle({ className, ...props }: CollapseTitleProps) {
  return <div className={cn("collapse-title font-semibold", className)} {...props} />;
}

export function CollapseContent({ className, ...props }: CollapseContentProps) {
  return <div className={cn("collapse-content text-sm", className)} {...props} />;
}
