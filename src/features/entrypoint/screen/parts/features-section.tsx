import { Text, Card, Badge } from "@shared/ui";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "AI-Powered Insights",
    description:
      "Deep dive into your transaction history with intelligent categorization that learns your habits.",
    features: ["Smart Categorization", "Trend Analysis", "Spending Alerts"],
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Privacy First",
    description:
      "Your financial data is sensitive. We process everything locally on your device for maximum security.",
    features: [
      "On-device Processing",
      "No Credential Storage",
      "FaceID Compatible",
    ],
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    title: "Shareable Stories",
    description:
      "Turn your boring bank statements into beautiful, shareable graphics ready for your social feed.",
    features: ["Annual Recap Format", "Custom Themes", "One-tap Export"],
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with fade-in animation */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="info" className="mb-6">
            WHY FINANCEWRAPPED
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neutral-900">Financial clarity in </span>
            <span className="text-primary">60 seconds</span>
          </h2>
          <Text
            variant="body"
            color="secondary"
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Stop guessing where your money went. Get a personalized annual
            report of your spending habits instantly and securely.
          </Text>
        </div>

        {/* Features Grid with staggered slide-in animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="elevated"
              padding="large"
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <Text variant="heading-3" className="mb-3">
                {feature.title}
              </Text>

              {/* Description */}
              <Text variant="body" color="secondary" className="mb-6">
                {feature.description}
              </Text>

              {/* Feature list */}
              <div className="space-y-3">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <Text variant="body" color="secondary">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Add custom animations */}
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
      `}</style>
    </section>
  );
}
