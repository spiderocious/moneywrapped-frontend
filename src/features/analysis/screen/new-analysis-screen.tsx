import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "@shared/ui";
import {
  FiArrowLeft,
  FiUploadCloud,
  FiX,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
import { routeNames } from "@shared/constants/routes/routes";
import { Hidden } from "meemaw";

const supportedBanks = [
  { name: "GTBank", abbr: "GT", color: "bg-orange-600" },
  { name: "Zenith", abbr: "ZB", color: "bg-red-600" },
  { name: "Access", abbr: "AC", color: "bg-orange-500" },
  { name: "UBA", abbr: "UBA", color: "bg-red-700" },
];

export function NewAnalysisScreen() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File | null) => {
    if (file && (file.type === "application/pdf" || file.type === "text/csv")) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;

    // Generate a mock analysis code (in real app, this would come from API)
    const mockAnalysisCode = `FW-${Math.floor(Math.random() * 10000)}`;

    console.log("Analyzing file:", selectedFile);

    // Navigate to analysis result page
    navigate(`/analysis/result/${mockAnalysisCode}`);
  };

  const formatFileSize = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile Header */}
      <Hidden on="desktop">
        <header className="bg-white border-b border-neutral-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <FiArrowLeft className="w-6 h-6 text-neutral-900" />
            </button>
            <Text variant="body" weight="semibold">
              FinanceWrapped
            </Text>
            <button
              onClick={() => navigate(routeNames.dashboard)}
              className="text-primary text-base font-medium"
            >
              Skip
            </button>
          </div>
        </header>
      </Hidden>

      {/* Desktop Layout */}
      <Hidden on="mobile">
        <div className="flex h-screen overflow-hidden">
          {/* Left Panel - Dark */}
          <div className="w-1/2 bg-neutral-900 px-16 py-12 flex flex-col justify-between overflow-y-auto">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <Text variant="heading-3" weight="bold" className="text-white">
                FinanceWrapped
              </Text>
            </div>

            <div className="max-w-md">
              <Text
                variant="heading-1"
                weight="bold"
                className="text-white mb-6 leading-tight"
              >
                Unlock your financial clarity today.
              </Text>
              <Text variant="body" className="text-white mb-8 text-lg">
                Join thousands of Nigerians who are taking control of their
                spending habits with detailed analytics.
              </Text>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <Text variant="body" className="text-white">
                    Spot hidden bank fees instantly
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <Text variant="body" className="text-white">
                    Visualize spending patterns
                  </Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <Text variant="body" className="text-white">
                    100% Private & Secure parsing
                  </Text>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          {/* Right Panel - Light */}
          <div className="w-1/2 bg-neutral-50 px-16 py-12 flex flex-col overflow-y-auto -center items-center">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="self-start p-2 -ml-2 hover:bg-neutral-100 rounded-lg transition-colors mb-8 flex-shrink-0"
              >
                <FiArrowLeft className="w-6 h-6 text-neutral-900" />
              </button>

              <div className="max-w-xl">
                <Text variant="heading-1" weight="bold" className="mb-3">
                  Let's see where your money goes.
                </Text>
                <Text
                  variant="body"
                  color="secondary"
                  className="mb-12 text-lg"
                >
                  Upload your bank statement (PDF or CSV) to unlock your
                  financial insights.
                </Text>

                {/* Upload Area */}
                <div
                  className={`border-2 border-dashed rounded-3xl p-12 mb-8 text-center transition-colors ${
                    isDragging
                      ? "border-primary bg-primary-50"
                      : "border-neutral-300 bg-white"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                      <FiUploadCloud className="w-8 h-8 text-primary" />
                    </div>
                    <Text
                      variant="heading-3"
                      weight="semibold"
                      className="mb-2"
                    >
                      Tap to browse or drag file here
                    </Text>
                    <Text variant="body" color="secondary" className="mb-6">
                      Supported formats: PDF, CSV. Max size 10MB.
                    </Text>
                    <input
                      type="file"
                      id="file-input-desktop"
                      accept=".pdf,.csv"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <label htmlFor="file-input-desktop">
                      <Button variant="primary" size="large" as="span">
                        Browse Files
                      </Button>
                    </label>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-success-50 rounded-2xl p-4 mb-8 flex gap-3">
                  <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-success-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Text variant="body" weight="semibold" className="mb-1">
                      Data Processing Notice
                    </Text>
                    <Text variant="caption" color="secondary">
                      We strip personally identifiable information and only
                      analyze transaction categories. Your data is encrypted and
                      never shared or shared with third parties.
                    </Text>
                  </div>
                </div>

                {/* Analyze Button */}
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleAnalyze}
                  state={!selectedFile ? "disabled" : "default"}
                  className="w-full"
                >
                  Analyze My Statement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Hidden>

      {/* Mobile Content */}
      <Hidden on="desktop">
        <main className="px-4 py-6">
          <div className="mb-8">
            <Text variant="heading-2" weight="bold" className="mb-3">
              Let's unwrap your finances.
            </Text>
            <Text variant="body" color="secondary">
              Upload your bank statement (PDF or CSV) to get a breakdown of your
              spending habits.
            </Text>
          </div>

          {/* Upload Area - Mobile */}
          <div
            className={`border-2 border-dashed rounded-2xl p-8 mb-6 text-center transition-colors ${
              isDragging
                ? "border-primary bg-primary-50"
                : "border-neutral-300 bg-white"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <FiUploadCloud className="w-8 h-8 text-primary" />
              </div>
              <Text variant="body" weight="semibold" className="mb-2">
                Upload Statement
              </Text>
              <Text variant="caption" color="secondary" className="mb-6">
                Drag & drop or select a file (PDF, CSV)
              </Text>
              <input
                type="file"
                id="file-input-mobile"
                accept=".pdf,.csv"
                onChange={handleFileInput}
                className="hidden"
              />
              <label htmlFor="file-input-mobile">
                <Button variant="primary" size="medium" as="span">
                  Browse Files
                </Button>
              </label>
            </div>
          </div>

          {/* Selected File */}
          {selectedFile && (
            <div className="bg-white rounded-2xl p-4 mb-6 flex items-center gap-3 border border-neutral-200">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiFileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <Text
                  variant="body"
                  weight="semibold"
                  className="truncate mb-1"
                >
                  {selectedFile.name}
                </Text>
                <Text variant="caption" color="secondary">
                  {formatFileSize(selectedFile.size)} • Ready to analyze
                </Text>
              </div>
              <button
                onClick={handleRemoveFile}
                className="w-10 h-10 flex items-center justify-center text-error-600 hover:bg-error-50 rounded-lg transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Privacy Notice - Mobile */}
          <div className="bg-primary-50 rounded-2xl p-4 mb-6 flex gap-3">
            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <Text variant="body" weight="semibold" className="mb-1">
                Your privacy is protected.
              </Text>
              <Text variant="caption" color="secondary">
                We use bank-grade encryption and only analyze transaction
                categories. We are fully NDPR compliant.
              </Text>
            </div>
          </div>

          {/* Supported Banks - Mobile */}
          <div className="mb-6">
            <Text
              variant="caption"
              weight="semibold"
              color="secondary"
              className="uppercase tracking-wider mb-4 block text-center"
            >
              Supported Banks & Apps
            </Text>
            <div className="flex justify-center items-center gap-4">
              {supportedBanks.map((bank) => (
                <div
                  key={bank.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-16 h-16 ${bank.color} rounded-2xl flex items-center justify-center`}
                  >
                    <Text variant="body" weight="bold" className="text-white">
                      {bank.abbr}
                    </Text>
                  </div>
                  <Text variant="caption" color="secondary">
                    {bank.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          {/* Analyze Button - Mobile */}
          <Button
            variant="primary"
            size="large"
            onClick={handleAnalyze}
            state={!selectedFile ? "disabled" : "default"}
            className="w-full"
          >
            Analyze My Statement
          </Button>
        </main>
      </Hidden>
    </div>
  );
}
