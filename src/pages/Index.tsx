import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import ExternalLink from "@/components/ExternalLink";
import { projects } from "@/data/projects";

const RESUME_UPDATED = "August 2026";

const experience = [
  {
    role: "Software Engineer",
    org: "Quantum Corporation",
    period: "Dec 2024 to present",
    place: "Bengaluru",
    note: "StorNext, on the AI and storage engineering team. Distributed concurrency work and an internal Git indexing RAG.",
  },
  {
    role: "Software Engineer",
    org: "Hewlett Packard Enterprise",
    period: "Jul 2023 to Dec 2024",
    place: "Bengaluru",
    note: "SaaS customer platforms. Kafka pipelines, DynamoDB data models, Kubernetes and AWS infrastructure.",
  },
  {
    role: "Software Engineering Intern",
    org: "Hewlett Packard Enterprise",
    period: "Jan 2023 to Jul 2023",
    place: "Bengaluru",
    note: "Backend services on the same customer platform stack.",
  },
  {
    role: "Software Engineering Intern",
    org: "Dinosys Infotech",
    period: "May 2022 to Dec 2022",
    place: "Mumbai",
    note: "Forensics tooling deployed to cyber crime investigation units across 16+ Indian state government agencies.",
  },
];

const technical = [
  { label: "Languages", items: "Go, Python, Bash, C++11, Java, Rust" },
  {
    label: "Distributed systems",
    items: "Kafka, event-driven architecture, saga and outbox patterns, idempotency, concurrency",
  },
  { label: "AI", items: "LangGraph, agentic workflows, MCP, RAG, RAGAS evaluation, guardrails, fine-tuning" },
  { label: "Infrastructure", items: "Kubernetes, Docker, AWS, Prometheus, Grafana, RHEL" },
  { label: "Data", items: "PostgreSQL, DynamoDB, Redis, Neo4j" },
];

const SectionHeading = ({ id, children }: { id: string; children: string }) => (
  <h2 id={id} className="scroll-mt-24 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
    {children}
  </h2>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <div className="mx-auto w-full max-w-prose px-5 py-14 sm:py-20">
      <header className="mb-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <nav aria-label="Sections" className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            <a href="#now" className="hover:text-primary">now</a>
            <a href="#projects" className="hover:text-primary">projects</a>
            <a href="#open-source" className="hover:text-primary">open source</a>
            <a href="#experience" className="hover:text-primary">experience</a>
            <a href="#technical" className="hover:text-primary">technical</a>
          </nav>
          <ThemeToggle />
        </div>

        <h1 className="text-3xl font-semibold sm:text-4xl">Kirti Purohit</h1>
        <p className="mt-3 text-lg text-foreground/90">Software Engineer. Backend and distributed systems.</p>
        <p className="mt-1 text-sm text-muted-foreground">Bengaluru, India</p>

        <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
          <ExternalLink href="https://github.com/Irene-123">GitHub</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/kirtidineshpurohit">LinkedIn</ExternalLink>
          <ExternalLink href="mailto:kirtipurohit050@gmail.com">Email</ExternalLink>
          <a
            href="/resume.pdf"
            download
            className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
          >
            Resume
          </a>
          <span className="text-muted-foreground">PDF, updated {RESUME_UPDATED}</span>
        </p>
      </header>

      <main className="space-y-16">
        <Reveal>
          <section aria-labelledby="now">
            <SectionHeading id="now">Now</SectionHeading>
            <div className="mt-4 space-y-4 leading-relaxed">
              <p>
                I work at Quantum Corporation on StorNext, with the AI and storage engineering team. My work there is
                distributed concurrency and an internal Git indexing RAG that answers questions across our repositories.
              </p>
              <p>
                Before that I spent two years at HPE on SaaS customer platforms, mostly Kafka, DynamoDB, Kubernetes and
                AWS infrastructure. Most of what I learned there was about what breaks when a queue backs up at 3am.
              </p>
              <p>
                I am interested in systems where correctness under partial failure is the hard part. Sagas, outboxes,
                idempotent handlers, and the retrieval systems that have to admit when they do not know.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="projects">
            <SectionHeading id="projects">Projects</SectionHeading>
            <ul className="mt-6 space-y-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <article className="rounded-md border border-border p-5 transition-colors hover:border-primary/40">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="hover:text-primary hover:underline underline-offset-4"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">{project.stack.join(", ")}</p>
                    <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                      >
                        Read more
                      </Link>
                      {project.repo && <ExternalLink href={project.repo}>Repo</ExternalLink>}
                      {project.demo && <ExternalLink href={project.demo}>Live demo</ExternalLink>}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="open-source">
            <SectionHeading id="open-source">Open source</SectionHeading>
            <div className="mt-4 space-y-6">
              <article>
                <h3 className="text-base font-semibold">Talk-to-PC MCP Server, 2025</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  Published to PyPI and listed in Anthropic's MCP directory. It resolves Linux diagnostics and commands
                  through an LLM with guardrails. Three tools: run_diagnosis, get_pc_settings and list_safe_commands.
                  Any sudo or admin operation requires explicit user confirmation before it runs.
                </p>
                <p className="mt-2 font-mono text-xs">
                  <ExternalLink href="https://pypi.org/project/talk-to-pc-mcp/">PyPI</ExternalLink>
                </p>
              </article>
              <article>
                <h3 className="text-base font-semibold">ChatGPT Desktop (lencx/ChatGPT)</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  Added DALL-E 2 integration in Rust. The WebView routes between the ChatGPT and DALL-E origins via
                  Tauri commands, with the selected mode persisted in user preferences.
                </p>
                <p className="mt-2 font-mono text-xs">
                  <ExternalLink href="https://github.com/lencx/ChatGPT">Repo</ExternalLink>
                </p>
              </article>
              <article>
                <h3 className="text-base font-semibold">RustDesk (GitHub Octernship, 2023)</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  Fixed a SOCKS5 proxy bug that broke remote connections under specific network conditions, worth around
                  15% connection throughput improvement upstream. Also built Flutter UI pages surfacing shell output in
                  dashboards.
                </p>
                <p className="mt-2 font-mono text-xs">
                  <ExternalLink href="https://github.com/rustdesk/rustdesk">Repo</ExternalLink>
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="experience">
            <SectionHeading id="experience">Experience</SectionHeading>
            <ol className="mt-4 space-y-6">
              {experience.map((role) => (
                <li key={`${role.org}-${role.period}`}>
                  <h3 className="text-base font-semibold">
                    {role.role}, {role.org}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {role.period} · {role.place}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/85">{role.note}</p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="technical">
            <SectionHeading id="technical">Technical</SectionHeading>
            <dl className="mt-4 space-y-3">
              {technical.map((group) => (
                <div key={group.label} className="sm:flex sm:gap-4">
                  <dt className="shrink-0 font-mono text-xs uppercase tracking-wide text-muted-foreground sm:w-44 sm:pt-0.5">
                    {group.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground/85">{group.items}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="selected">
            <SectionHeading id="selected">Selected</SectionHeading>
            <ul className="mt-4 space-y-1 text-sm leading-relaxed text-foreground/85">
              <li>CKAD, Linux Foundation, 2024.</li>
              <li>Codechef rating 1887, global ranks 678 and 245.</li>
              <li>WorldQuant, 55th, bronze, 2023.</li>
              <li>GATE All India Rank 3343.</li>
            </ul>
          </section>
        </Reveal>
      </main>

      <footer className="mt-20 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        <p>Kirti Purohit, Bengaluru. kirtipurohit.in</p>
      </footer>
    </div>
  </div>
);

export default Index;
