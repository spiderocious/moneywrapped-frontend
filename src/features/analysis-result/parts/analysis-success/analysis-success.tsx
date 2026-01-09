import { Text } from "@shared/ui";

export function AnalysisSuccess() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="text-center">
        <Text variant="heading-1" weight="bold">
          Analysis Complete!
        </Text>
        <Text variant="body" color="secondary" className="mt-4">
          Success screen - To be implemented
        </Text>
      </div>
    </div>
  );
}
