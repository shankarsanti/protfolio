"use client";

import { Container, Section, SectionHeader, Card } from "@/components/ui";
import { CertificationDto } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
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

        {/* Modal for full certificate view */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-3xl font-bold z-10"
                aria-label="Close"
              >
                ×
              </button>

              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
