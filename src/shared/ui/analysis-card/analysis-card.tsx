import { Text, Badge } from "@shared/ui";
import {
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

export type AnalysisStatus = "success" | "pending" | "failed";

export interface Analysis {
  readonly code: string;
  readonly status: AnalysisStatus;
  readonly fileName: string;
  readonly fileSize: number;
  readonly fileType: string;
  readonly uploadedAt: string;
  readonly completedAt?: string;
  readonly errorMessage?: string;
  readonly statement_bank?: string;
  readonly period_start?: string;
  readonly period_end?: string;
  readonly account_type?: string;
  readonly metadata?: {
    readonly statement_bank?: string;
    readonly period_start?: string;
    readonly period_end?: string;
    readonly account_type?: string;
  };
}

export interface AnalysisCardProps {
  readonly analysis: Analysis;
  readonly onViewResults?: (code: string) => void;
  readonly onRetry?: (code: string) => void;
}

const statusConfig = {
  success: {
    badge: { variant: "success" as const, text: "Complete" },
    action: "View Results",
    iconBgColor: "bg-green-100",
    icon: <FiCheckCircle className="w-6 h-6 text-green-600" />,
  },
  pending: {
    badge: { variant: "warning" as const, text: "Processing" },
    action: "Processing...",
    iconBgColor: "bg-blue-100",
    icon: <FiClock className="w-6 h-6 text-blue-600" />,
  },
  failed: {
    badge: { variant: "error" as const, text: "Failed" },
    action: "Retry",
    iconBgColor: "bg-red-100",
    icon: <FiAlertCircle className="w-6 h-6 text-red-600" />,
  },
};

export function AnalysisCard({
  analysis,
  onViewResults,
  onRetry,
}: AnalysisCardProps) {
  const config = statusConfig[analysis.status];
  const handleAction = () => {
    if (analysis.status === "failed" && onRetry) {
      onRetry(analysis.code);
    } else if (analysis.status === "success" && onViewResults) {
      onViewResults(analysis.code);
    }
  };
  const showAction = analysis.status === "success" || analysis.status === "failed";

  // Format date range from period_start and period_end
  const dateRange =
    analysis.period_start && analysis.period_end
      ? `${new Date(analysis.period_start).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} - ${new Date(analysis.period_end).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
      : analysis.metadata?.period_start && analysis.metadata?.period_end
        ? `${new Date(analysis.metadata.period_start).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} - ${new Date(analysis.metadata.period_end).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
        : "";

  // Format uploaded date
  const uploadedDate = new Date(analysis.uploadedAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-4">
        {/* Icon */}
        <div
          className={`w-16 h-16 ${config.iconBgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
        >
          {config.icon}
        </div>

        {/* Content - File Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <Text variant="body" weight="semibold" className="truncate">
              {analysis.fileName}
            </Text>
            <Badge variant={config.badge.variant} size="small" showDot={false}>
              {config.badge.text}
            </Badge>
          </div>
          <Text variant="caption" color="secondary" className="mb-1">
            #{analysis.code} • {uploadedDate}
          </Text>
          {/* Date range or error */}
          {analysis.errorMessage ? (
            <Text variant="caption" className="text-error-600">
              {analysis.errorMessage}
            </Text>
          ) : (
            dateRange && (
              <Text variant="caption" color="secondary">
                {dateRange}
              </Text>
            )
          )}
        </div>

        {/* Action Button */}
        {showAction && (
          <button
            onClick={handleAction}
            className={`px-6 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
              analysis.status === "failed"
                ? "bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50"
                : "bg-primary-50 text-primary hover:bg-primary-100"
            }`}
          >
            {config.action}
          </button>
        )}
        {analysis.status === "pending" && (
          <Text variant="body" color="secondary" className="px-6">
            {config.action}
          </Text>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex gap-3 mb-4">
          {/* Icon */}
          <div
            className={`w-14 h-14 ${config.iconBgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
          >
            {config.icon}
          </div>

          {/* Content - File Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Text variant="body" weight="semibold" className="truncate">
                {analysis.fileName}
              </Text>
              <Badge variant={config.badge.variant} size="small" showDot={false}>
                {config.badge.text}
              </Badge>
            </div>
            <Text variant="caption" color="secondary" className="mb-1">
              #{analysis.code} • {uploadedDate}
            </Text>
            {/* Date range or error */}
            {analysis.errorMessage ? (
              <Text variant="caption" className="text-error-600">
                {analysis.errorMessage}
              </Text>
            ) : (
              dateRange && (
                <Text variant="caption" color="secondary">
                  {dateRange}
                </Text>
              )
            )}
          </div>
        </div>

        {/* Action Button - Full Width on Mobile */}
        {showAction && (
          <button
            onClick={handleAction}
            className={`w-full py-3 rounded-xl font-medium transition-colors ${
              analysis.status === "failed"
                ? "bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50"
                : "bg-primary-50 text-primary hover:bg-primary-100"
            }`}
          >
            {config.action}
          </button>
        )}
        {analysis.status === "pending" && (
          <div className="w-full py-3 text-center">
            <Text variant="body" color="secondary">
              {config.action}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
