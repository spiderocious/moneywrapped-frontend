import { useState } from "react";
import { useParams } from "react-router-dom";
import { AnalysisPending } from "../parts/analysis-pending";
import { AnalysisSuccess } from "../parts/analysis-success";
import { AnalysisFailed } from "../parts/analysis-failed";
import { analysisSuccessMock } from "../../../shared/mocks";

type AnalysisStatus = "pending" | "success" | "failed";

export function AnalysisResultScreen() {
  const { analysiscode } = useParams<{ analysiscode: string }>();
  const [status] = useState<AnalysisStatus>(
    analysisSuccessMock.status as AnalysisStatus,
  );
  const mockAnalysis = analysisSuccessMock;

  // This will be replaced with actual API call to fetch analysis status
  // For now, we default to pending
  // Later: use analysiscode to fetch status from API and setStatus accordingly
  console.log("Analysis code:", analysiscode);

  const renderAnalysisView = () => {
    switch (status) {
      case "pending":
        return <AnalysisPending />;
      case "success":
        return <AnalysisSuccess analysis={mockAnalysis} />;
      case "failed":
        return <AnalysisFailed />;
      default:
        return <AnalysisPending />;
    }
  };

  return <>{renderAnalysisView()}</>;
}
