import { ReactNode } from "react";

export type BadgeVariant = "success" | "pending" | "failed" | "info";

export interface BadgeProps {
  readonly variant: BadgeVariant;
  readonly children: ReactNode;
  readonly className?: string;
  readonly showDot?: boolean;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; dot: string }> = {
  success: {
    bg: "bg-success-50",
    text: "text-success-700",
    dot: "bg-success-500",
  },
  pending: {
    bg: "bg-warning-50",
    text: "text-warning-700",
    dot: "bg-warning-500",
  },
  failed: {
    bg: "bg-error-50",
    text: "text-error-700",
    dot: "bg-error-500",
  },
  info: {
    bg: "bg-primary-50",
    text: "text-primary-700",
    dot: "bg-primary-500",
  },
};

export function Badge({
  variant,
  children,
  className = "",
  showDot = true,
}: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={[
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
        styles.bg,
        styles.text,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showDot && (
        <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
      )}
      {children}
    </span>
  );
}
