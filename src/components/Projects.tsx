import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  featured?: boolean;
  type: "personal" | "contribution" | "oss";
}

const projects: Project[] = [
  {
    title: "My MCP Server: Talk to Your PC",
    description: "Conversational agent using LangChain, Azure AI, and speech recognition. Responds to user input about PC settings, diagnoses errors, and executes commands.",
    tech: ["Python", "AI", "MCP Server", "LangChain", "Azure AI"],
    github: "https://github.com/Irene-123",
    featured: true,
    type: "oss",
  },
  {
    title: "AI-Powered PR Review System",
    description: "RAG + DeepSeek LLM system for automated repository indexing and commit analysis. Reduced manual review effort by 40%.",
    tech: ["Python", "LangChain", "Milvus", "RAG", "DeepSeek"],
    featured: true,
    type: "personal",
  },
  {
    title: "ChatGPT Desktop",
    description: "Contributed to open-source ChatGPT desktop application. Integrated DALL-E 2 for image generation capabilities.",
    tech: ["Rust", "Tauri", "OpenAI", "DALL-E 2"],
    github: "https://github.com/Irene-123",
    featured: true,
    type: "contribution",
  },
  {
    title: "Automated Trading Simulation",
    description: "Trading strategy simulation system with real-time market analysis and automated decision-making.",
    tech: ["Python", "Quantitative Analysis", "Trading"],
    github: "https://github.com/Irene-123/Automated-Trading-simulation",
    type: "personal",
  },
  {
    title: "Ciphers in Rust",
    description: "Implementation of various cryptographic ciphers in Rust for learning and security research.",
    tech: ["Rust", "Cryptography", "Security"],
    github: "https://github.com/Irene-123/Ciphers-in-Rust",
    type: "personal",
  },
  {
    title: "Decentralized Twitter",
    description: "Blockchain-based social media platform with decentralized data storage and user-owned content.",
    tech: ["Blockchain", "Web3", "Solidity"],
    github: "https://github.com/Irene-123/decentralized-twitter",
    type: "personal",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 cyber-grid">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<"}<span className="text-secondary">Projects</span>{" />"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
              // A selection of projects showcasing AI, distributed systems, and open-source contributions
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group terminal-border bg-card/30 p-6 hover:bg-card/50 transition-all duration-300 hover:shadow-glow relative overflow-hidden"
              >
                {/* Scan line effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider px-2 py-0.5 border border-muted-foreground/30">
                      {project.type === "oss" ? "OSS" : project.type === "contribution" ? "CONTRIB" : "PERSONAL"}
                    </span>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-primary/10 transition-colors"
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-primary/20 bg-primary/5 text-xs font-mono text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-mono text-center mb-8 text-muted-foreground">
              <span className="text-primary">$</span> ls ./more_projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 terminal-border bg-card/20 hover:bg-card/40 transition-all duration-300"
                >
                  <Folder className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      {project.tech.slice(0, 3).join(" • ")}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
