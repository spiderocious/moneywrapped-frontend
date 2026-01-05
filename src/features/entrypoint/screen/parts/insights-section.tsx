import { Text, Badge } from "@shared/ui";
import { FiZap } from "react-icons/fi";

const insightCards = [
  {
    type: "light",
    icon: (
      <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    ),
    badge: "FINANCIAL HEALTH",
    title: (
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          {/* Circular progress */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#3C83F6"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${70 * 2 * Math.PI * 0.75} ${70 * 2 * Math.PI}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Text variant="heading-1" className="text-5xl text-primary">
              A+
            </Text>
          </div>
        </div>
      </div>
    ),
    subtitle: "Top 10% of Savers",
    description: null,
    tags: null,
  },
  {
    type: "gradient",
    gradient: "from-primary to-primary-600",
    icon: (
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
    ),
    badge: "SPENDING PERSONALITY",
    title: (
      <Text variant="heading-2" className="text-white mb-4">
        The Weekend Warrior
      </Text>
    ),
    subtitle: null,
    description:
      "You spend 60% of your total budget between Friday 5PM and Sunday night.",
    tags: ["Socialite", "Dining"],
  },
  {
    type: "dark",
    icon: (
      <div className="w-16 h-16 bg-warning/20 rounded-2xl flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-warning"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
    ),
    badge: "HIGHER EARNER",
    title: (
      <Text variant="heading-2" className="text-white mb-4">
        December Danger
      </Text>
    ),
    subtitle: null,
    description:
      "Your December spending was 3x your average monthly spending. Holiday season hit different!",
    tags: ["Shopping", "Travel", "Gifts"],
  },
];

export function InsightsSection() {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="info" className="mb-6">
            <FiZap className="inline mr-2" />
            SEE IT IN ACTION
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The insights that surprise you
          </h2>
          <Text
            variant="body"
            color="secondary"
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Uncover patterns in your spending you never noticed before. Your
            financial year, wrapped.
          </Text>
        </div>

        {/* Cards Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="relative mb-12">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {insightCards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] snap-center"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {renderCard(card)}
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {insightCards.map((card, index) => (
              <div
                key={index}
                className="animate-slide-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                {renderCard(card)}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots - mobile only */}
        <div className="flex justify-center gap-2 md:hidden mb-8">
          {insightCards.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === 0 ? "w-8 bg-primary" : "w-2 bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <Text variant="caption" color="secondary">
            Every analysis is unique. These are just examples for demonstration
            purposes.
          </Text>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

function renderCard(card: (typeof insightCards)[0]) {
  const baseClasses =
    "rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full min-h-[500px] flex flex-col";

  if (card.type === "light") {
    return (
      <div className={`${baseClasses} bg-white`}>
        {card.icon}
        <div className="text-center mb-4">
          <Text variant="caption" color="secondary" className="uppercase">
            {card.badge}
          </Text>
        </div>
        {card.title}
        <div className="mt-auto">
          <div className="text-center mb-3">
            <Text variant="body" weight="medium">
              {card.subtitle}
            </Text>
          </div>
          {/* Progress bar */}
          <div className="w-full max-w-[200px] mx-auto h-1 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (card.type === "gradient") {
    return (
      <div
        className={`${baseClasses} bg-gradient-to-br ${card.gradient} text-white`}
      >
        {card.icon}
        <div className="mb-4">
          <Text variant="caption" className="uppercase text-white/80">
            {card.badge}
          </Text>
        </div>
        {card.title}
        <Text variant="body" className="text-white/90 mb-6 flex-grow">
          {card.description}
        </Text>
        {card.tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {card.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (card.type === "dark") {
    return (
      <div className={`${baseClasses} bg-neutral-900 text-white`}>
        {card.icon}
        <div className="mb-4">
          <Text variant="caption" className="uppercase text-neutral-400">
            {card.badge}
          </Text>
        </div>
        {card.title}
        <Text variant="body" className="text-neutral-300 mb-6 flex-grow">
          {card.description}
        </Text>
        {card.tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {card.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
