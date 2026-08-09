import { ReactNode } from "react";

const ExternalLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary ${className}`}
  >
    {children}
  </a>
);

export default ExternalLink;
