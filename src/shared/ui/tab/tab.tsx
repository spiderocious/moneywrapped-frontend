import { ReactNode } from "react";

export interface TabItem {
  readonly id: string;
  readonly label: string;
  readonly icon?: ReactNode;
}

export interface TabProps {
  readonly tabs: readonly TabItem[];
  readonly activeTab: string;
  readonly onChange: (tabId: string) => void;
  readonly className?: string;
  readonly variant?: "default" | "pills";
}

export function Tab({
  tabs,
  activeTab,
  onChange,
  className = "",
  variant = "default",
}: TabProps) {
  return (
    <div
      className={`flex gap-2 ${variant === "default" ? "border-b border-neutral-200" : ""} ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={[
              "flex items-center gap-2 px-6 py-3 font-medium text-base transition-all duration-200",
              variant === "default"
                ? [
                    isActive
                      ? "text-primary border-b-2 border-primary -mb-px"
                      : "text-neutral-500 hover:text-neutral-700",
                  ].join(" ")
                : [
                    "rounded-xl",
                    isActive
                      ? "bg-white text-neutral-900 shadow-md"
                      : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50",
                  ].join(" "),
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
