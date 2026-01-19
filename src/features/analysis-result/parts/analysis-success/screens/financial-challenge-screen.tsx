import { Text } from "@shared/ui";
import type { FinancialChallengeScreen as FinancialChallengeScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiAlertTriangle, FiTrendingDown } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { AnalysisBottomCta } from "../components/analysis-bottom-cta";

interface FinancialChallengeScreenProps {
  readonly data: FinancialChallengeScreenData;
}

export function FinancialChallengeScreen({
  data,
}: FinancialChallengeScreenProps) {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
          <FiAlertTriangle className="w-4 h-4 text-amber-600" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-amber-700 uppercase tracking-wider"
          >
            {data.badge}
          </Text>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants} className="text-center mb-6">
        <Text
          variant="heading-1"
          weight="bold"
          className="text-2xl md:text-3xl"
        >
          {data.mainHeading}
        </Text>
        <div className="relative inline-block">
          <Text
            variant="heading-1"
            weight="bold"
            className="text-2xl md:text-3xl text-amber-500"
          >
            {data.highlightedWord}
          </Text>
          {/* Underline decoration */}
          <div className="absolute -bottom-1 left-0 right-0 h-2 bg-amber-200 rounded-full -z-10" />
        </div>
      </motion.div>

      {/* Problem Card */}
      <motion.div
        variants={cardVariants}
        className="bg-white rounded-3xl shadow-lg border-2 border-amber-400 overflow-hidden mb-4"
      >
        <div className="p-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 -m-2 bg-amber-100 rounded-full blur-xl" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <TbCurrencyNaira className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <Text
            variant="caption"
            weight="semibold"
            className="text-neutral-500 uppercase tracking-widest text-center block mb-2"
          >
            {data.problemStatement.label}
          </Text>
          <Text
            variant="heading-2"
            weight="bold"
            className="text-xl md:text-2xl text-center mb-6"
          >
            {data.problemStatement.title}
          </Text>

          {/* Divider */}
          <div className="h-px bg-neutral-100 mb-6" />

          {/* Monthly Cost */}
          <div className="bg-neutral-50 rounded-2xl p-5 text-center">
            <Text
              variant="caption"
              color="secondary"
              className="uppercase tracking-wider block mb-2"
            >
              {data.monthlyCost.label}
            </Text>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Text
                variant="heading-1"
                weight="bold"
                className="text-3xl md:text-4xl text-amber-500"
              >
                {data.monthlyCost.displayValue}
              </Text>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Projected Impact Card */}
      <motion.div
        variants={itemVariants}
        className="bg-red-50 rounded-2xl p-4 flex items-start gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <FiTrendingDown className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <Text
            variant="caption"
            weight="semibold"
            className="text-neutral-500 uppercase tracking-wider text-xs"
          >
            {data.projectedImpact.label}
          </Text>
          <Text variant="body" className="text-neutral-700 mt-1">
            {data.projectedImpact.message}{" "}
            <span className="font-bold text-red-500">
              {data.projectedImpact.amount.displayValue}
            </span>{" "}
            {data.projectedImpact.suffix}
          </Text>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <AnalysisBottomCta labelText={data.ctaText} />
    </motion.div>
  );
}
