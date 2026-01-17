import { Text, Badge } from "@shared/ui";
import {
  FiArrowLeft,
  FiMoreVertical,
  FiXCircle,
  FiClock,
  FiFile,
  FiCopy,
  FiHelpCircle,
  FiUpload,
  FiHeadphones,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function AnalysisFailed() {
  const navigate = useNavigate();

  const fileInfo = {
    fileName: "GTBank_Statement_Oct.pdf",
    fileType: "PDF",
    size: "2.4 MB",
    referenceCode: "#FW-88291",
    attemptedAt: "Today, 10:42 AM",
    errorMessage:
      "The file you uploaded seems to be password protected, which prevents our system from reading the transaction data.",
  };

  const failureReasons = [
    {
      text: "The PDF file is",
      highlight: "password protected",
      subtext: ". Please remove the password and try again.",
    },
    {
      text: "The statement is a",
      highlight: "scanned image",
      subtext: " that is blurry or low resolution.",
    },
    {
      text: "The bank format is currently",
      highlight: "unsupported",
      subtext: " or heavily modified.",
    },
  ];

  const handleCopyReference = () => {
    navigator.clipboard.writeText(fileInfo.referenceCode);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-4 md:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-900 hover:text-neutral-700 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <Text variant="heading-3" weight="bold">
            Analysis Details
          </Text>
          <button className="text-neutral-900 hover:text-neutral-700 transition-colors">
            <FiMoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Error Status Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-neutral-200 mb-6">
          <div className="flex flex-col items-center text-center">
            {/* Error Icon with background circle */}
            <div className="relative mb-5">
              <div className="w-24 h-24 bg-red-50/50 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                  <FiXCircle className="w-9 h-9 text-red-600" />
                </div>
              </div>
            </div>

            {/* Badge */}
            <Badge variant="error" className="mb-4">
              ANALYSIS FAILED
            </Badge>

            {/* Error Title */}
            <Text
              variant="heading-2"
              weight="bold"
              className="mb-3 text-xl md:text-2xl"
            >
              We couldn't analyze your statement
            </Text>

            {/* Error Description */}
            <Text
              variant="body"
              color="secondary"
              className="mb-5 max-w-xl leading-relaxed"
            >
              {fileInfo.errorMessage}
            </Text>

            {/* Attempted Time */}
            <div className="flex items-center gap-2 text-neutral-500">
              <FiClock className="w-4 h-4" />
              <Text variant="caption" color="secondary" className="text-sm">
                Attempted {fileInfo.attemptedAt}
              </Text>
            </div>
          </div>
        </div>

        {/* Desktop: Two Column Layout, Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* File Information Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <Text variant="heading-3" weight="bold">
                File Information
              </Text>
              <FiFile className="w-5 h-5 text-neutral-400" />
            </div>

            <div className="space-y-4">
              {/* File Name */}
              <div className="flex justify-between items-start gap-4">
                <Text variant="caption" color="secondary" className="text-sm">
                  File Name
                </Text>
                <Text
                  variant="body"
                  weight="medium"
                  className="text-right text-sm break-all"
                >
                  {fileInfo.fileName}
                </Text>
              </div>

              {/* File Type */}
              <div className="flex justify-between items-center gap-4">
                <Text variant="caption" color="secondary" className="text-sm">
                  File Type
                </Text>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700">
                    {fileInfo.fileType}
                  </span>
                  <Text variant="body" weight="medium" className="text-sm">
                    Document
                  </Text>
                </div>
              </div>

              {/* Size */}
              <div className="flex justify-between items-center gap-4">
                <Text variant="caption" color="secondary" className="text-sm">
                  Size
                </Text>
                <Text variant="body" weight="medium" className="text-sm">
                  {fileInfo.size}
                </Text>
              </div>

              {/* Reference Code */}
              <div className="flex justify-between items-center gap-4">
                <Text variant="caption" color="secondary" className="text-sm">
                  Reference Code
                </Text>
                <button
                  onClick={handleCopyReference}
                  className="flex items-center gap-1.5 text-neutral-900 hover:text-neutral-700 transition-colors"
                >
                  <Text variant="body" weight="medium" className="text-sm">
                    {fileInfo.referenceCode}
                  </Text>
                  <FiCopy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Why did this happen? Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <Text variant="heading-3" weight="bold">
                Why did this happen?
              </Text>
              <FiHelpCircle className="w-5 h-5 text-neutral-400" />
            </div>

            <Text
              variant="body"
              color="secondary"
              className="mb-4 text-sm md:text-base"
            >
              Common reasons for analysis failure include:
            </Text>

            <ul className="space-y-3 mb-6">
              {failureReasons.map((reason, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <Text variant="body" className="text-sm md:text-base">
                    {reason.text}{" "}
                    <span className="font-semibold text-neutral-900">
                      {reason.highlight}
                    </span>
                    {reason.subtext}
                  </Text>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
            >
              View Troubleshooting Guide
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <button className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-2xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-2.5">
              <FiUpload className="w-5 h-5" />
              Upload Different File
            </button>

            <button className="w-full bg-white text-primary font-semibold py-4 px-6 rounded-2xl border-2 border-primary hover:bg-primary-50 transition-colors flex items-center justify-center gap-2.5">
              <FiHeadphones className="w-5 h-5" />
              Contact Support
            </button>
          </div>

          <button className="w-full text-red-600 hover:text-red-700 transition-colors py-4 text-sm font-medium">
            Delete This Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
