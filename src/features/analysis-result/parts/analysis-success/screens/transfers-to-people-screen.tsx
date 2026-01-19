import { Text } from "@shared/ui";
import type { TransfersToPeopleScreen as TransfersToPeopleScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiSend, FiList, FiTrendingUp, FiUsers, FiClock } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiCrown } from "react-icons/gi";

interface TransfersToPeopleScreenProps {
  readonly data: TransfersToPeopleScreenData;
}

// Get icon for stat label
function getStatIcon(label: string) {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("transaction")) return FiList;
  if (lowerLabel.includes("average")) return FiTrendingUp;
  if (lowerLabel.includes("reach") || lowerLabel.includes("people")) return FiUsers;
  if (lowerLabel.includes("frequency")) return FiClock;
  return FiList;
}

// Get icon color for stat
function getStatIconColor(index: number) {
  const colors = [
    { bg: "bg-green-100", icon: "text-green-600" },
    { bg: "bg-blue-100", icon: "text-blue-600" },
    { bg: "bg-purple-100", icon: "text-purple-600" },
    { bg: "bg-orange-100", icon: "text-orange-600" },
  ];
  return colors[index % colors.length];
}

export function TransfersToPeopleScreen({
  data,
}: TransfersToPeopleScreenProps) {
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

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
          <GiCrown className="w-5 h-5 text-amber-500" />
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
      <motion.div variants={itemVariants} className="text-center mb-2">
        <Text variant="heading-1" weight="bold" className="text-2xl md:text-3xl">
          {data.mainHeading}
        </Text>
        <Text variant="body" color="secondary" className="mt-1">
          {data.subtitle}
        </Text>
      </motion.div>

      {/* Main Amount Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-6 mb-4"
      >
        {/* Send Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
            <FiSend className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        {/* Total Amount */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text
            variant="heading-1"
            weight="bold"
            className="text-3xl md:text-4xl text-purple-600"
          >
            {data.totalAmount.displayValue}
          </Text>
          <div className="mt-2 inline-block px-3 py-1 bg-neutral-100 rounded-full">
            <Text variant="caption" color="secondary">
              {data.percentage.displayValue}
            </Text>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-4">
        {data.stats.map((stat, index) => {
          const Icon = getStatIcon(stat.label);
          const colors = getStatIconColor(index);
          return (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div
                className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center mb-3`}
              >
                <Icon className={`w-5 h-5 ${colors.icon}`} />
              </div>
              <Text
                variant="caption"
                color="secondary"
                className="uppercase tracking-wider text-xs block mb-1"
              >
                {stat.label}
              </Text>
              <Text variant="body" weight="bold" className="text-lg">
                {stat.displayValue}
              </Text>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Insight Card */}
      <motion.div
        variants={itemVariants}
        className="bg-amber-50 rounded-2xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <HiOutlineLightBulb className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Text variant="body" weight="bold" className="text-neutral-800">
                {data.insight.title}
              </Text>
              <BsBank className="w-4 h-4 text-neutral-400" />
            </div>
            <Text variant="caption" color="secondary">
              {data.insight.message}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
