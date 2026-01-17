import { Text } from "@shared/ui";
import { motion, type Variants } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";

interface AnalysisBottomCtaProps {
  readonly labelText?: string;
  readonly bodyText?: string;
}
export function AnalysisBottomCta({
  labelText,
  bodyText,
}: Readonly<AnalysisBottomCtaProps>) {
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
      variants={itemVariants}
      className="mt-auto pt-8 flex flex-col items-center"
    >
      <Text variant="body" color="secondary" className="mb-3">
        {labelText}
      </Text>
      <motion.div
        animate={{ x: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex"
      >
        <FiChevronLeft className="w-4 h-4 text-primary" />
        <FiChevronLeft className="w-4 h-4 text-primary opacity-80" />
        <FiChevronLeft className="w-4 h-4 text-primary opacity-70" />
        <FiChevronLeft className="w-4 h-4 text-primary opacity-50" />
        <FiChevronLeft className="w-4 h-4 text-primary opacity-30" />
      </motion.div>
      <Text
        variant="caption"
        color="secondary"
        className="uppercase tracking-widest text-xs mt-2"
      >
        {bodyText}
      </Text>
    </motion.div>
  );
}
