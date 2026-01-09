import { InputHTMLAttributes, forwardRef } from "react";

export interface ToggleProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  readonly label?: string;
  readonly checked?: boolean;
  readonly onToggle?: (checked: boolean) => void;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    { label, checked = false, onToggle, disabled, className = "", ...props },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onToggle?.(e.target.checked);
    };

    return (
      <label
        className={`inline-flex items-center gap-3 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={[
              "w-14 h-8 rounded-full transition-colors duration-200",
              "peer-checked:bg-primary peer-checked:after:translate-x-6",
              "bg-neutral-300",
              "after:content-[''] after:absolute after:top-1 after:left-1",
              "after:bg-white after:rounded-full after:h-6 after:w-6",
              "after:transition-transform after:duration-200",
              disabled ? "cursor-not-allowed" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </div>
        {label && (
          <span className="text-base text-neutral-900 font-medium select-none">
            {label}
          </span>
        )}
      </label>
    );
  },
);

Toggle.displayName = "Toggle";
