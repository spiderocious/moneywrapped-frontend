import { HeroSection } from "./parts/hero-section";
import { FeaturesSection } from "./parts/features-section";
import { HowItWorksSection } from "./parts/how-it-works-section";

export function LandingScreen() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </div>
  );
}
