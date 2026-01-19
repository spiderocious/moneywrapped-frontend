import { Text } from "@shared/ui";
import type { BigPictureScreen as BigPictureScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiArrowDown, FiArrowUp, FiAlertTriangle } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";
import { BiLineChart } from "react-icons/bi";

interface BigPictureScreenProps {
  readonly data: BigPictureScreenData;
}

export function BigPictureScreen({ data }: BigPictureScreenProps) {
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

  const isDeficit = data.netResult.value < 0;

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-green-50/50 via-white to-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <TbMoneybag className="w-5 h-5 text-amber-500" />
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
          Your cash flow at a glance
        </Text>
      </motion.div>

      {/* Money In/Out Cards */}
      <motion.div variants={itemVariants} className="flex gap-3 mb-4">
        {/* Money In */}
        <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-green-500" />
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <FiArrowDown className="w-4 h-4 text-green-600" />
            </div>
            <Text
              variant="caption"
              weight="semibold"
              className="text-neutral-500 uppercase tracking-wider text-xs"
            >
              {data.moneyIn.label}
            </Text>
          </div>
          <Text variant="heading-2" weight="bold" className="text-xl mb-2">
            {data.moneyIn.displayValue}
          </Text>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
              <FiArrowDown className="w-3 h-3 text-green-600" />
            </div>
            <Text variant="caption" className="text-green-600">
              {data.moneyIn.topContributor.label}
            </Text>
          </div>
        </div>

        {/* VS Badge */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
            <Text
              variant="caption"
              weight="bold"
              className="text-white text-xs"
            >
              vs
            </Text>
          </div>
        </div>

        {/* Money Out */}
        <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <FiArrowUp className="w-4 h-4 text-red-600" />
            </div>
            <Text
              variant="caption"
              weight="semibold"
              className="text-neutral-500 uppercase tracking-wider text-xs"
            >
              {data.moneyOut.label}
            </Text>
          </div>
          <Text variant="heading-2" weight="bold" className="text-xl mb-2">
            {data.moneyOut.displayValue}
          </Text>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
              <FiArrowUp className="w-3 h-3 text-red-600" />
            </div>
            <Text variant="caption" className="text-red-600">
              {data.moneyOut.topContributor.label}
            </Text>
          </div>
        </div>
      </motion.div>

      {/* Net Result Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-6 mb-4 flex-1"
      >
        <div className="flex justify-between items-center mb-6">
          <Text variant="body" color="secondary">
            {data.netResult.label}
          </Text>
          <div
            className={`px-3 py-1 rounded-full ${isDeficit ? "bg-red-100" : "bg-green-100"}`}
          >
            <div className="flex items-center gap-1">
              <FiAlertTriangle
                className={`w-3 h-3 ${isDeficit ? "text-red-600" : "text-green-600"}`}
              />
              <Text
                variant="caption"
                weight="bold"
                className={`uppercase text-xs ${isDeficit ? "text-red-600" : "text-green-600"}`}
              >
                {data.netResult.status}
              </Text>
            </div>
          </div>
        </div>

        {/* Visual placeholder for chart */}
        <div className="flex items-end justify-center h-24 mb-6">
          <BiLineChart className="w-16 h-16 text-neutral-200" />
        </div>

        <Text variant="caption" color="secondary" className="block mb-2">
          {data.netResult.calculation}
        </Text>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Text
            variant="heading-1"
            weight="bold"
            className={`text-4xl md:text-5xl ${isDeficit ? "text-red-500" : "text-green-500"}`}
          >
            {data.netResult.displayValue}
          </Text>
        </motion.div>
      </motion.div>

      {/* Insight Card */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
            <BiLineChart className="w-5 h-5 text-neutral-500" />
          </div>
          <div>
            <Text
              variant="body"
              weight="semibold"
              className="text-neutral-800 mb-1"
            >
              {data.insight.message}
            </Text>
            <Text variant="caption" color="secondary">
              {data.insight.recommendation}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
