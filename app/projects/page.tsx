"use client";

import * as React from "react";
import { projects } from "@/lib/data";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/buttons";
import { Card } from "@/components/ui/cards";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Code,
  ArrowLeft,
  Layers,
  Sparkles,
  Layout,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "ai-ml" | "fullstack" | "system";

interface CategoryTab {
  id: CategoryFilter;
  label: string;
  icon: React.ElementType;
}

const categoryTabs: CategoryTab[] = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "ai-ml", label: "AI & Data Science", icon: Sparkles },
  { id: "fullstack", label: "Full Stack Apps", icon: Layout },
  { id: "system", label: "Systems & Tools", icon: Wrench },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Compute counts for each category
  const categoryCounts = React.useMemo(() => {
    return {
      all: projects.length,
      "ai-ml": projects.filter((p) => p.category === "ai-ml").length,
      fullstack: projects.filter((p) => p.category === "fullstack").length,
      system: projects.filter((p) => p.category === "system").length,
    };
  }, []);

  // Filter projects by category and search query
  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
          <Link href="/#projects">
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
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and personal projects showcasing
            full-stack development skills
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 max-w-md mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all shadow-sm text-sm"
            />
          </div>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            const count = categoryCounts[tab.id];

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm",
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md shadow-slate-900/10 dark:shadow-white/5 ring-1 ring-slate-900 dark:ring-white"
                    : "bg-card/70 hover:bg-card text-muted-foreground hover:text-foreground border border-border/80 hover:border-border"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.5 rounded-full text-[11px] font-semibold leading-none",
                    isSelected
                      ? "bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: 0.05 * (index % 6) }}
              >
                <Card variant="elevated" hover className="h-full flex flex-col overflow-hidden">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {/* Category Badge on Top-Right */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase rounded-full shadow">
                          {project.category === "ai-ml"
                            ? "AI & ML"
                            : project.category === "fullstack"
                            ? "Full Stack"
                            : "System"}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex gap-3 pt-2">
                      {project.url && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() =>
                            window.open(project.url, "_blank", "noopener,noreferrer")
                          }
                          className="flex-1 group shadow-sm"
                        >
                          Live Demo
                          <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(
                              project.github,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                          className="flex-1 group"
                        >
                          <Code className="mr-2 h-3 w-3" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              No projects found {searchQuery ? `matching "${searchQuery}"` : "in this category"}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-sm text-accent-blue hover:underline font-medium"
            >
              Reset filters
            </button>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-muted-foreground text-sm"
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.div>
      </Container>
    </div>
  );
}
