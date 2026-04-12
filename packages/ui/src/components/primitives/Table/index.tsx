import { cn } from "@ui/lib/utils";
import type { TableHTMLAttributes } from "react";

type TableSize = "xs" | "sm" | "md" | "lg";

const sizeClass: Record<TableSize, string> = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg",
};

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  zebra?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
  tableSize?: TableSize;
}

export function Table({ zebra, pinRows, pinCols, tableSize, className, ...props }: TableProps) {
  return (
    <table
      className={cn(
        "table",
        zebra && "table-zebra",
        pinRows && "table-pin-rows",
        pinCols && "table-pin-cols",
        tableSize && sizeClass[tableSize],
        className,
      )}
      {...props}
    />
  );
}
