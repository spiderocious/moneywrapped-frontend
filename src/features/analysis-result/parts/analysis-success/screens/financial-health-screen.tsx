import { Text } from "@shared/ui";
import type { FinancialHealthScreen as FinancialHealthScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiActivity, FiArrowRight } from "react-icons/fi";
import { HiHeart } from "react-icons/hi";

interface FinancialHealthScreenProps {
  readonly data: FinancialHealthScreenData;
}

// Color scheme based on health score
function getHealthColors(score: number) {
  if (score >= 80) {
    return {
      gradient: "bg-gradient-to-b from-green-50 via-green-50/50 to-white",
      primary: "text-green-500",
      primaryBg: "bg-green-500",
      stroke: "#22c55e",
      track: "#dcfce7",
      icon: "text-green-400",
    };
  } else if (score >= 60) {
    return {
      gradient: "bg-gradient-to-b from-blue-50 via-blue-50/50 to-white",
      primary: "text-blue-500",
      primaryBg: "bg-blue-500",
      stroke: "#3b82f6",
      track: "#dbeafe",
      icon: "text-blue-400",
    };
  } else if (score >= 40) {
    return {
      gradient: "bg-gradient-to-b from-amber-50 via-amber-50/50 to-white",
      primary: "text-amber-500",
      primaryBg: "bg-amber-500",
      stroke: "#f59e0b",
      track: "#fef3c7",
      icon: "text-amber-400",
    };
  } else {
    return {
      gradient: "bg-gradient-to-b from-red-50 via-red-50/50 to-white",
      primary: "text-red-500",
      primaryBg: "bg-red-500",
      stroke: "#ef4444",
      track: "#fce7f3",
      icon: "text-red-400",
    };
  }
}

export function FinancialHealthScreen({ data }: FinancialHealthScreenProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  // Calculate the percentage for the arc
  const percentage = data.healthScore.value / data.healthScore.maxValue;
  const circumference = 2 * Math.PI * 180; // radius = 120
  const strokeDashoffset = circumference * (1 - percentage); // 0.75 for 270 degree arc

  // Get colors based on score
  const colors = getHealthColors(data.healthScore.value);

  return (
    <motion.div
      className={`w-full h-full flex flex-col px-6 py-16 md:py-20 ${colors.gradient}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <FiActivity className="w-4 h-4 text-red-500" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-neutral-700 uppercase tracking-wider"
          >
            {data.badge}
          </Text>
        </div>
      </motion.div>

      {/* Score Circle */}
      <motion.div
        variants={itemVariants}
        className="flex-1 flex flex-col items-center justify-center"
      >
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-[135deg]" viewBox="0 0 280 280">
            {/* Track */}
            <circle
              cx="140"
              cy="140"
              r="120"
              fill="none"
              stroke={colors.track}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={circumference * 0.75}
            />
            {/* Progress */}
            <motion.circle
              cx="140"
              cy="140"
              r="120"
              fill="none"
              stroke={colors.stroke}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={circumference * 0.75}
              initial={{ strokeDashoffset: circumference * 0.75 }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <HiHeart className={`w-8 h-8 ${colors.icon} mb-2`} />
            <div className="flex items-baseline">
              <motion.span
                className="text-6xl md:text-7xl font-bold text-neutral-900"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {data.healthScore.displayValue}
              </motion.span>
              <span className="text-2xl md:text-3xl text-neutral-400 ml-1">
                {data.healthScore.displayText}
              </span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mt-6">
          <div className={`px-6 py-2 ${colors.primaryBg} rounded-full`}>
            <Text
              variant="caption"
              weight="bold"
              className="text-white uppercase tracking-wider"
            >
              {data.healthRating.displayValue}
            </Text>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants} className="mt-4 text-center">
          <Text variant="body" className="text-neutral-600 text-lg">
            {data.message}
          </Text>
        </motion.div>
      </motion.div>

      {/* Comparison Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100"
      >
        {/* You */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <Text variant="body" weight="semibold" className="text-neutral-700">
              {data.comparison.userScore.label}
            </Text>
            <Text variant="body" weight="bold" className={colors.primary}>
              {data.comparison.userScore.displayValue}
            </Text>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${colors.primaryBg} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${data.comparison.userScore.value}%` }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" as const }}
            />
          </div>
        </div>

        {/* Nigerian Average */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <Text variant="body" color="secondary">
              {data.comparison.nigerianAverage.label}
            </Text>
            <Text variant="body" weight="semibold" className="text-neutral-500">
              {data.comparison.nigerianAverage.displayValue}
            </Text>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-neutral-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${data.comparison.nigerianAverage.value}%` }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" as const }}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        className="mt-6 flex items-center justify-center gap-2"
      >
        <Text variant="body" weight="semibold" className={colors.primary}>
          {data.ctaText}
        </Text>
        <div
          className={`w-8 h-8 rounded-full ${colors.primaryBg} flex items-center justify-center`}
        >
          <FiArrowRight className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}
