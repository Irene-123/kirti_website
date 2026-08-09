import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Mermaid from "@/components/Mermaid";
import ThemeToggle from "@/components/ThemeToggle";
import ExternalLink from "@/components/ExternalLink";
import { getProject } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Kirti Purohit`;
    }
    return () => {
      document.title = "Kirti Purohit — Software Engineer";
    };
  }, [project]);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-prose px-5 py-14 sm:py-20">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-primary">
            ← Kirti Purohit
          </Link>
          <ThemeToggle />
        </div>

        <article>
          <header className="mb-10">
            <p className="font-mono text-xs text-muted-foreground">{project.year}</p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">{project.title}</h1>
            <p className="mt-4 leading-relaxed text-foreground/90">{project.summary}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{project.stack.join(", ")}</p>
            {(project.repo || project.demo) && (
              <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs">
                {project.repo && <ExternalLink href={project.repo}>Repo</ExternalLink>}
                {project.demo && <ExternalLink href={project.demo}>Live demo</ExternalLink>}
              </p>
            )}
          </header>

          <div className="space-y-5">
            {project.detail.map((block, index) => {
              if (block.type === "h") {
                return (
                  <h2 key={index} className="pt-4 text-lg font-semibold">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p") {
                return (
                  <p key={index} className="leading-relaxed text-foreground/85">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-5 leading-relaxed text-foreground/85">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <Mermaid key={index} chart={block.chart} caption={block.caption} />;
            })}
          </div>
        </article>

        <footer className="mt-16 border-t border-border pt-6 font-mono text-xs">
          <Link to="/#projects" className="text-primary underline underline-offset-4 decoration-primary/30">
            All projects
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetail;
