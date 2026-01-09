import { ReactNode } from "react";
import { Text } from "../text/text";

export interface StatCardProps {
  readonly icon: ReactNode;
  readonly label: string;
  readonly value: string | number;
  readonly iconBgColor?: string;
  readonly className?: string;
}

export function StatCard({
  icon,
  label,
  value,
  iconBgColor = "bg-primary-100",
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-8 h-8 ${iconBgColor} rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
        <Text variant="body" color="secondary">
          {label}
        </Text>
      </div>
      <Text variant="heading-1" weight="bold">
        {value}
      </Text>
    </div>
  );
}
