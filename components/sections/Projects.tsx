"use client";

import * as React from "react";
import Link from "next/link";
import { ProjectDto } from "@/lib/types";
import { Section, Container, SectionHeader } from "@/components/ui";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import { Button } from "@/components/ui/buttons";
import { motion } from "framer-motion";
import {
  Pill,
  Milk,
  Gamepad2,
  GraduationCap,
  Bus,
  FileText,
  Plane,
  Briefcase,
  Database,
  ArrowRight,
} from "lucide-react";

interface ProjectsProps {
  projects: ProjectDto[];
}

// Map project to appropriate icon based on title/technologies
const getProjectIcon = (project: ProjectDto) => {
  const title = project.title.toLowerCase();
  const techs = project.technologies.join(" ").toLowerCase();

  // Domain-specific icons (prioritize over technology)
  if (title.includes("pharmacy")) return <Pill size={24} />;
  if (title.includes("dairy")) return <Milk size={24} />;
  if (title.includes("tic-tac-toe") || title.includes("game")) return <Gamepad2 size={24} />;
  if (title.includes("student") || title.includes("education")) return <GraduationCap size={24} />;
  if (title.includes("bus")) return <Bus size={24} />;
  if (title.includes("resume")) return <FileText size={24} />;
  if (title.includes("travel")) return <Plane size={24} />;
  if (title.includes("internship")) return <Briefcase size={24} />;
  
  // Fallback to technology-based icons
  if (techs.includes("database") || techs.includes("mysql") || techs.includes("mongodb")) {
    return <Database size={24} />;
  }
  
  // Default fallback
  return <Database size={24} />;
};

export function Projects({ projects }: ProjectsProps) {
  // Transform ProjectDto to CardItem
  const cardItems: CardItem[] = projects.map((project, index) => ({
    id: index,
    title: project.title,
    description: project.description,
    imgSrc: project.image || "/placeholder.webp",
    icon: getProjectIcon(project),
    linkHref: project.url || project.github || "#",
  }));

  return (
    <Section id="projects" background="secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            subtitle="Projects"
            title=""
            description="Here are some of my best projects showcasing my skills in full-stack development."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <ExpandingCards items={cardItems} defaultActiveIndex={0} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Link href="/projects">
            <Button variant="primary" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
