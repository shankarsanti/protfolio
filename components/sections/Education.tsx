"use client";

import {
  Container,
  Section,
  SectionHeader,
  EducationCard,
} from "@/components/ui";
import { EducationDto } from "@/lib/types";
import { motion } from "framer-motion";

export function Education({ educations }: { educations?: EducationDto[] }) {
  return (
    <Section id="education" background="secondary">
      <Container>
        <SectionHeader
          subtitle="Education"
          title="Academic Background"
          description="My educational journey and academic achievements."
        />

        <div className="relative mt-12 md:mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border-light hidden md:block" />

          <div className="space-y-8">
            {educations?.map((edu, index) => (
              <motion.div
                key={edu._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-accent-purple border-4 border-bg-secondary hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <EducationCard education={edu} className="md:ml-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
