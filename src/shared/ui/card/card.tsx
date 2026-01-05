import { ReactNode, CSSProperties } from "react";

export type CardVariant = "default" | "elevated" | "outlined";

export interface CardProps {
  readonly variant?: CardVariant;
  readonly padding?: "none" | "small" | "medium" | "large";
  readonly className?: string;
  readonly children: ReactNode;
  readonly onClick?: () => void;
  readonly style?: CSSProperties;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white",
  elevated: "bg-white shadow-lg",
  outlined: "bg-white border-2 border-neutral-200",
};

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  small: "p-4",
  medium: "p-6",
  large: "p-8",
};

export function Card({
  variant = "default",
  padding = "medium",
  className = "",
  children,
  onClick,
  style,
}: CardProps) {
  const isClickable = !!onClick;

  const classes = [
    "rounded-xl transition-all duration-200",
    variantStyles[variant],
    paddingStyles[padding],
    isClickable ? "cursor-pointer hover:shadow-xl" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick} style={style}>
      {children}
    </div>
  );
}
