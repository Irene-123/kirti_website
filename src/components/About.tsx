import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const highlights = [
    { icon: Code2, label: "3+ Years", description: "Production Experience" },
    { icon: Rocket, label: "RAG & LLMs", description: "Core Specialty" },
    { icon: Users, label: "Open Source", description: "Active Contributor" },
    { icon: Award, label: "SDE II", description: "Current Level" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// about me</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Building the Future with{" "}
              <span className="text-gradient">AI & Code</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 glass rounded-2xl p-8 md:p-12 shadow-card mb-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Software Engineer II with <span className="text-foreground font-medium">3+ years of experience</span> building 
              AI-driven systems, scalable backend services, and cloud-native applications at scale.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Specialized in <span className="text-primary font-medium">Retrieval-Augmented Generation (RAG)</span>, 
              <span className="text-secondary font-medium"> LLM integrations</span>, and distributed system optimization. 
              Proficient in <span className="text-foreground font-medium">Python, Rust, and Go</span> for building high-performance systems.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Active open-source contributor with experience at <span className="text-foreground font-medium">RustDesk</span> and 
              <span className="text-foreground font-medium"> ChatGPT Desktop (40k+ stars)</span>. Currently leading AI initiatives 
              at <span className="text-foreground font-medium">Quantum Corporation</span>.
            </p>
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
                className="bg-muted/30 glass rounded-xl p-6 text-center hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xl font-bold text-foreground mb-1">{item.label}</p>
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