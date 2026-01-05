export type LogoMode = "light" | "dark";
export type LogoSize = "small" | "medium" | "large" | "xlarge";

export interface LogoProps {
  readonly mode?: LogoMode;
  readonly size?: LogoSize;
  readonly className?: string;
}

const sizeConfig = {
  small: { width: 32, height: 32, rounded: "rounded-lg" },
  medium: { width: 48, height: 48, rounded: "rounded-xl" },
  large: { width: 64, height: 64, rounded: "rounded-2xl" },
  xlarge: { width: 96, height: 96, rounded: "rounded-3xl" },
};

export function Logo({
  mode = "light",
  size = "medium",
  className = "",
}: LogoProps) {
  const { width, height, rounded } = sizeConfig[size];

  const bgColor = mode === "light" ? "#FFFFFF" : "#1F2937";
  const iconColor = mode === "light" ? "#3C83F6" : "#FFFFFF";
  const borderColor = mode === "dark" ? "#374151" : "transparent";

  return (
    <div className={`inline-flex ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={rounded}
      >
        {/* Background */}
        <rect width="120" height="120" rx="24" fill={bgColor} />

        {/* Border for dark mode */}
        {mode === "dark" && (
          <rect
            width="120"
            height="120"
            rx="24"
            stroke={borderColor}
            strokeWidth="2"
            fill="none"
          />
        )}

        {/* Icon - Bar Chart with Trend Arrow */}
        <g transform="translate(30, 30)">
          {/* Bar 1 (shortest) */}
          <rect
            x="0"
            y="30"
            width="12"
            height="30"
            rx="2"
            fill={iconColor}
            opacity="0.8"
          />

          {/* Bar 2 (medium) */}
          <rect
            x="16"
            y="20"
            width="12"
            height="40"
            rx="2"
            fill={iconColor}
            opacity="0.9"
          />

          {/* Bar 3 (tallest) */}
          <rect x="32" y="5" width="12" height="55" rx="2" fill={iconColor} />

          {/* Bar 4 (medium-short) */}
          <rect
            x="48"
            y="25"
            width="12"
            height="35"
            rx="2"
            fill={iconColor}
            opacity="0.85"
          />

          {/* Trend Line */}
          <path
            d="M 6 42 L 22 32 L 38 12 L 54 30"
            stroke={iconColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.9"
          />

          {/* Arrow */}
          <g transform="translate(42, 18)">
            {/* Arrow line */}
            <line
              x1="0"
              y1="12"
              x2="18"
              y2="0"
              stroke={iconColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Arrow head */}
            <path d="M 18 0 L 12 2 L 16 8 Z" fill={iconColor} />
          </g>
        </g>
      </svg>
    </div>
  );
}
