"use client";

import React from "react";
import Image from "next/image";
import { ProjectDto } from "@/lib/types";
import { Card } from "./Card";
import { ExternalLink, Info, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: ProjectDto;
  onSelect?: (project: ProjectDto) => void;
  className?: string;
}

export function ProjectCard({ project, onSelect, className }: ProjectCardProps) {
  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case "ai-ml":
        return { label: "AI & ML", color: "bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30" };
      case "fullstack":
        return { label: "Full Stack", color: "bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/30" };
      case "system":
        return { label: "System", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30" };
      default:
        return { label: "Web App", color: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-300 border-zinc-500/30" };
    }
  };

  const badge = getCategoryBadge(project.category);

  return (
    <Card
      variant="elevated"
      hover
      className={`group h-full flex flex-col overflow-hidden border border-border/70 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/5 ${className || ""}`}
    >
      {/* Project Image Box */}
      <div
        className="relative w-full h-52 overflow-hidden bg-muted cursor-pointer"
        onClick={() => onSelect?.(project)}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
            <Sparkles className="size-8 opacity-40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border backdrop-blur-md ${badge.color}`}>
            {badge.label}
          </span>
        </div>

        {/* Quick View Button on Image Hover */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(project);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 hover:bg-black text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-md transition-transform hover:scale-105"
          >
            <Info className="size-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          onClick={() => onSelect?.(project)}
          className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-blue transition-colors cursor-pointer line-clamp-1"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-muted border border-border text-foreground/80 rounded-md text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-muted/60 border border-border/60 text-muted-foreground rounded-md text-[11px] font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-accent-blue hover:opacity-90 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <ExternalLink className="size-3.5" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground text-xs font-medium transition-colors"
              title="View GitHub Repository"
              aria-label="View Code"
            >
              <FaGithub className="size-4" />
            </a>
          )}
          <button
            onClick={() => onSelect?.(project)}
            className="inline-flex items-center justify-center p-2 rounded-lg border border-border bg-card hover:bg-muted text-foreground text-xs font-medium transition-colors"
            title="View Full Details"
            aria-label="View Details"
          >
            <Info className="size-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}
