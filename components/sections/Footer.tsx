import Link from "next/link";
import { Container, IconButton } from "@/components/ui";
import { NAV_LINKS } from "@/lib/constants";
import { AboutDto } from "@/lib/types";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import packageJson from "@/package.json";

const iconMap: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  xtwitter: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
};

export function Footer({ about }: { about?: AboutDto | null }) {
  const currentYear = new Date().getFullYear();
  const name = about?.name || "Shankar Laxman Santi";

  return (
    <footer className="bg-bg-secondary text-text-primary border-t border-border-light">
      <Container>
        <div className="py-8">
          <div className="grid gap-6 md:grid-cols-3 items-start">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block text-xl font-bold mb-2 hover:text-accent-blue transition-colors">
                {name.split(" ")[0]}
                <span className="text-accent-blue">.</span>
              </Link>
              <p className="text-text-tertiary text-xs mb-3">
                Full Stack Developer
              </p>
              
              {/* View Resume Button */}
              <a
                href="/SHANKAR.SANTI_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-blue text-on-accent rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold mb-3 text-text-primary uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-1.5">
                {NAV_LINKS.map((link) => {
                  const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                  return (
                    <li key={link.href}>
                      <Link href={href} className="text-text-secondary hover:text-accent-blue transition-colors text-xs">
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-semibold mb-3 text-text-primary uppercase tracking-wider">Connect</h4>
              <div className="flex items-center gap-2 mb-3">
                {about?.links &&
                  Object.entries(about.links).map(([key, url]) => {
                    if (key === "website" || key === "email" || !url) return null;
                    const IconComponent = iconMap[key.toLowerCase()];
                    if (!IconComponent) return null;

                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-bg-tertiary text-text-muted hover:bg-accent-blue hover:text-on-accent transition-all"
                        aria-label={key}
                      >
                        <IconComponent className="size-3.5" />
                      </a>
                    );
                  })}
              </div>
              {about?.links?.email && (
                <a href={`mailto:${about.links.email}`} className="text-text-secondary hover:text-accent-blue transition-colors text-xs">
                  {about.links.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-border-light">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <p className="text-text-tertiary">
              © {currentYear} {name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-text-secondary">
              <Link
                href="https://github.com/shankarsanti/protfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-accent-blue transition-colors"
              >
                <FaGithub className="h-3.5 w-3.5" />
                <span>Source</span>
              </Link>
              <span className="text-text-tertiary">•</span>
              <span className="text-accent-blue font-medium">v{packageJson.version}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
