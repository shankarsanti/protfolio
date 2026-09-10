"use client";

import React from "react";
import Link from "next/link";
import { ProjectDto } from "@/lib/types";
import { Section, Container, SectionHeader, CarouselStacked, Slide } from "@/components/ui";
import { Button } from "@/components/ui/buttons";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectsProps {
  projects: ProjectDto[];
}

export function Projects({ projects }: ProjectsProps) {
  // Convert all projects to 3D Carousel slides
  const carouselSlides: Slide[] = projects.map((p) => ({
    image: p.image || "/placeholder.webp",
    title: p.title,
    description: p.description,
    badge:
      p.category === "ai-ml"
        ? "AI & ML"
        : p.category === "fullstack"
        ? "Full Stack"
        : "System",
    url: p.url,
    github: p.github,
    technologies: p.technologies,
  }));

  return (
    <Section id="projects" background="secondary">
      <Container size="2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            subtitle="Projects"
            title="My Projects"
            description="A collection of my recent work and personal projects showcasing full-stack development skills"
          />
        </motion.div>

        {/* 3D Stacked Carousel Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 mb-8"
        >
          <CarouselStacked slides={carouselSlides} />
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Link href="/projects">
            <Button variant="primary" size="lg" className="group shadow-lg shadow-accent-blue/20">
              View All {projects.length} Projects Archive
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
