import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GitBranch } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
  type: "work" | "oss";
}

const experiences: ExperienceItem[] = [
  {
    company: "Quantum Corporation",
    role: "Software Developer (SDE II)",
    period: "Dec 2024 - Present",
    location: "Bangalore",
    current: true,
    type: "work",
    highlights: [
      "Architected Code RAG pipeline with custom fine-tuned sentence transformers for Git Repo Vector Indexing",
      "Built AI-powered PR review system using RAG + DeepSeek LLM—reduced manual review effort by 40%",
      "Deployed MCP server integrations with GitLab + N8N for automated workflows",
      "Leading technical research on emerging AI trends, driving strategic technology decisions",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer",
    period: "July 2023 - Jan 2025",
    location: "Bangalore",
    type: "work",
    highlights: [
      "Designed automated incident ticketing system improving SLA from 60 to 85",
      "Optimized backend APIs—achieved scalability to process 500,000+ units in under 10 minutes",
      "Implemented intelligent incident routing with Kafka-based auto-categorization",
      "Mentored junior engineers on distributed systems best practices",
    ],
  },
  {
    company: "RustDesk",
    role: "Open Source Contributor (Octernship)",
    period: "2023",
    location: "Remote",
    type: "oss",
    highlights: [
      "Contributed to open-source remote desktop application written in Rust",
      "Implemented features and bug fixes for cross-platform desktop client",
      "Collaborated with global maintainers on system-level programming",
    ],
  },
  {
    company: "ChatGPT Desktop (lencx/ChatGPT)",
    role: "Open Source Contributor",
    period: "Nov 2022 - Jan 2023",
    location: "Remote",
    type: "oss",
    highlights: [
      "Core contributor to ChatGPT desktop app (Rust + Tauri) with 40k+ GitHub stars",
      "Integrated DALL-E 2 model for image generation capabilities",
      "Implemented system integration features across Windows, macOS, and Linux",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineering Intern",
    period: "Jan 2023 - July 2023",
    location: "Bangalore",
    type: "work",
    highlights: [
      "Built foundation in enterprise-scale workflows and cross-team engineering",
      "Optimized API performance—achieved 60% improvement in response times",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/10">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<"}<span className="text-secondary">Experience</span>{" />"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/30" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-4 top-0 w-8 h-8 flex items-center justify-center ${
                  exp.current ? "animate-pulse-glow" : ""
                }`}>
                  <div className={`w-8 h-8 terminal-border ${
                    exp.current ? "bg-primary/20" : "bg-card"
                  } flex items-center justify-center`}>
                    {exp.type === "oss" ? (
                      <GitBranch className="w-4 h-4 text-primary" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </div>

                <div className={`terminal-border bg-card/30 p-6 hover:bg-card/50 transition-all duration-300 ${
                  exp.current ? "border-primary/40" : ""
                }`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary border border-primary/30">
                        ACTIVE
                      </span>
                    )}
                    {exp.type === "oss" && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-secondary/20 text-secondary border border-secondary/30">
                        OPEN SOURCE
                      </span>
                    )}
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period} • {exp.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1 font-mono">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm mb-4">@ {exp.company}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;