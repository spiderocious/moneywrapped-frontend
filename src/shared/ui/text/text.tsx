import { ReactNode } from "react";

export type TextVariant =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "body"
  | "caption";

export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export type TextColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "neutral";

export interface TextProps {
  readonly variant?: TextVariant;
  readonly weight?: TextWeight;
  readonly color?: TextColor;
  readonly className?: string;
  readonly children: ReactNode;
  readonly as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const variantStyles: Record<TextVariant, string> = {
  "heading-1": "text-4xl leading-tight", // 36px
  "heading-2": "text-2xl leading-tight", // 24px
  "heading-3": "text-xl leading-snug", // 20px
  body: "text-base leading-normal", // 16px
  caption: "text-sm leading-normal", // 14px
};

const weightStyles: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorStyles: Record<TextColor, string> = {
  primary: "text-primary",
  secondary: "text-neutral-600",
  success: "text-success",
  error: "text-error",
  warning: "text-warning",
  neutral: "text-neutral-900",
};

const defaultElements: Record<TextVariant, TextProps["as"]> = {
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  body: "p",
  caption: "span",
};

const defaultWeights: Record<TextVariant, TextWeight> = {
  "heading-1": "bold",
  "heading-2": "bold",
  "heading-3": "semibold",
  body: "regular",
  caption: "medium",
};

export function Text({
  variant = "body",
  weight,
  color = "neutral",
  className = "",
  children,
  as,
}: TextProps) {
  const Component = (as || defaultElements[variant]) as React.ElementType;
  const finalWeight = weight || defaultWeights[variant];

  const classes = [
    variantStyles[variant],
    weightStyles[finalWeight],
    colorStyles[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
