import { Text } from "@shared/ui";

export function AnalysisFailed() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="text-center">
        <Text variant="heading-1" weight="bold">
          Analysis Failed
        </Text>
        <Text variant="body" color="secondary" className="mt-4">
          Failed screen - To be implemented
        </Text>
      </div>
    </div>
  );
}
