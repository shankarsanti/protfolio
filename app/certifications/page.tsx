"use client";

import * as React from "react";
import { certifications } from "@/lib/data";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/buttons";
import { Card } from "@/components/ui/cards";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ExternalLink, Award, ArrowLeft, Calendar } from "lucide-react";

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredCertifications, setFilteredCertifications] = React.useState(certifications);
  const [selectedCert, setSelectedCert] = React.useState<typeof certifications[0] | null>(null);

  React.useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCertifications(certifications);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = certifications.filter(
        (cert) =>
          cert.title.toLowerCase().includes(query) ||
          cert.issuer.toLowerCase().includes(query) ||
          cert.description?.toLowerCase().includes(query)
      );
      setFilteredCertifications(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background py-16">
      <Container>
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/#certifications">
            <Button variant="outline" size="sm" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certifications and courses that validate my skills and expertise in
            software development
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-md mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer"
            >
              <Card
                variant="elevated"
                hover
                className="h-full flex flex-col"
              >
                {/* Certificate Image */}
                {cert.image && (
                  <div className="relative w-full aspect-[4/3] rounded-t-lg overflow-hidden bg-muted group">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Icon and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    {cert.date && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-primary font-medium mb-3">{cert.issuer}</p>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {cert.description}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto flex gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="flex-1 group"
                    >
                      View Certificate
                      <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                    {cert.credentialUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            cert.credentialUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        className="flex-1 group"
                      >
                        Verify
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              No certifications found matching "{searchQuery}"
            </p>
          </motion.div>
        )}

        {/* Certification Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Showing {filteredCertifications.length} of {certifications.length}{" "}
          certifications
        </motion.div>
      </Container>

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

            {/* Certificate Info Below Image */}
            <div className="mt-4 bg-card/90 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
              <p className="text-primary font-medium mb-2">
                Issued by {selectedCert.issuer}
              </p>
              {selectedCert.date && (
                <p className="text-muted-foreground mb-3">
                  Date: {selectedCert.date}
                </p>
              )}
              {selectedCert.description && (
                <p className="text-muted-foreground">{selectedCert.description}</p>
              )}
              {selectedCert.credentialUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    window.open(
                      selectedCert.credentialUrl,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="mt-4"
                >
                  Verify Credential
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
