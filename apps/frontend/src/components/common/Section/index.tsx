import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  row?: boolean;
  children: ReactNode;
}

export function Section({ title, description, row = true, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-1 border-b border-base-300 pb-2 text-lg font-bold">{title}</h2>
      {description && <p className="mb-4 text-sm text-base-content/60">{description}</p>}
      <div className={row ? "flex flex-wrap items-center gap-3" : "space-y-3"}>{children}</div>
    </section>
  );
}
