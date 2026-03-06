"use client";

import {
  Container,
  Section,
  SectionHeader,
  CertificateCard,
} from "@/components/ui";
import { CertificateDto } from "@/lib/types";
import { motion } from "framer-motion";

export function Certificates({
  certificates,
}: {
  certificates: CertificateDto[];
}) {
  return (
    <Section id="certificates" background="secondary">
      <Container>
        <SectionHeader
          subtitle="Certifications"
          title="Professional Certifications"
          description="Continuous learning and skill development through recognized certifications"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate._id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificateCard certificate={certificate} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
