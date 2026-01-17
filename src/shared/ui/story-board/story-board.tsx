import { ReactNode, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Text } from "../text";

export interface StoryBoardProps {
  readonly children: ReactNode;
  readonly currentIndex?: number;
  readonly showNavigation?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  jumpToIndex?: (index: number) => void;
  totalSlides?: number;
}

export function StoryBoard({
  children,
  totalSlides = 1,
  onNext,
  onPrev,
  jumpToIndex,
  currentIndex = 0,
  showNavigation = true,
}: StoryBoardProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        onNext?.();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev]);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext?.();
    } else if (isRightSwipe) {
      onPrev?.();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/30">
      {/* Progress Bars */}
      <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
        <div className="flex gap-1.5 max-w-2xl mx-auto relative">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToIndex?.(index)}
              className="flex-1 h-1 md:h-1.5 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm cursor-pointer transition-all hover:opacity-80"
            >
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  index < currentIndex
                    ? "bg-primary w-full"
                    : index === currentIndex
                      ? "bg-primary w-full"
                      : "bg-[#cbd5e1] w-3 md:w-6"
                }`}
              />
            </button>
          ))}
          {/* Progress Indicator */}
          <div className="flex justify-end mb-4 absolute right-0 top-4">
            <div className="px-3 py-1.5 bg-white rounded-full shadow-sm border border-neutral-100">
              <Text
                variant="caption"
                weight="semibold"
                className="text-neutral-500"
              >
                {currentIndex + 1} / {totalSlides}
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="w-full h-full cursor-pointer"
        //onClick={handleClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>

      {/* Desktop Navigation Arrows */}
      {showNavigation && (
        <>
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev?.();
              }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg items-center justify-center text-neutral-700 hover:bg-white hover:text-primary transition-all"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < totalSlides - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg items-center justify-center text-neutral-700 hover:bg-white hover:text-primary transition-all"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
