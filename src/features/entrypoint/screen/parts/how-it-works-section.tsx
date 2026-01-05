import { Text, Button, Badge } from "@shared/ui";
import { FiArrowRight, FiClock, FiZap } from "react-icons/fi";

const steps = [
  {
    number: 1,
    image: (
      <div className="w-full h-64 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
        {/* Cloud icon with upload */}
        <div className="relative">
          <div className="w-32 h-24 bg-white/20 rounded-full blur-xl absolute top-4 left-4" />
          <div className="w-32 h-24 bg-white/20 rounded-full blur-xl absolute bottom-4 right-4" />
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <svg
              className="w-24 h-24 text-neutral-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    title: "Upload Statement",
    description: "Securely drag and drop your PDF bank statements or CSV files.",
    time: "~30 secs",
    icon: <FiClock className="w-4 h-4" />,
  },
  {
    number: 2,
    image: (
      <div className="w-full h-64 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="relative">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
            </div>
          </div>
          {/* Connection lines */}
          <div className="absolute -top-8 -left-8 w-20 h-20 border-2 border-primary/30 rounded-full animate-ping" />
          <div className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-primary/30 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>
    ),
    title: "AI Processes Data",
    description:
      "Our intelligent engine categorizes transactions and identifies trends.",
    time: "~1 min",
    icon: <FiClock className="w-4 h-4" />,
  },
  {
    number: 3,
    image: (
      <div className="w-full h-64 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center relative overflow-hidden p-8">
        {/* Phone mockup */}
        <div className="relative">
          <div className="w-48 h-full bg-neutral-900 rounded-3xl p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Phone notch */}
              <div className="h-6 bg-neutral-900 rounded-b-2xl mx-auto w-32" />
              {/* Screen content */}
              <div className="p-4 space-y-3">
                <div className="text-xs font-semibold text-neutral-400">
                  FinanceWrapped
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-neutral-100 rounded" />
                    <div className="h-8 flex-1 bg-neutral-100 rounded" />
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="h-3 w-16 bg-primary/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>
    ),
    title: "Explore Your Story",
    description:
      "Get your beautifully visualized FinanceWrapped report.",
    time: "Instant",
    icon: <FiZap className="w-4 h-4" />,
    badge: true,
  },
];

export function HowItWorksSection() {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="info" className="mb-6">
            HOW IT WORKS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From statement to story in 3 steps
          </h2>
          <Text
            variant="body"
            color="secondary"
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            We turn your raw data into a personalized financial year-in-review
            instantly.
          </Text>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-slide-in-up"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Step number badge */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Image */}
              <div className="mb-6">{step.image}</div>

              {/* Content */}
              <div className="text-center">
                <Text variant="heading-3" className="mb-3">
                  {step.title}
                </Text>
                <Text variant="body" color="secondary" className="mb-4">
                  {step.description}
                </Text>

                {/* Time badge */}
                <div className="flex items-center justify-center gap-2">
                  {step.icon}
                  {step.badge ? (
                    <Badge variant="success" showDot={false}>
                      {step.time}
                    </Badge>
                  ) : (
                    <Text variant="caption" color="secondary">
                      {step.time}
                    </Text>
                  )}
                </div>
              </div>

              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-px">
                  <div className="relative">
                    <div className="absolute left-12 right-12 top-0 border-t-2 border-dashed border-neutral-300" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in animation-delay-800">
          <Text variant="heading-2" className="mb-8">
            Ready to see your financial story?
          </Text>
          <Button
            variant="primary"
            size="large"
            className="px-12 shadow-xl"
            rightIcon={<FiArrowRight />}
          >
            Get My FinanceWrapped
          </Button>
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

        .animation-delay-800 {
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
