import { HeroSection } from "./parts/hero-section";
import { FeaturesSection } from "./parts/features-section";
import { HowItWorksSection } from "./parts/how-it-works-section";
import { InsightsSection } from "./parts/insights-section";
import { TestimonialsSection } from "./parts/testimonials-section";
import { CtaSection } from "./parts/cta-section";
import { Footer } from "./parts/footer";

export function LandingScreen() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InsightsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
