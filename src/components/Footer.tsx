import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Kirti Purohit</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Irene-123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/kirtidineshpurohit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://twitter.com/DeveloperKirti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;