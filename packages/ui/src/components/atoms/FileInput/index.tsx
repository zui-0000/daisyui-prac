import { cn } from "@ui/lib/utils";
import type { InputHTMLAttributes } from "react";

type FileInputColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type FileInputSize = "xs" | "sm" | "md" | "lg" | "xl";

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
        color && `file-input-${color}`,
        fileInputSize && `file-input-${fileInputSize}`,
        ghost && "file-input-ghost",
        bordered && "file-input-bordered",
        className,
      )}
      {...props}
    />
  );
}
