import Link from "next/link";
import { Container } from "@/components/ui";
import { AboutDto } from "@/lib/types";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  xtwitter: FaXTwitter,
  instagram: FaInstagram,
};

export function Footer({ about }: { about?: AboutDto | null }) {
  const currentYear = new Date().getFullYear();
  const name = about?.name || "Shankar Laxman Santi";

  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-light">
      <Container>
        <div className="py-6">
          <div className="flex flex-col items-center gap-4">
            {/* Resume Button */}
            <a
              href="/SHANKAR.SANTI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-on-accent rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent-blue/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {about?.links &&
                Object.entries(about.links).map(([key, url]) => {
                  if (key === "website" || key === "email" || key === "phone" || !url) return null;
                  const IconComponent = iconMap[key.toLowerCase()];
                  if (!IconComponent) return null;

                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-tertiary text-text-muted hover:bg-accent-blue hover:text-on-accent transition-all"
                      aria-label={key}
                    >
                      <IconComponent className="size-4" />
                    </a>
                  );
                })}
            </div>

            {/* Copyright */}
            <p className="text-text-tertiary text-sm">
              © {currentYear} {name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
