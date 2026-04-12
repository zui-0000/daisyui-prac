import { cn } from "@ui/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarShape = "circle" | "square";

const sizeClass: Record<AvatarSize, string> = {
  xs: "w-8",
  sm: "w-12",
  md: "w-16",
  lg: "w-20",
  xl: "w-24",
};

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  placeholder?: boolean;
  online?: boolean;
  offline?: boolean;
  children?: ReactNode;
}

export function Avatar({
  src,
  alt = "",
  size = "md",
  shape = "circle",
  placeholder,
  online,
  offline,
  className,
  children,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        "avatar",
        placeholder && "avatar-placeholder",
        online && "online",
        offline && "offline",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          sizeClass[size],
          shape === "circle" ? "rounded-full" : "rounded-lg",
          placeholder && "bg-neutral text-neutral-content",
        )}
      >
        {src ? <img src={src} alt={alt} /> : children}
      </div>
    </div>
  );
}
