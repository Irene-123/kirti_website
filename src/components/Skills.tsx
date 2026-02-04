import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Rust", "Go", "JavaScript", "TypeScript", "C++", "Java", "Bash"],
  },
  {
    title: "AI & ML",
    skills: ["LangChain", "RAG", "LLMs", "Sentence Transformers", "TensorFlow", "Vector DBs", "Milvus", "DeepSeek", "Azure AI"],
  },
  {
    title: "Backend",
    skills: ["Django", "Flask", "FastAPI", "Node.js", "Express", "Kafka", "REST APIs", "gRPC", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "DynamoDB", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "N8N", "Terraform"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Milvus", "Elasticsearch"],
  },
  {
    title: "Systems & Tools",
    skills: ["Distributed Systems", "System Design", "Blockchain", "Tauri", "Git", "Linux", "MCP Servers"],
  },
];

const highlights = [
  { value: "3+", label: "Years Experience", sublabel: "Building Production Systems" },
  { value: "40%", label: "Review Time Saved", sublabel: "AI-Powered PR System" },
  { value: "500K+", label: "Units Processed", sublabel: "Scalable APIs" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/10">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<"}<span className="text-secondary">Skills</span>{" />"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Technical <span className="text-gradient">Stack</span>
            </h2>
          </motion.div>

          {/* Impact Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative terminal-border bg-card/30 p-8 text-center overflow-hidden group"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-mono">{highlight.value}</p>
                <p className="text-foreground font-medium mb-1">{highlight.label}</p>
                <p className="text-sm text-muted-foreground">{highlight.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="terminal-border bg-card/20 p-6 hover:bg-card/40 transition-colors group"
              >
                <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                  <span className="text-muted-foreground">$</span> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-primary/20 bg-primary/5 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;