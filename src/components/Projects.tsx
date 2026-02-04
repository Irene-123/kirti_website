import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

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
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// projects</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, distributed systems, and open-source contributions.
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
                className="group relative bg-card/50 glass rounded-2xl p-6 shadow-card hover:shadow-glow/10 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-secondary" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {project.type === "oss" ? "Open Source" : project.type === "contribution" ? "Contribution" : "Personal"}
                    </span>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-muted/50 text-xs font-mono text-muted-foreground"
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
            <h3 className="text-xl font-bold text-center mb-8 text-muted-foreground">
              More Projects
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
                  className="group flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.tech.slice(0, 3).join(" • ")}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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
