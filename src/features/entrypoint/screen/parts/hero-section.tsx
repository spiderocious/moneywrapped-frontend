import { Text, Button, Logo, Badge } from "@shared/ui";
import { FiArrowRight, FiLock } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <Logo mode="light" size="small" className="md:hidden" />
          <Logo mode="light" size="medium" className="hidden md:block" />
          <Text
            variant="heading-3"
            weight="bold"
            className="text-base md:text-xl"
          >
            FinanceWrapped
          </Text>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="text" size="medium">
            Sign In
          </Button>
          <Button variant="primary" size="medium">
            Sign Up
          </Button>
        </div>

        {/* Mobile navigation - only Sign Up */}
        <div className="md:hidden">
          <Button variant="primary" size="small">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 text-center">
        {/* Privacy Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="info" className="px-4 py-2">
            <FiLock className="inline mr-2" />
            100% Private & Secure
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-neutral-900">Your Year in </span>
          <span className="text-primary">Finance,</span>
          <br />
          <span className="text-primary">Wrapped</span>
        </h1>

        {/* Description */}
        <Text
          variant="body"
          color="secondary"
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          FinanceWrapped empowers you to effortlessly understand your money.
          Gain clear insights into your spending, set smarter budgets, and track
          your financial progress, all designed to help you make informed
          decisions and achieve your goals.
        </Text>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="large"
          className="px-12 shadow-xl"
          rightIcon={<FiArrowRight />}
        >
          Get Started Free
        </Button>

        {/* Sub-text */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-neutral-500">
          <Text variant="caption">No credit card required</Text>
          <span className="hidden md:inline">•</span>
          <Text variant="caption">60 seconds setup</Text>
        </div>

        {/* Trust Section */}
        <div className="mt-20">
          <Text variant="body" color="secondary" className="mb-6">
            Trusted by Nigerians banking with
          </Text>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {/* Bank logos as badges */}
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-neutral-300 rounded flex items-center justify-center text-neutral-600 font-bold text-sm">
                GT
              </div>
              <Text variant="body" weight="medium">
                GTBank
              </Text>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-neutral-300 rounded flex items-center justify-center text-neutral-600 font-bold text-sm">
                K
              </div>
              <Text variant="body" weight="medium">
                Kuda.
              </Text>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-neutral-300 rounded flex items-center justify-center text-neutral-600 font-bold text-sm">
                Z
              </div>
              <Text variant="body" weight="medium">
                Zenith
              </Text>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-neutral-300 rounded flex items-center justify-center text-neutral-600 font-bold text-sm">
                A
              </div>
              <Text variant="body" weight="medium">
                Access
              </Text>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg">
              <div className="w-8 h-8 bg-neutral-300 rounded flex items-center justify-center text-neutral-600 font-bold text-sm">
                C
              </div>
              <Text variant="body" weight="medium">
                Cowrywise
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
