import { ButtonHTMLAttributes, ReactNode, ElementType } from "react";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonState = "default" | "disabled" | "loading";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly state?: ButtonState;
  readonly fullWidth?: boolean;
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: ElementType;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:cursor-not-allowed",
  secondary:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary-50 active:bg-primary-100 disabled:border-primary-200 disabled:text-primary-200 disabled:cursor-not-allowed",
  text: "bg-transparent text-primary hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-200 disabled:cursor-not-allowed",
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm rounded-lg",
  medium: "px-6 py-3 text-base rounded-xl",
  large: "px-8 py-4 text-lg rounded-2xl",
};

export function Button({
  variant = "primary",
  size = "medium",
  state = "default",
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  as,
  ...props
}: ButtonProps) {
  const Component = as || "button";
  const isDisabled = state === "disabled";
  const isLoading = state === "loading";

  const classes = [
    "font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span>{rightIcon}</span>}
    </Component>
  );
}
