import { useState } from "react";
import { Text, Tab } from "@shared/ui";
import { TypographyShowcase } from "./typography-showcase";
import { ComponentsShowcase } from "./components-showcase";

export function ShowcaseScreen() {
  const [activeTab, setActiveTab] = useState("typography");

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Text variant="heading-1" className="mb-2">
            Component Showcase
          </Text>
          <Text variant="body" color="secondary" className="mb-6">
            A comprehensive showcase of all UI components
          </Text>

          <Tab
            tabs={[
              { id: "typography", label: "Typography" },
              { id: "components", label: "All Components" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === "typography" && <TypographyShowcase />}
        {activeTab === "components" && <ComponentsShowcase />}
      </div>
    </div>
  );
}
