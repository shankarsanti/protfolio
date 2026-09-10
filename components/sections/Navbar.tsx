"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ui";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if page is scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Auto-hide when scrolling down, auto-reveal when scrolling up
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY.current + 6) {
        // Scrolling down -> hide navbar (unless mobile menu is actively open)
        if (!isMobileMenuOpen) {
          setIsVisible(false);
        }
      } else if (currentScrollY < prevScrollY.current - 6) {
        // Scrolling up -> reveal navbar
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Active section tracking (scroll-spy)
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // gather section IDs for scroll‑spy
    const sectionIds = NAV_LINKS.filter((l) => l.href.includes("#")).map(
      (l) => l.href.split("#")[1],
    );
    if (sectionIds.length === 0) return;

    // IntersectionObserver to handle most cases
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          const closest = intersecting.reduce((prev, curr) => {
            const prevDist = Math.abs(prev.boundingClientRect.top - 100);
            const currDist = Math.abs(curr.boundingClientRect.top - 100);
            return prevDist < currDist ? prev : curr;
          });
          setActiveSection(closest.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      },
    );

    // Observe existing elements
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll-based fallback & initial check
    let rafId: number | null = null;
    const checkActiveOnScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        let closestId: string | null = null;
        let closestDistance = Infinity;

        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const referencePoint = 120;

          let distance: number;
          if (rect.top <= referencePoint && rect.bottom >= referencePoint) {
            distance = 0;
          } else {
            distance = Math.min(
              Math.abs(rect.top - referencePoint),
              Math.abs(rect.bottom - referencePoint),
            );
          }

          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        });

        if (closestId) {
          setActiveSection((prev) => (prev === closestId ? prev : closestId));
        }
      });
    };

    checkActiveOnScroll();
    window.addEventListener("scroll", checkActiveOnScroll, { passive: true });
    window.addEventListener("resize", checkActiveOnScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkActiveOnScroll);
      window.removeEventListener("resize", checkActiveOnScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsVisible(true);
    const isHash = href.startsWith("#") || href.startsWith("/#");
    if (isHash) {
      const id = href.split("#")[1];
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(href.startsWith("/#") ? href : "/" + href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-5xl rounded-2xl sm:rounded-full transition-colors duration-300",
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl backdrop-saturate-150 border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-black/5 dark:shadow-black/40"
          : "bg-white/75 dark:bg-slate-950/75 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm shadow-black/5 dark:shadow-black/20"
      )}
    >
      <div className="px-4 sm:px-6">
        <nav className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo - Minimal */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection(null);
              }
            }}
            className="text-lg font-bold text-slate-900 dark:text-white hover:text-accent-blue transition-colors tracking-tight flex items-center gap-0.5"
          >
            <span>/</span>
            <span className="text-accent-blue">.</span>
          </Link>

          {/* Desktop Navigation - Pill Design */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-sm bg-slate-100/60 dark:bg-slate-900/60">
            {NAV_LINKS.map((link) => {
              const isHash =
                link.href.startsWith("#") || link.href.startsWith("/#");
              const id = isHash ? link.href.split("#")[1] : link.href;
              const isActive = isHash && activeSection === id;

              const baseClass = `px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full`;
              const activeClass = isActive
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md shadow-black/10 font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70";

              if (isHash) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`${baseClass} ${activeClass}`}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${baseClass} ${activeClass}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="scale-90">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-4 w-4" />
              ) : (
                <FiMenu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-1 pt-3 border-t border-slate-200/80 dark:border-slate-800">
            {NAV_LINKS.map((link) => {
              const isHash =
                link.href.startsWith("#") || link.href.startsWith("/#");
              const id = isHash ? link.href.split("#")[1] : link.href;
              const isActive = isHash && activeSection === id;

              if (isHash) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors rounded-xl ${
                      isActive
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
                        : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 rounded-xl"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
