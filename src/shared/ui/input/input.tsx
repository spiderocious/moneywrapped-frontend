import { InputHTMLAttributes, ReactNode, forwardRef, useState } from "react";
import { FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";

export type InputType = "text" | "email" | "password" | "number" | "tel";
export type InputState = "default" | "active" | "error" | "disabled";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  readonly type?: InputType;
  readonly label?: string;
  readonly error?: string;
  readonly hint?: string;
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
  readonly state?: InputState;
  readonly fullWidth?: boolean;
}

const stateStyles: Record<InputState, string> = {
  default: "border-neutral-200 focus:border-primary focus:ring-primary",
  active: "border-primary ring-2 ring-primary ring-opacity-20",
  error: "border-error focus:border-error focus:ring-error",
  disabled: "border-neutral-200 bg-neutral-50 cursor-not-allowed",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      state = "default",
      fullWidth = true,
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const finalState = disabled ? "disabled" : error ? "error" : state;
    const inputType =
      type === "password" && showPassword ? "text" : type;

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label className="block mb-2">
            <span
              className={`text-base font-medium ${
                finalState === "error"
                  ? "text-error"
                  : "text-neutral-900"
              }`}
            >
              {label}
            </span>
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={[
              "w-full px-4 py-3 rounded-xl border-2 transition-all duration-200",
              "text-base text-neutral-900 placeholder:text-neutral-400",
              "focus:outline-none focus:ring-2 focus:ring-opacity-20",
              stateStyles[finalState],
              leftIcon ? "pl-12" : "",
              rightIcon || type === "password" || error ? "pr-12" : "",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          )}

          {error && type !== "password" && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-error">
                <FiAlertCircle size={16} className="text-white" />
              </div>
            </div>
          )}

          {rightIcon && !error && type !== "password" && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-2 text-sm text-error font-medium">{error}</p>
        )}

        {hint && !error && (
          <p className="mt-2 text-sm text-neutral-500">{hint}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
