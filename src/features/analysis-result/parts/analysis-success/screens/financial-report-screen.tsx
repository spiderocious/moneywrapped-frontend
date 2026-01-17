import { Text } from "@shared/ui";
import type { FinancialReportScreen as FinancialReportScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiFileText, FiAlertTriangle } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { AnalysisBottomCta } from "../components/analysis-bottom-cta";

interface FinancialReportScreenProps {
  readonly data: FinancialReportScreenData;
}

export function FinancialReportScreen({ data }: FinancialReportScreenProps) {
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

  // Grade color based on value
  const gradeColors: Record<string, string> = {
    A: "bg-green-500",
    B: "bg-blue-500",
    C: "bg-yellow-500",
    D: "bg-red-500",
    F: "bg-red-700",
  };

  const gradeColor = gradeColors[data.reportCard.grade.value] || "bg-red-500";

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-amber-50 via-amber-50/30 to-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <FiFileText className="w-4 h-4 text-amber-500" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-neutral-700 uppercase tracking-wider"
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
      </motion.div>

      {/* Report Card */}
      <motion.div
        variants={cardVariants}
        className="flex-1 flex flex-col"
      >
        <div className="bg-white rounded-3xl shadow-lg border border-neutral-100 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BsBank className="w-5 h-5 text-white" />
              <Text variant="caption" weight="bold" className="text-white uppercase tracking-wider">
                {data.reportCard.brandName}
              </Text>
            </div>
            <div className="text-right">
              <Text variant="caption" className="text-white/80 text-xs uppercase">
                {data.reportCard.reportDate.label}
              </Text>
              <Text variant="body" weight="bold" className="text-white">
                {data.reportCard.reportDate.value}
              </Text>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            {/* Title */}
            <Text
              variant="caption"
              weight="semibold"
              className="text-neutral-500 uppercase tracking-widest text-center block mb-6"
            >
              {data.reportCard.title}
            </Text>

            {/* Grade Circle */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                {/* Outer glow */}
                <div className={`absolute inset-0 -m-2 ${gradeColor} opacity-20 rounded-full blur-xl`} />

                {/* Grade circle */}
                <motion.div
                  className={`relative w-28 h-28 md:w-32 md:h-32 ${gradeColor} rounded-full flex items-center justify-center shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                >
                  <Text
                    variant="heading-1"
                    weight="bold"
                    className="text-white text-5xl md:text-6xl"
                  >
                    {data.reportCard.grade.displayValue}
                  </Text>
                </motion.div>
              </div>
            </div>

            {/* Status */}
            <Text
              variant="heading-3"
              weight="bold"
              className="text-center block mb-2"
            >
              {data.reportCard.status.displayValue}
            </Text>

            {/* Health Score Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <Text variant="caption" color="secondary">
                  {data.reportCard.healthScore.label} {data.reportCard.healthScore.displayValue}
                </Text>
              </div>
            </div>

            {/* Primary Concern */}
            <div className="bg-amber-50 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <FiAlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <Text
                  variant="caption"
                  weight="semibold"
                  className="text-neutral-500 uppercase tracking-wider text-xs"
                >
                  {data.reportCard.primaryConcern.label}
                </Text>
                <Text variant="body" className="text-neutral-700 mt-1">
                  {data.reportCard.primaryConcern.title}{" "}
                  <span className="font-bold text-red-500">
                    {data.reportCard.primaryConcern.amount.displayValue}
                  </span>{" "}
                  {data.reportCard.primaryConcern.suffix}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <AnalysisBottomCta labelText={data.ctaText} />
    </motion.div>
  );
}
