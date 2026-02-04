import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Quantum Corporation",
    role: "Software Developer (SDE II)",
    period: "Dec 2024 - Present",
    location: "Bangalore",
    current: true,
    highlights: [
      "Architected Code RAG pipeline with custom fine-tuned sentence transformers for Git Repo Vector Indexing, correlating revision history with code changes in vectorDB",
      "Built AI-powered PR review system using RAG + DeepSeek LLM, automating repository indexing and commit analysis—reduced manual review effort by 40%",
      "Deployed MCP server integrations with GitLab + N8N for automated workflows including log summarization, PR analysis, and developer productivity tools",
      "Leading technical research on emerging AI trends, driving strategic technology decisions that shifted focus toward high-value innovation projects",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer",
    period: "July 2023 - Jan 2025",
    location: "Bangalore",
    highlights: [
      "Designed and built automated incident ticketing system improving SLA from 60 to 85, enhancing customer experience significantly",
      "Optimized backend APIs using DynamoDB, multithreading & async patterns—achieved scalability to process 500,000+ units in under 10 minutes",
      "Implemented intelligent incident routing with Kafka-based auto-categorization, cutting triage time by 70%",
      "Mentored junior engineers on distributed systems best practices and code review standards",
    ],
  },
  {
    company: "RustDesk",
    role: "Open Source Contributor (Octernship)",
    period: "2023",
    location: "Remote",
    highlights: [
      "Contributed to RustDesk, an open-source remote desktop application written in Rust",
      "Implemented features and bug fixes for the cross-platform desktop client",
      "Collaborated with global maintainers on system-level programming and performance optimization",
    ],
  },
  {
    company: "ChatGPT Desktop (lencx/ChatGPT)",
    role: "Open Source Contributor",
    period: "Nov 2022 - Jan 2023",
    location: "Remote",
    highlights: [
      "Core contributor to popular ChatGPT desktop app built with Rust + Tauri (40k+ GitHub stars)",
      "Integrated DALL-E 2 model for image generation capabilities within the application",
      "Implemented system integration features improving user experience across Windows, macOS, and Linux",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineering Intern",
    period: "Jan 2023 - July 2023",
    location: "Bangalore",
    highlights: [
      "Built foundation in enterprise-scale workflows, stakeholder collaboration, and cross-team engineering",
      "Optimized API performance using multithreading and multiprocessing—achieved 60% improvement in response times",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// experience</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-auto ${index % 2 === 0 ? "md:right-0 md:-mr-3" : "md:left-0 md:-ml-3"} -ml-3 top-0 w-6 h-6 rounded-full ${exp.current ? "bg-gradient-primary shadow-glow" : "bg-muted border-2 border-border"} flex items-center justify-center`}>
                  {exp.current && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                </div>

                <div className={`bg-card/50 glass rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow/5 transition-shadow ${exp.current ? "border border-primary/20" : ""}`}>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      Current
                    </span>
                  )}
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                        {highlight}
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