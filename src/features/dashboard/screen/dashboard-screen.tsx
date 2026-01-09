import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button, StatCard, AnalysisCard, EmptyState } from "@shared/ui";
import {
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiFilter,
  FiPlus,
  FiUpload,
} from "react-icons/fi";
import { Hidden } from "meemaw";
import { routeNames } from "@shared/constants/routes/routes";

// Mock data - in real app this would come from API
const mockAnalyses = [
  {
    code: "FW-2938",
    fileName: "GTBank_Statement_Jan.pdf",
    fileSize: 2457600,
    fileType: "application/pdf",
    uploadedAt: "2023-10-24T14:30:00Z",
    completedAt: "2023-10-24T14:35:00Z",
    status: "success" as const,
    period_start: "2023-01-01",
    period_end: "2023-01-31",
    statement_bank: "GTBank",
    account_type: "savings",
  },
  {
    code: "FW-2941",
    fileName: "Access_Bank_Q3.pdf",
    fileSize: 3145728,
    fileType: "application/pdf",
    uploadedAt: new Date().toISOString(),
    status: "pending" as const,
  },
  {
    code: "FW-2910",
    fileName: "FirstBank_Statement_v2.pdf",
    fileSize: 1048576,
    fileType: "application/pdf",
    uploadedAt: "2023-10-22T09:15:00Z",
    completedAt: "2023-10-22T09:16:00Z",
    status: "failed" as const,
    errorMessage: "Error: Unreadable format. Please re-upload.",
  },
  {
    code: "FW-2899",
    fileName: "UBA_Savings_Report.pdf",
    fileSize: 1572864,
    fileType: "application/pdf",
    uploadedAt: "2023-10-15T11:20:00Z",
    completedAt: "2023-10-15T11:25:00Z",
    status: "success" as const,
    metadata: {
      statement_bank: "UBA",
      period_start: "2022-01-01",
      period_end: "2022-12-31",
      account_type: "savings",
    },
  },
];

export function DashboardScreen() {
  const navigate = useNavigate();
  const [analyses] = useState(mockAnalyses);
  const hasAnalyses = analyses.length > 0;

  // Calculate stats
  const totalAnalyses = analyses.length;
  const successfulAnalyses = analyses.filter(
    (a) => a.status === "success",
  ).length;
  const pendingAnalyses = analyses.filter((a) => a.status === "pending").length;
  const failedAnalyses = analyses.filter((a) => a.status === "failed").length;

  const handleNewAnalysis = () => {
    navigate(routeNames.newAnalysis);
  };

  const handleFilter = () => {
    console.log("Open filter");
  };

  const handleViewResults = (id: string) => {
    console.log("View results for:", id);
  };

  const handleRetry = (id: string) => {
    console.log("Retry analysis:", id);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              FW
            </div>
            <Text variant="heading-3" weight="bold">
              FinanceWrapped
            </Text>
          </div>

          <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Section */}
        <Hidden on={"mobile"}>
          <section className="mb-12">
            <div className="mb-6">
              <Text variant="heading-2" weight="bold" className="mb-2">
                Overview
              </Text>
              <Text variant="body" color="secondary">
                Here's what's happening with your financial data today.
              </Text>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<FiBarChart2 className="w-5 h-5 text-primary" />}
                label="Total Analyses"
                value={totalAnalyses}
                iconBgColor="bg-primary-100"
              />
              <StatCard
                icon={<FiCheckCircle className="w-5 h-5 text-green-600" />}
                label="Successful"
                value={successfulAnalyses}
                iconBgColor="bg-green-100"
              />
              <StatCard
                icon={<FiClock className="w-5 h-5 text-yellow-600" />}
                label="Pending"
                value={pendingAnalyses}
                iconBgColor="bg-yellow-100"
              />
              <StatCard
                icon={<FiXCircle className="w-5 h-5 text-error-600" />}
                label="Failed"
                value={failedAnalyses}
                iconBgColor="bg-error-100"
              />
            </div>
          </section>
        </Hidden>

        {/* Recent Analyses Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <Hidden on={"mobile"}>
              <Text variant="heading-2" weight="bold">
                Recent Analysis
              </Text>
            </Hidden>
            <Hidden on={"desktop"}>
              <Text variant="heading-3" color="secondary">
                Recent Analysis
              </Text>
            </Hidden>

            {hasAnalyses && (
              <div className="flex items-center gap-3">
                <Hidden on={"mobile"}>
                  <Button
                    variant="text"
                    size="medium"
                    leftIcon={<FiFilter className="w-5 h-5" />}
                    onClick={handleFilter}
                  >
                    Filter
                  </Button>
                </Hidden>
                <Hidden on={"mobile"}>
                  <Button
                    variant="primary"
                    size="medium"
                    leftIcon={<FiPlus className="w-5 h-5" />}
                    onClick={handleNewAnalysis}
                  >
                    New Analysis
                  </Button>
                </Hidden>
                <Hidden on={"desktop"}>
                  <Button
                    variant="primary"
                    size="small"
                    leftIcon={<FiPlus className="w-5 h-5" />}
                    onClick={handleNewAnalysis}
                  >
                    New Analysis
                  </Button>
                </Hidden>
              </div>
            )}
          </div>

          {/* Analyses List or Empty State */}
          {hasAnalyses ? (
            <div className="space-y-4">
              {analyses.map((analysis) => (
                <AnalysisCard
                  key={analysis.code}
                  analysis={analysis}
                  onViewResults={handleViewResults}
                  onRetry={handleRetry}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-neutral-200">
              <EmptyState
                icon={
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <FiUpload className="w-8 h-8 text-primary" />
                  </div>
                }
                title="No analyses yet"
                description="Upload your first bank statement to unlock powerful financial insights and tracking."
                action={
                  <Button
                    variant="primary"
                    size="large"
                    onClick={handleNewAnalysis}
                  >
                    Create First Analysis
                  </Button>
                }
              />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
