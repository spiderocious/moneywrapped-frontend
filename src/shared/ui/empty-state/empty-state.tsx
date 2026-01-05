import { ReactNode } from "react";

export interface EmptyStateProps {
  readonly icon?: ReactNode;
  readonly title: string;
  readonly description?: string;
  readonly action?: ReactNode;
  readonly className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 px-6 text-center ${className}`}
    >
      {icon && (
        <div className="mb-6 text-neutral-400">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-base text-neutral-500 max-w-md mb-6">
          {description}
        </p>
      )}

      {action && <div>{action}</div>}
    </div>
  );
}
