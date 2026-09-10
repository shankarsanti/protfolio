"use client";

import Link from "next/link";
import { Container, Section, SectionHeader, Card } from "@/components/ui";
import { Button } from "@/components/ui/buttons";
import { CertificationDto } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Certifications({
  certifications,
}: {
  certifications?: CertificationDto[];
}) {
  const [selectedCert, setSelectedCert] = useState<CertificationDto | null>(
    null
  );

  return (
    <Section id="certifications" background="primary">
      <Container>
        <SectionHeader
          subtitle="Certifications"
          title="Professional Credentials"
          description="Certifications and courses that validate my skills and expertise."
        />

        <div className="relative mt-12 md:mt-16 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {certifications?.concat(certifications || []).map((cert, index) => (
              <motion.div
                key={`${cert._id || index}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % (certifications?.length || 1)) * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer flex-shrink-0 w-80"
              >
                <Card variant="elevated" hover className="h-full group">
                  {/* Certificate Image */}
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-bg-tertiary">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple">
                      <FaAward className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-text-muted">{cert.date}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-3">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-purple transition-colors font-medium text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {cert.issuer}
                        <FaExternalLinkAlt className="inline-block h-3 w-3 ml-1 mb-0.5" />
                      </a>
                    ) : (
                      <span className="text-text-secondary font-medium text-sm">
                        {cert.issuer}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-sm text-text-tertiary line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Certifications Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Link href="/certifications">
            <Button variant="primary" size="lg" className="group">
              View All Certifications
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Modal for clean certificate view without side black bars */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative inline-flex flex-col items-center justify-center max-h-[85vh] max-w-[92vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[55vw] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex items-center justify-center size-9 sm:size-10 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-2xl hover:scale-110 transition-transform font-bold text-base border border-black/10 dark:border-white/20 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Certificate Image Frame - Zero side black bars, pure image display */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-black/10 dark:border-white/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain block rounded-2xl"
                />
              </div>

              {/* Floating Verify Credential Button */}
              {selectedCert.credentialUrl && (
                <div className="mt-3 flex items-center justify-center">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-xl border border-black/10 dark:border-white/15 text-xs font-semibold hover:scale-105 transition-all shadow-lg shadow-black/10"
                  >
                    Verify Credential <FaExternalLinkAlt className="h-2.5 w-2.5" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
