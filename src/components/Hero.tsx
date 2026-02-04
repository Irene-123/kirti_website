import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer II";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Irene-123", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kirtidineshpurohit", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/DeveloperKirti", label: "Twitter" },
    { icon: Mail, href: "mailto:kirtipurohit050@gmail.com", label: "Email" },
  ];

  const codeSnippet = `const developer = {
  name: "Kirti Purohit",
  role: "SDE II",
  stack: ["Rust", "Go", "Python"],
  focus: ["RAG", "LLMs", "Systems"],
  status: "Open to opportunities"
};`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ y: ["0vh", "100vh"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating code particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20 font-mono text-xs"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: -20,
              opacity: 0 
            }}
            animate={{ 
              y: "100vh",
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {["0", "1", "</>", "{ }", "=>", "fn", "async", "impl"][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Main content */}
          <div className="text-left">
            {/* Terminal header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded terminal-border bg-card/50 mb-6 font-mono text-sm"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">~/kirti</span>
              <span className="text-primary">$</span>
              <span className="text-secondary">whoami</span>
              <span className="w-2 h-4 bg-primary animate-pulse" />
            </motion.div>

            {/* Name with glitch effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter"
            >
              <span className="text-foreground glitch">Kirti</span>{" "}
              <span className="text-gradient">Purohit</span>
            </motion.h1>

            {/* Typing effect title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xl md:text-2xl text-primary mb-6 h-8"
            >
              <span className="text-muted-foreground">&gt; </span>
              {displayText}
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed font-mono text-sm"
            >
              <span className="text-primary">{"// "}</span>
              3+ years building AI-driven systems, RAG architectures,{" "}
              <span className="text-secondary">LLM integrations</span>, and{" "}
              <span className="text-accent">distributed systems</span> in production.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 terminal-border bg-card/50 hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono font-medium hover:shadow-glow transition-all duration-300 animate-pulse-glow"
              >
                ./view_projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 terminal-border bg-card/50 hover:bg-primary/10 font-mono transition-all duration-300"
              >
                ./contact_me
              </a>
            </motion.div>
          </div>

          {/* Right side - Code block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="terminal-border bg-card/80 p-6 font-mono text-sm relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 text-muted-foreground text-xs">developer.ts</span>
              </div>
              
              {/* Code content */}
              <pre className="text-muted-foreground">
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="leading-7"
                    >
                      <span className="text-muted-foreground/50 mr-4">{String(i + 1).padStart(2, '0')}</span>
                      {line
                        .replace(/const|let|var/g, '<span class="text-accent">$&</span>')
                        .replace(/"[^"]*"/g, '<span class="text-secondary">$&</span>')
                        .replace(/\b(name|role|stack|focus|status)\b/g, '<span class="text-primary">$&</span>')
                        .split(/<span|<\/span>/).map((part, j) => {
                          if (part.startsWith(' class="text-accent">')) return <span key={j} className="text-accent">{part.replace(' class="text-accent">', '')}</span>;
                          if (part.startsWith(' class="text-secondary">')) return <span key={j} className="text-secondary">{part.replace(' class="text-secondary">', '')}</span>;
                          if (part.startsWith(' class="text-primary">')) return <span key={j} className="text-primary">{part.replace(' class="text-primary">', '')}</span>;
                          return part;
                        })}
                    </motion.div>
                  ))}
                </code>
              </pre>

              {/* Scan effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-muted-foreground">scroll</span>
            <ArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;