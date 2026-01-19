import { Text } from "@shared/ui";
import type { SpendingBreakdownScreen as SpendingBreakdownScreenData } from "@shared/types";
import { motion, type Variants } from "framer-motion";
import { BiBarChartAlt2 } from "react-icons/bi";

interface SpendingBreakdownScreenProps {
  readonly data: SpendingBreakdownScreenData;
}

// Map color names to Tailwind classes
function getCategoryColor(color: string) {
  const colorMap: Record<string, { dot: string; text: string }> = {
    purple: { dot: "bg-purple-500", text: "text-purple-600" },
    pink: { dot: "bg-pink-500", text: "text-pink-600" },
    teal: { dot: "bg-teal-500", text: "text-teal-600" },
    orange: { dot: "bg-orange-500", text: "text-orange-600" },
    gray: { dot: "bg-neutral-400", text: "text-neutral-500" },
    blue: { dot: "bg-blue-500", text: "text-blue-600" },
    green: { dot: "bg-green-500", text: "text-green-600" },
  };
  return colorMap[color] || colorMap.gray;
}

// Calculate donut chart path
function getDonutPath(
  percentage: number,
  startAngle: number,
  radius: number,
  strokeWidth: number
) {
  const innerRadius = radius - strokeWidth / 2;
  const endAngle = startAngle + percentage * 360;

  // Convert to radians
  const startRad = ((startAngle - 90) * Math.PI) / 180;
  const endRad = ((endAngle - 90) * Math.PI) / 180;

  const cx = 140;
  const cy = 140;

  const x1 = cx + innerRadius * Math.cos(startRad);
  const y1 = cy + innerRadius * Math.sin(startRad);
  const x2 = cx + innerRadius * Math.cos(endRad);
  const y2 = cy + innerRadius * Math.sin(endRad);

  const largeArc = percentage > 0.5 ? 1 : 0;

  return `M ${x1} ${y1} A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${x2} ${y2}`;
}

// Get stroke color from Tailwind color name
function getStrokeColor(color: string) {
  const colorMap: Record<string, string> = {
    purple: "#8b5cf6",
    pink: "#ec4899",
    teal: "#14b8a6",
    orange: "#f97316",
    gray: "#9ca3af",
    blue: "#3b82f6",
    green: "#22c55e",
  };
  return colorMap[color] || colorMap.gray;
}

export function SpendingBreakdownScreen({
  data,
}: SpendingBreakdownScreenProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  // Calculate angles for donut chart
  let currentAngle = 0;
  const segments = data.categories.map((category) => {
    const segment = {
      ...category,
      startAngle: currentAngle,
      path: getDonutPath(category.percentage.value, currentAngle, 120, 24),
    };
    currentAngle += category.percentage.value * 360;
    return segment;
  });

  return (
    <motion.div
      className="w-full h-full flex flex-col px-6 py-16 md:py-20 bg-gradient-to-b from-purple-50/30 via-white to-white overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="flex justify-start mb-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
          <BiBarChartAlt2 className="w-5 h-5 text-purple-500" />
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
      <motion.div variants={itemVariants} className="mb-2">
        <Text variant="heading-1" weight="bold" className="text-2xl md:text-3xl">
          Where it all went
        </Text>
        <Text variant="body" color="secondary" className="mt-1">
          Here is exactly how you spent your money this year.
        </Text>
      </motion.div>

      {/* Donut Chart */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center py-4"
      >
        <div className="relative w-56 h-56 md:w-64 md:h-64">
          <svg className="w-full h-full" viewBox="0 0 280 280">
            {/* Background circle */}
            <circle
              cx="140"
              cy="140"
              r="108"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="24"
            />
            {/* Category segments */}
            {segments.map((segment, index) => (
              <motion.path
                key={segment.name}
                d={segment.path}
                fill="none"
                stroke={getStrokeColor(segment.color)}
                strokeWidth="24"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut" as const,
                }}
              />
            ))}
          </svg>
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Text
              variant="caption"
              color="secondary"
              className="uppercase tracking-wider text-xs"
            >
              {data.totalSpent.label}
            </Text>
            <Text variant="heading-2" weight="bold" className="text-2xl md:text-3xl">
              {data.totalSpent.displayValue}
            </Text>
          </div>
        </div>
      </motion.div>

      {/* Categories List */}
      <div className="space-y-2">
        {data.categories.map((category) => {
          const colors = getCategoryColor(category.color);
          return (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
                  <div>
                    <Text variant="body" weight="semibold">
                      {category.name}
                    </Text>
                    <Text variant="caption" color="secondary">
                      {category.transactionCount.displayValue}
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text variant="body" weight="bold">
                    {category.amount.displayValue}
                  </Text>
                  <Text variant="caption" className={colors.text}>
                    {category.percentage.displayValue}
                  </Text>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
