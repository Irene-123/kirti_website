import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Calendar, Terminal } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Irene-123", 
      label: "GitHub",
      handle: "@Irene-123",
      description: "// open-source contributions"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/kirtidineshpurohit", 
      label: "LinkedIn",
      handle: "kirtidineshpurohit",
      description: "// professional network"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/DeveloperKirti", 
      label: "Twitter",
      handle: "@DeveloperKirti",
      description: "// tech updates"
    },
    { 
      icon: Mail, 
      href: "mailto:kirtipurohit050@gmail.com", 
      label: "Email",
      handle: "kirtipurohit050@gmail.com",
      description: "// direct contact"
    },
  ];

  const otherLinks = [
    { label: "Medium", href: "https://medium.com/@kirtipurohit025" },
    { label: "LeetCode", href: "https://leetcode.com/kirtipurohit025" },
    { label: "CodeChef", href: "https://codechef.com/users/kirti025" },
    { label: "Stack Overflow", href: "https://stackoverflow.com/users/12531409/kirti-purohit" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 cyber-grid">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              {"<"}<span className="text-secondary">Contact</span>{" />"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto">
              // Open to SDE II opportunities and exciting projects
            </p>
          </motion.div>

          {/* Calendly CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <a
              href="https://calendly.com/kirtipurohit050"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center justify-between gap-6 p-6 terminal-border bg-card/30 hover:bg-card/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 terminal-border bg-primary/10">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-foreground font-mono group-hover:text-primary transition-colors">
                    $ schedule_meeting
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Book a 30-min call to discuss opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium hover:shadow-glow transition-all">
                <Calendar className="w-4 h-4" />
                <span>EXECUTE</span>
              </div>
            </a>
          </motion.div>

          {/* Main Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group flex items-start gap-4 p-5 terminal-border bg-card/20 hover:bg-card/40 transition-all duration-300"
              >
                <div className="p-2 terminal-border bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </h3>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs font-mono text-secondary">{link.handle}</p>
                  <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Other Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-mono text-muted-foreground mb-4">// also_available_on</p>
            <div className="flex flex-wrap justify-center gap-3">
              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 terminal-border bg-card/20 hover:bg-primary/10 text-xs font-mono text-muted-foreground hover:text-primary transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
