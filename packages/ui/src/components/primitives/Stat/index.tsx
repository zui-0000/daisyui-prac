import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

type StatValueColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

const colorClass: Record<StatValueColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

interface StatsProps extends HTMLAttributes<HTMLDivElement> {
  horizontal?: boolean;
  shadow?: boolean;
}

interface StatProps extends HTMLAttributes<HTMLDivElement> {}
interface StatTitleProps extends HTMLAttributes<HTMLDivElement> {}
interface StatValueProps extends HTMLAttributes<HTMLDivElement> {
  color?: StatValueColor;
}
interface StatDescProps extends HTMLAttributes<HTMLDivElement> {}
interface StatFigureProps extends HTMLAttributes<HTMLDivElement> {}
interface StatActionsProps extends HTMLAttributes<HTMLDivElement> {}

export function Stats({ horizontal, shadow, className, ...props }: StatsProps) {
  return (
    <div
      className={cn("stats", horizontal && "stats-horizontal", shadow && "shadow", className)}
      {...props}
    />
  );
}

export function Stat({ className, ...props }: StatProps) {
  return <div className={cn("stat", className)} {...props} />;
}

export function StatTitle({ className, ...props }: StatTitleProps) {
  return <div className={cn("stat-title", className)} {...props} />;
}

export function StatValue({ color, className, ...props }: StatValueProps) {
  return <div className={cn("stat-value", color && colorClass[color], className)} {...props} />;
}

export function StatDesc({ className, ...props }: StatDescProps) {
  return <div className={cn("stat-desc", className)} {...props} />;
}

export function StatFigure({ className, ...props }: StatFigureProps) {
  return <div className={cn("stat-figure", className)} {...props} />;
}

export function StatActions({ className, ...props }: StatActionsProps) {
  return <div className={cn("stat-actions", className)} {...props} />;
}
