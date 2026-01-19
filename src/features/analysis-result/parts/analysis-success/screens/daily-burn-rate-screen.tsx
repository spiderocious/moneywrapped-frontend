import { Text } from "@shared/ui";
import type { DailyBurnRateScreen as DailyBurnRateScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiClock, FiZap } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";
import { BiMoon, BiTime } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useEffect, useState } from "react";

interface DailyBurnRateScreenProps {
  readonly data: DailyBurnRateScreenData;
}

// Get icon for breakdown label
function getBreakdownIcon(label: string) {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("hour")) return FiClock;
  if (lowerLabel.includes("minute")) return FiZap;
  if (lowerLabel.includes("sleep")) return BiMoon;
  return BiTime;
}

// Get colors for breakdown
function getBreakdownColors(index: number) {
  const colors = [
    { bg: "bg-red-50", iconBg: "bg-red-100", icon: "text-red-500", label: "text-red-600" },
    { bg: "bg-orange-50", iconBg: "bg-orange-100", icon: "text-orange-500", label: "text-orange-600" },
    { bg: "bg-purple-50", iconBg: "bg-purple-100", icon: "text-purple-500", label: "text-purple-600" },
  ];
  return colors[index % colors.length];
}

export function DailyBurnRateScreen({ data }: DailyBurnRateScreenProps) {
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

  // Live burn counter
  const [liveBurn, setLiveBurn] = useState(data.liveBurn.amount.value);
  const perSecondBurn = data.dailyBurnRate.value / (24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveBurn((prev) => prev + perSecondBurn);
    }, 1000);
    return () => clearInterval(interval);
  }, [perSecondBurn]);

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-red-50/50 via-white to-white overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-red-100">
          <HiOutlineFire className="w-5 h-5 text-red-500" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-red-600 uppercase tracking-wider"
          >
            {data.badge}
          </Text>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants} className="text-center mb-6">
        <Text variant="heading-1" weight="bold" className="text-2xl md:text-3xl">
          {data.mainHeading}
        </Text>
      </motion.div>

      {/* Main Burn Rate Display */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center mb-6"
      >
        {/* Fire Icon */}
        <div className="relative mb-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <HiOutlineFire className="w-12 h-12 text-red-500" />
          </div>
          <motion.div
            className="absolute inset-0 bg-red-200 rounded-full -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Amount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text
            variant="heading-1"
            weight="bold"
            className="text-4xl md:text-5xl text-neutral-900"
          >
            {data.dailyBurnRate.displayValue}
          </Text>
        </motion.div>
        <Text variant="body" color="secondary" className="mt-1">
          {data.dailyBurnRate.label}
        </Text>
      </motion.div>

      {/* Breakdowns */}
      <div className="space-y-3 mb-4">
        {data.breakdowns.map((breakdown, index) => {
          const Icon = getBreakdownIcon(breakdown.label);
          const colors = getBreakdownColors(index);
          return (
            <motion.div
              key={breakdown.label}
              variants={itemVariants}
              className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${colors.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div>
                    <Text variant="body" weight="semibold">
                      {breakdown.label}
                    </Text>
                    <Text
                      variant="caption"
                      className={`${colors.label} uppercase text-xs`}
                    >
                      {breakdown.sublabel}
                    </Text>
                  </div>
                </div>
                <Text variant="body" weight="bold" className="text-lg">
                  {breakdown.displayValue}
                </Text>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Burn Card */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-4 mb-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-red-400 uppercase tracking-wider text-xs"
          >
            {data.liveBurn.label}
          </Text>
        </div>
        <div className="flex items-baseline gap-2">
          <Text variant="heading-2" weight="bold" className="text-2xl text-white">
            {data.liveBurn.amount.currencySymbol}
            {Math.floor(liveBurn).toLocaleString()}
          </Text>
          <Text variant="body" className="text-neutral-400">
            {data.liveBurn.message}
          </Text>
        </div>
      </motion.div>

      {/* Perspective Card */}
      <motion.div
        variants={itemVariants}
        className="bg-amber-50 rounded-2xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <HiOutlineLightBulb className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <Text
              variant="caption"
              weight="semibold"
              className="text-amber-700 uppercase tracking-wider text-xs block mb-1"
            >
              {data.perspective.label}
            </Text>
            <Text variant="body" className="text-neutral-700">
              {data.perspective.message}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
