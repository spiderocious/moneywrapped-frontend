import { useState, useEffect } from "react";
import { Text } from "@shared/ui";
import { HiLightBulb } from "react-icons/hi";
import { getRandomFunFact, type FunFact } from "../../../services/fun-facts";

export function FunFactStack() {
  const [facts, setFacts] = useState<FunFact[]>([
    getRandomFunFact(),
    getRandomFunFact(),
    getRandomFunFact(),
  ]);

  useEffect(() => {
    // Rotate facts every 10 seconds
    const interval = setInterval(() => {
      setFacts((prevFacts) => {
        // Move the first fact to the back and get a new random one
        const [, ...rest] = prevFacts;
        return [...rest, getRandomFunFact()];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto h-40 md:h-48">
      {/* Stack of cards - render in reverse so first is on top */}
      {facts.map((fact, index) => {
        const isTop = index === 0;
        const isSecond = index === 1;
        const isThird = index === 2;

        // Calculate transforms for stacking effect - push cards down more
        const getTransform = () => {
          if (isTop) return "translateY(0) scale(1)";
          if (isSecond) return "translateY(12px) scale(0.96)";
          if (isThird) return "translateY(24px) scale(0.92)";
          return "translateY(36px) scale(0.88)";
        };

        const getOpacity = () => {
          if (isTop) return "opacity-100";
          if (isSecond) return "opacity-70";
          return "opacity-40";
        };

        const getZIndex = () => {
          if (isTop) return "z-30";
          if (isSecond) return "z-20";
          return "z-10";
        };

        return (
          <div
            key={`${fact.id}-${index}`}
            className={`absolute top-0 left-0 right-0 transition-all duration-700 ease-out ${getOpacity()} ${getZIndex()}`}
            style={{
              transform: getTransform(),
            }}
          >
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-md border border-neutral-200">
              <div className="flex items-start gap-2.5 md:gap-3 text-left">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-primary-100 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiLightBulb className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5">
                    <HiLightBulb className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <Text
                      variant="caption"
                      weight="semibold"
                      className="text-primary uppercase tracking-wider text-[10px] md:text-xs"
                    >
                      Fun Fact
                    </Text>
                  </div>
                  <Text
                    variant="body"
                    color="secondary"
                    className="leading-relaxed text-xs md:text-sm"
                  >
                    {fact.text}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
