import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type FileInputColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type FileInputSize = "xs" | "sm" | "md" | "lg" | "xl";

const colorClass: Record<FileInputColor, string> = {
  primary: "file-input-primary",
  secondary: "file-input-secondary",
  accent: "file-input-accent",
  info: "file-input-info",
  success: "file-input-success",
  warning: "file-input-warning",
  error: "file-input-error",
};
const sizeClass: Record<FileInputSize, string> = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: "file-input-md",
  lg: "file-input-lg",
  xl: "file-input-xl",
};

interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  color?: FileInputColor;
  fileInputSize?: FileInputSize;
  ghost?: boolean;
  bordered?: boolean;
}

export function FileInput({
  color,
  fileInputSize,
  ghost,
  bordered,
  className,
  ...props
}: FileInputProps) {
  return (
    <input
      type="file"
      className={cn(
        "file-input",
        color && colorClass[color],
        fileInputSize && sizeClass[fileInputSize],
        ghost && "file-input-ghost",
        bordered && "file-input-bordered",
        className,
      )}
      {...props}
    />
  );
}
