"use client";

import { CertificateDto } from "@/lib/types";
import { Badge } from "@/components/ui";
import { Card } from "./Card";
import * as FaIcons from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export function CertificateCard({
  certificate,
}: {
  certificate: CertificateDto;
}) {
  const IconComponent = certificate.iconName
    ? (FaIcons as Record<string, React.ElementType>)[certificate.iconName]
    : FaIcons.FaCertificate;

  return (
    <Card variant="elevated" className="h-full">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
            {IconComponent && <IconComponent className="h-6 w-6" />}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-text-primary">
              {certificate.title}
            </h3>
            {certificate.credentialUrl && (
              <Link
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-accent-blue hover:text-accent-purple transition-colors"
                aria-label="View credential"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
              </Link>
            )}
          </div>

          <p className="text-text-secondary font-medium mb-1">
            {certificate.issuer}
          </p>

          <Badge variant="secondary" className="mb-3">
            {certificate.date}
          </Badge>

          <p className="text-text-tertiary text-sm leading-relaxed">
            {certificate.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
