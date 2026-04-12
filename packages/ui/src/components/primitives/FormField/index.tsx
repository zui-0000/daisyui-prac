import { cn } from "@ui/lib/utils";
import type { ReactNode } from "react";

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  labelAlt?: string;
  className?: string;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  labelAlt,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("form-control", className)}>
      {label && (
        <label className="label" htmlFor={htmlFor}>
          <span className="label-text">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </span>
          {labelAlt && <span className="label-text-alt">{labelAlt}</span>}
        </label>
      )}
      {children}
      {(error ?? hint) && (
        <div className="label">
          {error ? (
            <span className="label-text-alt text-error">{error}</span>
          ) : (
            <span className="label-text-alt">{hint}</span>
          )}
        </div>
      )}
    </div>
  );
}
