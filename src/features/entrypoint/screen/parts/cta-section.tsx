import { Text, Button, Badge } from "@shared/ui";
import { FiArrowRight, FiLock, FiZap, FiCreditCard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { routeNames } from "@shared/constants/routes/routes";

export function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#0a1628] text-white py-20 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      {/* Subtle Gradient Background */}
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e3a5f_0%,_transparent_70%)] opacity-40" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Top Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge
            variant="info"
            className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold tracking-wider px-4 py-1.5"
          >
            GET STARTED
          </Badge>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in-up animation-delay-200">
          Ready to understand
          <br />
          your money?
        </h2>

        {/* Description */}
        <Text
          variant="body"
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400"
        >
          Join thousands who have unlocked their financial clarity. It takes
          less than a minute.
        </Text>

        {/* CTA Button */}
        <div className="mb-6 animate-fade-in-up animation-delay-600">
          <Button
            variant="primary"
            size="large"
            rightIcon={<FiArrowRight />}
            className="w-full md:w-auto px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg shadow-blue-500/30"
            onClick={() => navigate(routeNames.signup)}
          >
            Get Started Free
          </Button>
        </div>

        {/* Secondary Link */}
        <div className="mb-20 animate-fade-in-up animation-delay-800">
          <button className="text-gray-400 hover:text-white transition-colors text-sm">
            See example analysis first
          </button>
        </div>

        {/* Features List */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <FiLock className="text-gray-400 w-5 h-5" />
            </div>
            <Text variant="body" className="text-gray-300 text-sm">
              100% Private & Secure
            </Text>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <FiZap className="text-gray-400 w-5 h-5" />
            </div>
            <Text variant="body" className="text-gray-300 text-sm">
              Results in 10 seconds
            </Text>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <FiCreditCard className="text-gray-400 w-5 h-5" />
            </div>
            <Text variant="body" className="text-gray-300 text-sm">
              No credit card needed
            </Text>
          </div>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
