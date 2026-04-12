import { cn } from "@ui/lib/utils";
import type { HTMLAttributes, LiHTMLAttributes } from "react";

interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {}

interface BreadcrumbItemProps extends LiHTMLAttributes<HTMLLIElement> {
  href?: string;
}

export function Breadcrumbs({ className, children, ...props }: BreadcrumbsProps) {
  return (
    <div className={cn("breadcrumbs text-sm", className)} {...props}>
      <ul>{children}</ul>
    </div>
  );
}

export function BreadcrumbItem({ href, className, children, ...props }: BreadcrumbItemProps) {
  return (
    <li className={className} {...props}>
      {href ? <a href={href}>{children}</a> : children}
    </li>
  );
}
