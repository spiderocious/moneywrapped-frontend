import { Text } from "@shared/ui";
import type { TopRecipientScreen as TopRecipientScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiUser, FiList } from "react-icons/fi";
import { GiCrown } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

interface TopRecipientScreenProps {
  readonly data: TopRecipientScreenData;
}

export function TopRecipientScreen({ data }: TopRecipientScreenProps) {
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
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-pink-50 via-pink-50/50 to-white overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full">
          <GiCrown className="w-5 h-5 text-pink-500" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-pink-600 uppercase tracking-wider"
          >
            {data.badge}
          </Text>
        </div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl p-6 shadow-lg border border-neutral-100 relative mb-4"
      >
        {/* Rank Badge */}
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
          <Text variant="heading-3" weight="bold" className="text-white">
            {data.rank}
          </Text>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
            <Text variant="heading-2" weight="bold" className="text-pink-500">
              {data.recipient.initials}
            </Text>
          </div>
        </div>

        {/* Name */}
        <Text
          variant="heading-3"
          weight="bold"
          className="text-center text-neutral-900 mb-1"
        >
          {data.recipient.name}
        </Text>

        {/* Relationship Type */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1 text-neutral-500">
            <FiUser className="w-4 h-4" />
            <Text variant="caption" color="secondary">
              {data.recipient.relationshipTypeEstimation}
            </Text>
          </div>
        </div>

        {/* Quote */}
        <Text
          variant="body"
          color="secondary"
          className="text-center italic mb-6"
        >
          "{data.recipient.quote}"
        </Text>

        {/* Divider */}
        <div className="h-px bg-neutral-100 mb-6" />

        {/* Total Sent */}
        <Text
          variant="caption"
          color="secondary"
          className="text-center uppercase tracking-wider block mb-2"
        >
          {data.totalSent.label}
        </Text>
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text
            variant="heading-1"
            weight="bold"
            className="text-3xl md:text-4xl text-pink-500"
          >
            {data.totalSent.displayValue}
          </Text>
        </motion.div>

        {/* Transaction Count */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full">
            <FiList className="w-4 h-4 text-pink-500" />
            <Text variant="caption" weight="semibold" className="text-pink-600">
              {data.transactionCount.displayValue}
            </Text>
          </div>
        </div>
      </motion.div>

      {/* Transfer Timeline */}
      <motion.div variants={itemVariants} className="mb-4">
        <Text
          variant="caption"
          weight="semibold"
          color="secondary"
          className="uppercase tracking-wider text-center block mb-4"
        >
          {data.transferTimeline.label}
        </Text>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-2 left-8 right-8 h-0.5 bg-pink-200" />

          {/* Timeline dots */}
          <div className="flex justify-between px-4">
            {data.transferTimeline.dates.map((date, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full ${
                    index === data.transferTimeline.dates.length - 1
                      ? "bg-pink-500 ring-4 ring-pink-100"
                      : "bg-pink-300"
                  }`}
                />
                <Text variant="caption" color="secondary" className="mt-2">
                  {date.displayValue}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Pattern Detected Card */}
      <motion.div
        variants={itemVariants}
        className="bg-pink-50 rounded-2xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
            <HiOutlineLightBulb className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <Text
              variant="caption"
              weight="bold"
              className="text-neutral-800 uppercase tracking-wider text-xs mb-1"
            >
              {data.patternDetected.label}
            </Text>
            <Text variant="body" color="secondary">
              {data.patternDetected.message}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
