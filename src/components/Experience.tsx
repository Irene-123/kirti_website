import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

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
    role: "Software Developer",
    period: "Dec 2024 - Present",
    location: "Bangalore",
    current: true,
    highlights: [
      "Implemented Code RAG pipeline with custom fine-tuned embeddings using sentence transformers for Git Repo Vector Indexing System",
      "Deployed MCP server integrations with GitLab + N8N, enabling automated workflows for log summarization and PR analysis",
      "Developed AI-powered PR review system using RAG + DeepSeek LLM, reducing manual review effort by 40%",
      "Leading strategic technology investment decisions for developer productivity",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineer",
    period: "July 2023 - Jan 2025",
    location: "Bangalore",
    highlights: [
      "Built automated incident ticketing tool improving SLA from 60 to 85",
      "Optimized APIs with DynamoDB, multithreading & async to handle 500,000+ units in 10 minutes",
      "Designed intelligent incident creation system with auto-categorization, cutting triage time by 70%",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineering Intern",
    period: "Jan 2023 - July 2023",
    location: "Bangalore",
    highlights: [
      "Acquired experience with enterprise-scale workflows and stakeholder collaboration",
      "Optimized API performance using multithreading, achieving 60% improvement in response times",
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
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