import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 bg-card/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">$</span>
            <span>crafted_by</span>
            <span className="text-foreground">Kirti Purohit</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Irene-123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 terminal-border bg-card/50 hover:bg-primary/10 transition-colors"
            >
              <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/kirtidineshpurohit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 terminal-border bg-card/50 hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://twitter.com/DeveloperKirti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 terminal-border bg-card/50 hover:bg-primary/10 transition-colors"
            >
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <p className="text-xs font-mono text-muted-foreground">
            <span className="text-primary/60">{"/*"}</span> © {currentYear} <span className="text-primary/60">{"*/"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;