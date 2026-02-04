import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, GitBranch, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "3+ Years", description: "Production Systems" },
    { icon: Cpu, label: "RAG & LLMs", description: "Core Specialty" },
    { icon: GitBranch, label: "Open Source", description: "Active Contributor" },
    { icon: Zap, label: "SDE II", description: "Current Level" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative cyber-grid">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<"}<span className="text-secondary">About</span>{" />"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Building the Future with{" "}
              <span className="text-gradient">AI & Code</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-border bg-card/50 p-8 md:p-12 mb-12 relative overflow-hidden"
          >
            {/* Terminal header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-muted/50 flex items-center px-4 gap-2 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-secondary/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-4 text-xs font-mono text-muted-foreground">about.md</span>
            </div>

            <div className="pt-6 font-mono text-sm md:text-base space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <span className="text-primary">##</span> Software Engineer II with{" "}
                <span className="text-foreground">3+ years of experience</span> building 
                AI-driven systems, scalable backend services, and cloud-native applications at scale.
              </p>
              <p className="leading-relaxed">
                <span className="text-primary">##</span> Specialized in{" "}
                <span className="text-secondary">Retrieval-Augmented Generation (RAG)</span>,{" "}
                <span className="text-accent">LLM integrations</span>, and distributed system optimization. 
                Proficient in <span className="text-foreground">Python, Rust, and Go</span> for building high-performance systems.
              </p>
              <p className="leading-relaxed">
                <span className="text-primary">##</span> Active open-source contributor with experience at{" "}
                <span className="text-foreground">RustDesk</span> and{" "}
                <span className="text-foreground">ChatGPT Desktop (40k+ stars)</span>. Currently leading AI initiatives at{" "}
                <span className="text-foreground">Quantum Corporation</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="terminal-border bg-card/30 p-6 text-center hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 terminal-border bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-bold text-foreground font-mono mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;