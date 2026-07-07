interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-text sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-text-muted">{subtitle}</p>}
    </div>
  );
}
