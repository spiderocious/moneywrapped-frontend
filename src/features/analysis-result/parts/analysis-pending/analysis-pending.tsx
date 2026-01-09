import { useState, useEffect } from "react";
import { Text } from "@shared/ui";
import { FiBarChart2 } from "react-icons/fi";
import { FunFactStack } from "./components";

export function AnalysisPending() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Processing takes 8 minutes (480 seconds)
    // Update progress every 2 seconds
    const totalSeconds = 480; // 8 minutes
    const updateInterval = 1000; // 1 second
    const incrementAmount = (100 / totalSeconds) * 1; // increment per 1 second

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + incrementAmount;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, updateInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(progress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50 flex flex-col items-center justify-center px-4 py-8 md:py-12">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-12 md:mb-16">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center">
          <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full" />
        </div>
        <Text variant="heading-3" weight="bold" className="text-xl md:text-2xl">
          FinanceWrapped
        </Text>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full mx-auto text-center px-2 md:px-0">
        {/* Animated Circle Progress */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 md:mb-12">
          {/* Background circle for shadow effect */}
          <div className="absolute inset-0 bg-primary-100/40 rounded-full blur-xl" />

          {/* Spinning ring container */}
          <div className="relative">
            <svg
              className="w-32 h-32 md:w-40 md:h-40 animate-spin"
              style={{ animationDuration: "3s" }}
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="85"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="text-primary"
                strokeDasharray="80 450"
              />
            </svg>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg">
                <FiBarChart2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>

            {/* Large bubble animation radiating around the loader */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-full h-full bg-primary/20 rounded-full animate-ping"
                style={{ animationDuration: "2s" }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <Text
          variant="heading-2"
          weight="bold"
          className="mb-2 text-2xl md:text-3xl"
        >
          Analyzing your transactions...
        </Text>
        <Text
          variant="body"
          color="secondary"
          className="mb-8 md:mb-10 text-sm md:text-base"
        >
          Estimated time: &lt; 8 minutes
        </Text>

        {/* Progress Bar */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center justify-between mb-2.5">
            <Text
              variant="caption"
              weight="semibold"
              className="text-primary text-xs"
            >
              PROCESSING
            </Text>
            <Text
              variant="caption"
              weight="semibold"
              color="secondary"
              className="text-xs"
            >
              {Math.round(progress)}%
            </Text>
          </div>
          <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Fun Facts Stack */}
        <FunFactStack />

        {/* Cancel Button */}
        <button className="mt-10 md:mt-12 inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <Text variant="body" weight="medium" className="text-sm md:text-base">
            Cancel Analysis
          </Text>
        </button>
      </div>
    </div>
  );
}
