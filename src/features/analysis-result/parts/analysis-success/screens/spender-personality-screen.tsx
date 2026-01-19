import { Text } from "@shared/ui";
import type { SpenderPersonalityScreen as SpenderPersonalityScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { BiSmile } from "react-icons/bi";
import { FiHeart, FiUsers, FiTarget, FiZap } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { AnalysisBottomCta } from "../components/analysis-bottom-cta";

interface SpenderPersonalityScreenProps {
  readonly data: SpenderPersonalityScreenData;
}

// Get icon for trait category
function getTraitIcon(category: string) {
  switch (category.toUpperCase()) {
    case "GENEROUS":
      return FiHeart;
    case "SOCIAL":
      return FiUsers;
    case "DISCIPLINED":
    case "TECH-FORWARD":
      return FiTarget;
    case "IMPULSIVE":
      return FiZap;
    default:
      return FiTarget;
  }
}

// Get color for trait level
function getTraitColor(level: "high" | "medium" | "low") {
  switch (level) {
    case "high":
      return {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        icon: "text-green-500",
        label: "text-green-600",
      };
    case "medium":
      return {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        icon: "text-blue-500",
        label: "text-blue-600",
      };
    case "low":
      return {
        bg: "bg-neutral-50",
        iconBg: "bg-neutral-100",
        icon: "text-neutral-500",
        label: "text-neutral-600",
      };
  }
}

export function SpenderPersonalityScreen({
  data,
}: SpenderPersonalityScreenProps) {
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
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
          <BiSmile className="w-5 h-5 text-amber-500" />
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
        <Text
          variant="heading-1"
          weight="bold"
          className="text-2xl md:text-3xl text-primary"
        >
          {data.highlightedText}
        </Text>
        <Text variant="body" color="secondary" className="mt-2">
          {data.subtitle}
        </Text>
      </motion.div>

      {/* Description Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-5 mb-4"
      >
        {data.description.map((desc, index) => (
          <div key={index} className={index > 0 ? "mt-4" : ""}>
            <Text variant="body" className="text-neutral-700 leading-relaxed">
              {desc.text}{" "}
              <span className="font-bold text-primary">{desc.highlighted}</span>{" "}
              {desc.suffix}
            </Text>
          </div>
        ))}
      </motion.div>

      {/* Traits Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-4">
        {data.traits.map((trait, index) => {
          const Icon = getTraitIcon(trait.category);
          const colors = getTraitColor(trait.level);
          return (
            <motion.div
              key={trait.category}
              className={`${colors.bg} rounded-2xl p-4`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div
                className={`w-10 h-10 ${colors.iconBg} rounded-xl flex items-center justify-center mb-3`}
              >
                <Icon className={`w-5 h-5 ${colors.icon}`} />
              </div>
              <Text
                variant="caption"
                weight="semibold"
                className={`${colors.label} uppercase tracking-wider text-xs`}
              >
                {trait.category}
              </Text>
              <Text variant="body" weight="bold" className="text-neutral-900">
                {trait.value}
              </Text>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Money Philosophy */}
      <motion.div
        variants={itemVariants}
        className="bg-primary/5 rounded-2xl p-5 relative"
      >
        <div className="absolute top-4 right-4">
          <HiOutlineSparkles className="w-8 h-8 text-primary/30" />
        </div>
        <Text
          variant="caption"
          weight="semibold"
          className="text-primary uppercase tracking-wider text-xs mb-2"
        >
          {data.moneyPhilosophy.label}
        </Text>
        <Text variant="body" className="text-neutral-700 italic leading-relaxed">
          "{data.moneyPhilosophy.quote}"
        </Text>
      </motion.div>

      {/* Bottom CTA */}
      <AnalysisBottomCta labelText="Ready for the numbers?" />
    </motion.div>
  );
}
