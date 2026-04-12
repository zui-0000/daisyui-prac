import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}
interface NavbarStartProps extends HTMLAttributes<HTMLDivElement> {}
interface NavbarCenterProps extends HTMLAttributes<HTMLDivElement> {}
interface NavbarEndProps extends HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: NavbarProps) {
  return <div className={cn("navbar bg-base-100", className)} {...props} />;
}

export function NavbarStart({ className, ...props }: NavbarStartProps) {
  return <div className={cn("navbar-start", className)} {...props} />;
}

export function NavbarCenter({ className, ...props }: NavbarCenterProps) {
  return <div className={cn("navbar-center", className)} {...props} />;
}

export function NavbarEnd({ className, ...props }: NavbarEndProps) {
  return <div className={cn("navbar-end", className)} {...props} />;
}
