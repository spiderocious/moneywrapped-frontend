import { ReactNode } from "react";

export type BadgeVariant =
  | "success"
  | "pending"
  | "failed"
  | "info"
  | "warning"
  | "error";
export type BadgeSize = "small" | "medium";

export interface BadgeProps {
  readonly variant: BadgeVariant;
  readonly children: ReactNode;
  readonly className?: string;
  readonly showDot?: boolean;
  readonly size?: BadgeSize;
}

const variantStyles: Record<
  BadgeVariant,
  { bg: string; text: string; dot: string }
> = {
  success: {
    bg: "bg-success-50",
    text: "text-success-700",
    dot: "bg-success-500",
  },
  warning: {
    bg: "bg-warning-50",
    text: "text-warning-700",
    dot: "bg-warning-500",
  },
  pending: {
    bg: "bg-warning-50",
    text: "text-warning-700",
    dot: "bg-warning-500",
  },
  error: {
    bg: "bg-error-50",
    text: "text-error-700",
    dot: "bg-error-500",
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

const sizeStyles: Record<BadgeSize, string> = {
  small: "px-2 py-0.5 text-xs",
  medium: "px-3 py-1.5 text-sm",
};

export function Badge({
  variant,
  children,
  className = "",
  showDot = true,
  size = "medium",
}: BadgeProps) {
  const styles = variantStyles[variant];
  const sizing = sizeStyles[size];

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full font-medium",
        sizing,
        styles.bg,
        styles.text,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showDot && <span className={`w-2 h-2 rounded-full ${styles.dot}`} />}
      {children}
    </span>
  );
}
