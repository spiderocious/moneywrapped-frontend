import type {
  AnalysisMetadata,
  AnalysisSummaryScreen as AnalysisSummaryScreenData,
} from "@shared/types";
import { Text } from "@shared/ui";
import { motion, type Variants } from "framer-motion";
import {
  FiCalendar,
  FiCreditCard,
  FiDollarSign,
  FiShoppingBag,
} from "react-icons/fi";
import { AnalysisBottomCta } from "../components/analysis-bottom-cta";

interface AnalysisSummaryScreenProps {
  readonly data: AnalysisSummaryScreenData;
  readonly metadata: AnalysisMetadata;
}

export function AnalysisSummaryScreen({
  data,
  metadata,
}: AnalysisSummaryScreenProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
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
      <motion.div variants={itemVariants} className="mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
          <div className="w-5 h-5 rounded bg-primary-100 flex items-center justify-center">
            <FiCreditCard className="w-3 h-3 text-primary" />
          </div>
          <Text
            variant="caption"
            weight="semibold"
            className="text-primary uppercase tracking-wider"
          >
            {data.badge}
          </Text>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants} className="mb-8">
        <Text
          variant="heading-1"
          weight="bold"
          className="text-3xl md:text-4xl lg:text-5xl"
        >
          {data.mainHeading}
        </Text>
        <Text
          variant="body"
          weight="bold"
          className="text-base md:text-lg text-primary mt-2"
        >
          Bank statement from {metadata?.period_start} - {metadata?.period_end}
        </Text>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 gap-4 flex-1"
      >
        {/* Days Analyzed */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100 flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
            <FiCalendar className="w-6 h-6 text-blue-500" />
          </div>
          <Text
            variant="heading-1"
            weight="bold"
            className="text-4xl md:text-5xl mb-1"
          >
            {data.daysAnalyzed.displayValue}
          </Text>
          <Text
            variant="caption"
            color="secondary"
            className="uppercase tracking-wider text-xs"
          >
            {data.daysAnalyzed.label}
          </Text>
        </motion.div>

        {/* Transactions */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100 flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
            <FiCreditCard className="w-6 h-6 text-purple-500" />
          </div>
          <Text
            variant="heading-1"
            weight="bold"
            className="text-4xl md:text-5xl mb-1"
          >
            {data.totalTransactions.displayValue}
          </Text>
          <Text
            variant="caption"
            color="secondary"
            className="uppercase tracking-wider text-xs"
          >
            {data.totalTransactions.label}
          </Text>
        </motion.div>

        {/* Total Spent */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100 flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
            <FiDollarSign className="w-6 h-6 text-red-500" />
          </div>
          <Text
            variant="heading-1"
            weight="bold"
            className="text-3xl md:text-4xl text-red-500 mb-1"
          >
            {data.totalSpent.displayValue}
          </Text>
          <Text
            variant="caption"
            color="secondary"
            className="uppercase tracking-wider text-xs"
          >
            {data.totalSpent.label}
          </Text>
        </motion.div>

        {/* Unique Merchants */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100 flex flex-col"
        >
          <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-4">
            <FiShoppingBag className="w-6 h-6 text-teal-500" />
          </div>
          <Text
            variant="heading-1"
            weight="bold"
            className="text-4xl md:text-5xl mb-1"
          >
            {data.uniqueMerchants.displayValue}
          </Text>
          <Text
            variant="caption"
            color="secondary"
            className="uppercase tracking-wider text-xs leading-tight"
          >
            {data.uniqueMerchants.label}
          </Text>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <AnalysisBottomCta
        bodyText="Swipe left to continue"
        labelText="Let's see what we found..."
      />
    </motion.div>
  );
}
