import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Irene-123", 
      label: "GitHub",
      handle: "@Irene-123",
      description: "Check out my open-source contributions"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/kirtidineshpurohit", 
      label: "LinkedIn",
      handle: "kirtidineshpurohit",
      description: "Let's connect professionally"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/DeveloperKirti", 
      label: "Twitter",
      handle: "@DeveloperKirti",
      description: "Follow my tech journey"
    },
    { 
      icon: Mail, 
      href: "mailto:kirtipurohit050@gmail.com", 
      label: "Email",
      handle: "kirtipurohit050@gmail.com",
      description: "Reach out directly"
    },
  ];

  const otherLinks = [
    { label: "Medium", href: "https://medium.com/@kirtipurohit025" },
    { label: "LeetCode", href: "https://leetcode.com/kirtipurohit025" },
    { label: "CodeChef", href: "https://codechef.com/users/kirti025" },
    { label: "Stack Overflow", href: "https://stackoverflow.com/users/12531409/kirti-purohit" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// let's connect</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just chatting about AI and tech.
            </p>
          </motion.div>

          {/* Main Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-card/50 glass shadow-card hover:shadow-glow/10 hover:border-primary/20 border border-transparent transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-mono text-muted-foreground">{link.handle}</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Other Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Also find me on</p>
            <div className="flex flex-wrap justify-center gap-4">
              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
