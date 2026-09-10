"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Code } from "lucide-react";

export interface Slide {
  image: string;
  title: string;
  description: string;
  badge: string;
  url?: string;
  github?: string;
  technologies?: string[];
}

const defaultSlides: Slide[] = [
  {
    image: "/ecommerce-website.png",
    title: "🛒 E-Commerce Website",
    description: "A modern, responsive online shopping platform with cart, checkout, and product catalog.",
    badge: "Full Stack",
  },
  {
    image: "/ai-travel-advisor.png",
    title: "✈️ AI Travel Advisor",
    description: "AI-powered travel planner for destination discovery and personalized trip itineraries.",
    badge: "AI & ML",
  },
  {
    image: "/Resume Analyzer.png",
    title: "📄 AI Resume Analyzer",
    description: "Smart ATS evaluator and resume optimizer powered by machine learning algorithms.",
    badge: "AI & ML",
  },
  {
    image: "/pharmacy.jpge.png",
    title: "💊 Pharmacy Management System",
    description: "15-module ERP system with real-time billing, inventory tracking, and sales analytics.",
    badge: "Full Stack",
  },
  {
    image: "/travel png.png",
    title: "🌍 Travel Destination Recommender",
    description: "Intelligent travel engine providing AI recommendations, weather forecast, and cost estimation.",
    badge: "Python & AI",
  },
];

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  // Mobile extra small (< 420px)
  if (width < 420) {
    return {
      distanceDivisor: 90,
      velocityDivisor: 400,
      sensitivity: 140,
      xMultiplier: 45,
      yMultiplier: 10,
      rotationMultiplier: 4,
      scaleReduction: 0.06,
    };
  }
  // Mobile standard (420px - 640px)
  if (width < 640) {
    return {
      distanceDivisor: 110,
      velocityDivisor: 480,
      sensitivity: 170,
      xMultiplier: 65,
      yMultiplier: 14,
      rotationMultiplier: 5,
      scaleReduction: 0.07,
    };
  }
  // Tablet portrait (640px - 768px)
  if (width < 768) {
    return {
      distanceDivisor: 130,
      velocityDivisor: 550,
      sensitivity: 190,
      xMultiplier: 95,
      yMultiplier: 18,
      rotationMultiplier: 6,
      scaleReduction: 0.08,
    };
  }
  // Tablet landscape / Small laptop (768px - 1024px)
  if (width < 1024) {
    return {
      distanceDivisor: 150,
      velocityDivisor: 620,
      sensitivity: 210,
      xMultiplier: 125,
      yMultiplier: 22,
      rotationMultiplier: 7,
      scaleReduction: 0.09,
    };
  }
  // Standard Laptop & Desktop (1024px - 1440px)
  if (width < 1440) {
    return {
      distanceDivisor: 180,
      velocityDivisor: 750,
      sensitivity: 240,
      xMultiplier: 150,
      yMultiplier: 26,
      rotationMultiplier: 8,
      scaleReduction: 0.1,
    };
  }
  // Large / Widescreen Desktop (>= 1440px)
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 260,
    xMultiplier: 180,
    yMultiplier: 30,
    rotationMultiplier: 9,
    scaleReduction: 0.11,
  };
};

export interface CarouselStackedProps {
  slides?: Slide[];
  className?: string;
}

export const CarouselStacked = ({
  slides = defaultSlides,
  className,
}: CarouselStackedProps) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(1200);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync active slide index for navigation indicators
  React.useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const positiveIndex = (((Math.round(latest) % total) + total) % total);
      setActiveIndex(positiveIndex);
    });
    return () => unsubscribe();
  }, [scrollProgress, total]);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 220,
      damping: 28,
      mass: 0.8,
    });
  };

  const slidePrev = () => {
    const current = Math.round(scrollProgress.get());
    animate(scrollProgress, current - 1, {
      type: "spring",
      stiffness: 220,
      damping: 28,
      mass: 0.8,
    });
  };

  const slideNext = () => {
    const current = Math.round(scrollProgress.get());
    animate(scrollProgress, current + 1, {
      type: "spring",
      stiffness: 220,
      damping: 28,
      mass: 0.8,
    });
  };

  const goToSlide = (index: number) => {
    const current = Math.round(scrollProgress.get());
    const currentNormalized = (((current % total) + total) % total);
    let diff = index - currentNormalized;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    animate(scrollProgress, current + diff, {
      type: "spring",
      stiffness: 220,
      damping: 28,
      mass: 0.8,
    });
  };

  return (
    <div className={cn("flex flex-col items-center justify-center w-full py-2 sm:py-4 bg-transparent select-none overflow-hidden", className)}>
      <div className="relative w-full max-w-5xl h-[330px] sm:h-[380px] md:h-[420px] lg:h-[450px] flex items-center justify-center touch-pan-y">
        {/* Horizontal Drag Surface with vertical scroll pass-through */}
        <motion.div
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }}
          className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing touch-pan-y"
        />

        {/* 3D Stacked Cards */}
        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
            onSelect={() => goToSlide(i)}
          />
        ))}

        {/* Previous Navigation Button */}
        <button
          onClick={slidePrev}
          aria-label="Previous project"
          className="absolute left-1 sm:left-3 md:left-6 z-40 p-2 sm:p-2.5 md:p-3 rounded-full bg-background/90 hover:bg-background text-foreground backdrop-blur-md border border-border shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={slideNext}
          aria-label="Next project"
          className="absolute right-1 sm:right-3 md:right-6 z-40 p-2 sm:p-2.5 md:p-3 rounded-full bg-background/90 hover:bg-background text-foreground backdrop-blur-md border border-border shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "transition-all duration-300 rounded-full cursor-pointer",
              activeIndex === idx
                ? "w-6 sm:w-7 h-2 sm:h-2 bg-slate-900 dark:bg-white"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
            )}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
  onSelect: () => void;
}

const Card = ({ slide, index, total, progress, config, onSelect }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  // Non-linear bounded x-position so side cards never overflow
  const x = useTransform(offset, (o) => {
    const sign = Math.sign(o);
    const absO = Math.abs(o);
    if (absO <= 1) {
      return o * config.xMultiplier;
    }
    const extra = Math.min(absO - 1, 1.2) * (config.xMultiplier * 0.4);
    return sign * (config.xMultiplier + extra);
  });

  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    const sign = Math.sign(o);
    return Math.min(absO, 2) * sign * config.rotationMultiplier;
  });

  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return Math.min(absO, 2) * config.yMultiplier;
  });

  const scale = useTransform(
    offset,
    (o) => Math.max(0.75, 1 - Math.min(Math.abs(o), 2.5) * config.scaleReduction),
  );

  // Strictly bound opacity so distant cards do not render or overflow
  const opacity = useTransform(
    offset,
    [-2.2, -2, -1, 0, 1, 2, 2.2],
    [0, 0.45, 0.85, 1, 0.85, 0.45, 0],
  );

  const zIndex = useTransform(offset, (o) =>
    Math.round(20 - Math.min(Math.abs(o), 3) * 3),
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
        touchAction: "pan-y",
      }}
      onClick={onSelect}
      className={cn(
        "absolute rounded-2xl overflow-hidden bg-muted group shadow-xl sm:shadow-2xl border border-border/80 transition-shadow duration-300 cursor-pointer touch-pan-y",
        "w-[215px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[280px] md:h-[390px] lg:w-[300px] lg:h-[420px]",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
      />

      <motion.div
        style={{
          opacity: useTransform(
            offset,
            [-2, -0.5, 0, 0.5, 2],
            [0.5, 0.15, 0, 0.15, 0.5],
          ),
        }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

      <Badge className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-black shadow-md border-0 pointer-events-none">
        {slide.badge}
      </Badge>

      <div className="absolute bottom-3 left-2.5 right-2.5 sm:bottom-5 sm:left-4 sm:right-4 text-white text-center sm:text-left pointer-events-none">
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight mb-1 drop-shadow-md line-clamp-1"
        >
          {slide.title}
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="hidden sm:block text-xs text-white/80 line-clamp-2 italic font-medium drop-shadow mb-2"
        >
          {slide.description}
        </motion.p>

        {/* Live Demo / GitHub Links on Center Card */}
        <motion.div
          style={{
            opacity: useTransform(offset, [-0.3, 0, 0.3], [0, 1, 0]),
            pointerEvents: useTransform(offset, (o) => (Math.abs(o) < 0.3 ? "auto" : "none")),
          }}
          className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 pt-0.5 sm:pt-1"
        >
          {slide.url && (
            <a
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white text-slate-900 text-[11px] sm:text-xs font-semibold hover:bg-slate-100 transition-colors shadow-sm"
            >
              Demo <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            </a>
          )}
          {slide.github && (
            <a
              href={slide.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/60 hover:bg-black/80 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-sm border border-white/20 transition-colors"
            >
              <Code className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Code
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
