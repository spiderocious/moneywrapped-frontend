import { InputHTMLAttributes, forwardRef } from "react";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  readonly label: string;
  readonly value: string;
  readonly checked?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { label, value, checked = false, disabled, className = "", ...props },
    ref,
  ) => {
    return (
      <label
        className={`inline-flex items-center gap-3 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        <div className="relative">
          <input
            ref={ref}
            type="radio"
            value={value}
            checked={checked}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={[
              "w-6 h-6 rounded-full border-2 transition-all duration-200",
              "peer-checked:border-primary peer-checked:border-[6px]",
              "border-neutral-300",
              disabled ? "cursor-not-allowed" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </div>
        <span className="text-base text-neutral-900 font-normal select-none">
          {label}
        </span>
      </label>
    );
  },
);

Radio.displayName = "Radio";

export interface RadioGroupProps {
  readonly name: string;
  readonly value?: string;
  readonly onChange?: (value: string) => void;
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function RadioGroup({ children, className = "" }: RadioGroupProps) {
  return (
    <div className={`flex gap-6 ${className}`} role="radiogroup">
      {children}
    </div>
  );
}
