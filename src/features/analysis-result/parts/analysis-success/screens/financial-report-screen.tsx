import { Text } from "@shared/ui";
import type { FinancialReportScreen as FinancialReportScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiFileText, FiAlertTriangle } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { AnalysisBottomCta } from "../components/analysis-bottom-cta";

interface FinancialReportScreenProps {
  readonly data: FinancialReportScreenData;
}

// Color scheme based on grade
function getGradeColors(grade: string) {
  switch (grade) {
    case "A":
      return {
        gradient: "bg-gradient-to-b from-green-50 via-green-50/30 to-white",
        header: "bg-gradient-to-r from-green-400 to-green-500",
        primaryBg: "bg-green-500",
        primary: "text-green-500",
        accent: "text-green-600",
        badge: "text-green-500",
        iconBg: "bg-green-100",
        concernBg: "bg-green-50",
      };
    case "B":
      return {
        gradient: "bg-gradient-to-b from-blue-50 via-blue-50/30 to-white",
        header: "bg-gradient-to-r from-blue-400 to-blue-500",
        primaryBg: "bg-blue-500",
        primary: "text-blue-500",
        accent: "text-blue-600",
        badge: "text-blue-500",
        iconBg: "bg-blue-100",
        concernBg: "bg-blue-50",
      };
    case "C":
      return {
        gradient: "bg-gradient-to-b from-amber-50 via-amber-50/30 to-white",
        header: "bg-gradient-to-r from-amber-400 to-amber-500",
        primaryBg: "bg-amber-500",
        primary: "text-amber-500",
        accent: "text-amber-600",
        badge: "text-amber-500",
        iconBg: "bg-amber-100",
        concernBg: "bg-amber-50",
      };
    case "D":
      return {
        gradient: "bg-gradient-to-b from-orange-50 via-orange-50/30 to-white",
        header: "bg-gradient-to-r from-orange-400 to-orange-500",
        primaryBg: "bg-orange-500",
        primary: "text-orange-500",
        accent: "text-orange-600",
        badge: "text-orange-500",
        iconBg: "bg-orange-100",
        concernBg: "bg-orange-50",
      };
    default: // F or other
      return {
        gradient: "bg-gradient-to-b from-red-50 via-red-50/30 to-white",
        header: "bg-gradient-to-r from-red-400 to-red-500",
        primaryBg: "bg-red-500",
        primary: "text-red-500",
        accent: "text-red-600",
        badge: "text-red-500",
        iconBg: "bg-red-100",
        concernBg: "bg-red-50",
      };
  }
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

  // Get colors based on grade
  const colors = getGradeColors(data.reportCard.grade.value);

  return (
    <motion.div
      className={`w-full h-full flex flex-col px-6 py-16 md:py-20 ${colors.gradient}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <FiFileText className={`w-4 h-4 ${colors.badge}`} />
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
          <div className={`${colors.header} p-4 flex justify-between items-center`}>
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
                <div className={`absolute inset-0 -m-2 ${colors.primaryBg} opacity-20 rounded-full blur-xl`} />

                {/* Grade circle */}
                <motion.div
                  className={`relative w-28 h-28 md:w-32 md:h-32 ${colors.primaryBg} rounded-full flex items-center justify-center shadow-lg`}
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
                <div className={`w-2 h-2 ${colors.primaryBg} rounded-full`} />
                <Text variant="caption" color="secondary">
                  {data.reportCard.healthScore.label} {data.reportCard.healthScore.displayValue}
                </Text>
              </div>
            </div>

            {/* Primary Concern */}
            <div className={`${colors.concernBg} rounded-2xl p-4 flex items-start gap-3`}>
              <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center flex-shrink-0`}>
                <FiAlertTriangle className={`w-5 h-5 ${colors.accent}`} />
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
                  <span className={`font-bold ${colors.primary}`}>
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
