import { Badge } from "@packages/ui";

interface PageHeaderProps {
  title: string;
  description: string;
  category?: string;
}

export function PageHeader({ title, description, category }: PageHeaderProps) {
  return (
    <div className="mb-10">
      {category && (
        <Badge color="primary" className="mb-3">
          {category}
        </Badge>
      )}
      <h1 className="mb-3 text-4xl font-bold">{title}</h1>
      <p className="text-lg text-base-content/70">{description}</p>
    </div>
  );
}
