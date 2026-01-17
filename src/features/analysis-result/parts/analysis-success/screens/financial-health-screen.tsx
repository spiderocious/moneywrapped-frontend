import { Text } from "@shared/ui";
import type { FinancialHealthScreen as FinancialHealthScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiActivity, FiArrowRight } from "react-icons/fi";
import { HiHeart } from "react-icons/hi";

interface FinancialHealthScreenProps {
  readonly data: FinancialHealthScreenData;
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

  // Calculate the percentage for the arc (38 out of 100 = 38%)
  const percentage = data.healthScore.value / data.healthScore.maxValue;
  const circumference = 2 * Math.PI * 120; // radius = 120
  const strokeDashoffset = circumference * (1 - percentage * 0.75); // 0.75 for 270 degree arc

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-red-50 via-red-50/50 to-white"
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
              stroke="#fce7f3"
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
              stroke="#ef4444"
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
            <HiHeart className="w-8 h-8 text-red-400 mb-2" />
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
          <div className="px-6 py-2 bg-red-500 rounded-full">
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
            <Text variant="body" weight="bold" className="text-red-500">
              {data.comparison.userScore.displayValue}
            </Text>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-500 rounded-full"
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
        <Text variant="body" weight="semibold" className="text-red-500">
          {data.ctaText}
        </Text>
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
          <FiArrowRight className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}
