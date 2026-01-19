import { Text } from "@shared/ui";
import type { YourPeopleStatScreen as YourPeopleStatScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { FiUsers, FiStar, FiCalendar } from "react-icons/fi";
import { BiWallet, BiDollar } from "react-icons/bi";
import { HiOutlineSparkles, HiOutlineInformationCircle } from "react-icons/hi";

interface YourPeopleStatScreenProps {
  readonly data: YourPeopleStatScreenData;
}

// Get icon for stat label
function getStatIcon(label: string) {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("sent")) return BiWallet;
  if (lowerLabel.includes("person")) return BiDollar;
  if (lowerLabel.includes("day")) return FiCalendar;
  return BiWallet;
}

export function YourPeopleStatScreen({ data }: YourPeopleStatScreenProps) {
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
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-amber-400 via-amber-400 to-amber-500 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-start mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
          <FiUsers className="w-4 h-4 text-white" />
          <Text
            variant="caption"
            weight="semibold"
            className="text-white uppercase tracking-wider"
          >
            {data.badge}
          </Text>
        </div>
      </motion.div>

      {/* Sparkle decoration */}
      <motion.div
        variants={itemVariants}
        className="absolute top-24 right-6"
      >
        <HiOutlineSparkles className="w-8 h-8 text-white/60" />
      </motion.div>

      {/* Shocking Stat Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl p-6 mb-4 shadow-lg"
      >
        <Text
          variant="caption"
          weight="semibold"
          className="text-amber-600 uppercase tracking-widest text-center block mb-4"
        >
          {data.shockingStat.label}
        </Text>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Text
            variant="heading-1"
            weight="bold"
            className="text-7xl md:text-8xl text-amber-500"
          >
            {data.shockingStat.displayValue}
          </Text>
        </motion.div>

        <Text
          variant="heading-3"
          weight="bold"
          className="text-center text-neutral-900 mt-2"
        >
          {data.shockingStat.description}
        </Text>
        <Text variant="body" color="secondary" className="text-center mt-1">
          {data.shockingStat.subtitle}
        </Text>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-4">
        {data.stats.slice(0, 2).map((stat, index) => {
          const Icon = getStatIcon(stat.label);
          return (
            <div
              key={stat.label}
              className="bg-amber-300/50 backdrop-blur-sm rounded-2xl p-4"
            >
              <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center mb-2">
                <Icon className="w-4 h-4 text-neutral-800" />
              </div>
              <Text variant="heading-3" weight="bold" className="text-neutral-900">
                {stat.displayValue}
              </Text>
              <Text
                variant="caption"
                className="text-neutral-700 uppercase tracking-wider text-xs"
              >
                {stat.label}
              </Text>
            </div>
          );
        })}
      </motion.div>

      {/* Third stat - full width */}
      {data.stats[2] && (
        <motion.div
          variants={itemVariants}
          className="bg-amber-300/50 backdrop-blur-sm rounded-2xl p-4 mb-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center">
            <FiCalendar className="w-5 h-5 text-neutral-800" />
          </div>
          <div>
            <Text variant="heading-3" weight="bold" className="text-neutral-900">
              {data.stats[2].displayValue}
            </Text>
            <Text
              variant="caption"
              className="text-neutral-700 uppercase tracking-wider text-xs"
            >
              {data.stats[2].label}
            </Text>
          </div>
        </motion.div>
      )}

      {/* Achievement Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl p-5 mb-4 relative overflow-hidden"
      >
        <div className="absolute right-4 bottom-4 opacity-20">
          <FiStar className="w-20 h-20 text-amber-400" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Text variant="body" weight="bold" className="text-neutral-900">
            {data.achievement.title}
          </Text>
          <FiStar className="w-5 h-5 text-amber-400" />
        </div>
        <Text variant="body" color="secondary" className="mb-3">
          {data.achievement.badge}
        </Text>
        <button className="px-4 py-2 bg-white border border-neutral-200 rounded-full">
          <Text variant="caption" weight="semibold" className="text-neutral-800">
            {data.achievement.cta}
          </Text>
        </button>
      </motion.div>

      {/* Reality Check Card */}
      <motion.div
        variants={itemVariants}
        className="bg-neutral-900 rounded-2xl p-4"
      >
        <div className="flex items-start gap-3">
          <HiOutlineInformationCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <Text
              variant="caption"
              weight="semibold"
              className="text-amber-400 uppercase tracking-wider text-xs mb-1"
            >
              {data.realityCheck.label}
            </Text>
            <Text variant="body" className="text-white/90">
              {data.realityCheck.message}
            </Text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
