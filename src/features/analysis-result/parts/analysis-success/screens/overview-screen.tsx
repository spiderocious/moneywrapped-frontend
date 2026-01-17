import type { OverviewScreen as OverviewScreenData } from "@shared/types";
import { Text } from "@shared/ui";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { HiHeart } from "react-icons/hi";

interface OverviewScreenProps {
  readonly data: OverviewScreenData;
}

export function OverviewScreen({ data }: OverviewScreenProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-6 py-16 md:py-20">
      {/* Top Section - Branding */}
      <div className="flex flex-col items-center">
        {/* Brand Name */}
        <div className="mb-4">
          <Text
            variant="heading-2"
            weight="bold"
            className="text-2xl md:text-3xl"
          >
            <span className="text-neutral-900">Finance</span>
            <span className="text-primary">Wrapped</span>
          </Text>
        </div>

        {/* Year Badge */}
        <div className="inline-flex items-center px-5 py-2 bg-white rounded-full shadow-sm border border-neutral-200">
          <Text variant="body" weight="semibold" className="text-neutral-700">
            {data.year}
          </Text>
        </div>
      </div>

      {/* Middle Section - Chart Image & Title */}
      <div className="flex flex-col items-center flex-1 justify-center -mt-8">
        {/* Chart Illustration */}
        <div className="relative mb-12">
          {/* Pulsating glow effect */}
          <div
            className="absolute inset-0 -m-10 bg-primary/20 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          />

          {/* Outer glow circle */}
          <div className="absolute inset-0 -m-8 bg-primary-100/30 rounded-full blur-2xl" />

          {/* Dotted circle decoration */}
          <div className="absolute inset-0 -m-6 border-2 border-dashed border-primary-200/50 rounded-full" />

          {/* Main chart container */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl shadow-2xl flex items-end justify-center p-6 overflow-hidden">
            {/* Bar chart illustration */}
            <div className="flex items-end gap-3">
              <div className="w-8 md:w-10 h-16 md:h-20 bg-amber-400 rounded-t-lg" />
              <div className="w-8 md:w-10 h-24 md:h-28 bg-amber-400 rounded-t-lg" />
              <div className="w-8 md:w-10 h-20 md:h-24 bg-amber-400 rounded-t-lg" />
              <div className="w-8 md:w-10 h-32 md:h-36 bg-amber-400 rounded-t-lg" />
            </div>

            {/* Arrow decoration */}
            <div className="absolute top-4 right-4">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 text-teal-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 100 100"
              >
                <path d="M10 80 Q 30 60, 50 50 T 90 20" strokeLinecap="round" />
                <path
                  d="M75 15 L 90 20 L 85 35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Bubble decoration below */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <div
              className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="w-3 h-3 bg-primary/50 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>

        {/* Main Heading */}
        <Text
          variant="heading-1"
          weight="bold"
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-3"
        >
          {data.mainHeading}
        </Text>

        {/* Period Subtitle */}
        <Text
          variant="body"
          color="secondary"
          className="text-lg md:text-xl text-center"
        >
          {data.periodSubtitle}
        </Text>
      </div>

      {/* Bottom Section - Stats Grid */}
      <div className="w-full max-w-md">
        <div className="grid grid-cols-3 gap-3">
          {/* Total In */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-neutral-100">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <FiArrowDownLeft className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <Text
              variant="heading-3"
              weight="bold"
              className="text-center text-lg md:text-xl"
            >
              {data.totalIncome.displayValue}
            </Text>
            <Text
              variant="caption"
              color="secondary"
              className="text-center block text-xs uppercase tracking-wider mt-1"
            >
              Total In
            </Text>
          </div>

          {/* Total Out */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-neutral-100">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <FiArrowUpRight className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <Text
              variant="heading-3"
              weight="bold"
              className="text-center text-lg md:text-xl"
            >
              {data.totalOutflow.displayValue}
            </Text>
            <Text
              variant="caption"
              color="secondary"
              className="text-center block text-xs uppercase tracking-wider mt-1"
            >
              Total Out
            </Text>
          </div>

          {/* Health Score */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-neutral-100">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <HiHeart className="w-5 h-5 text-amber-500" />
              </div>
            </div>
            <Text
              variant="heading-3"
              weight="bold"
              className="text-center text-lg md:text-xl"
            >
              {data.healthScore.displayValue}
            </Text>
            <Text
              variant="caption"
              color="secondary"
              className="text-center block text-xs uppercase tracking-wider mt-1"
            >
              Health
            </Text>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-6 bg-primary text-white font-semibold py-4 px-6 rounded-full hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
          Tap to Continue
          <FiArrowUpRight className="w-5 h-5 rotate-45" />
        </button>
      </div>
    </div>
  );
}
