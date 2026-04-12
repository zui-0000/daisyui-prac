import { cn } from "@ui/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  compact?: boolean;
  bordered?: boolean;
  imageFull?: boolean;
  side?: boolean;
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

type CardActionsJustify = "start" | "center" | "end";
interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  justify?: CardActionsJustify;
}

export function Card({ compact, bordered, imageFull, side, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card",
        compact && "card-compact",
        bordered && "card-bordered",
        imageFull && "image-full",
        side && "card-side",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={cn("card-body", className)} {...props} />;
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h2 className={cn("card-title", className)} {...props} />;
}

export function CardActions({ justify = "end", className, ...props }: CardActionsProps) {
  const justifyClass =
    justify === "start" ? "justify-start" : justify === "center" ? "justify-center" : "justify-end";
  return <div className={cn("card-actions", justifyClass, className)} {...props} />;
}
