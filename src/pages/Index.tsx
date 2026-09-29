import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import ExternalLink from "@/components/ExternalLink";
import Chapter, { Prose } from "@/components/story/Chapter";
import ChapterRail, { type RailItem } from "@/components/story/ChapterRail";
import { projects } from "@/data/projects";

const RESUME_UPDATED = "September 2026";

const chapters: RailItem[] = [
  { id: "now", number: "01", label: "Now" },
  { id: "earlier", number: "02", label: "Earlier" },
  { id: "work", number: "03", label: "Work" },
  { id: "open-source", number: "04", label: "Open source" },
  { id: "writing", number: "05", label: "Writing" },
];

const quantum = [
  "Multithreaded C++ on the storage manager. Deadlocks, lock contention, and timeout failures, fixed with reentrant locks and producer-consumer work queues.",
  "Policy-driven state machines that move data across NVMe, disk, object, and tape.",
  "Production debugging across Linux, RAID, NVMe, VMware, and Storage Manager.",
  "An internal dev agent, ReAct and tool selection, with guardrails and structured outputs so retrieval stays checkable.",
];

const technical = [
  { label: "Languages", items: "C++, Go, Python, Bash, Rust" },
  { label: "Systems", items: "Kafka, concurrency, sagas, outbox, idempotency" },
  { label: "AI", items: "LangGraph, MCP, RAG, guardrails, structured outputs" },
  { label: "Infra", items: "Kubernetes, Docker, AWS, Linux" },
  { label: "Data", items: "PostgreSQL, DynamoDB, Redis" },
];

const openSource = [
  {
    title: "Talk-to-PC MCP Server",
    year: "2025",
    body: "Published to PyPI and listed in Anthropic's MCP directory. Linux diagnostics through an LLM, with guardrails. sudo stops and asks before it runs.",
    links: [{ label: "PyPI", href: "https://pypi.org/project/talk-to-pc-mcp/" }],
  },
  {
    title: "ChatGPT Desktop",
    year: "2023",
    body: "Added DALL-E 2 in Rust. The WebView switches between ChatGPT and DALL-E through Tauri commands, and the mode stays in user preferences.",
    links: [{ label: "Repo", href: "https://github.com/lencx/ChatGPT" }],
  },
  {
    title: "RustDesk",
    year: "2023",
    body: "Fixed a SOCKS5 proxy bug that dropped remote connections on some networks. About 15% more connection throughput upstream.",
    links: [{ label: "Repo", href: "https://github.com/rustdesk/rustdesk" }],
  },
];

const linkClass =
  "text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary";

const Index = () => (
  <div className="min-h-screen bg-background">
    <a
      href="#now"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-primary-foreground"
    >
      Skip to work
    </a>

    <div className="mx-auto w-full max-w-story px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
      <header>
        <div className="mb-14 flex items-center justify-between gap-4 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            kirtipurohit.in
          </span>
          <ThemeToggle />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Senior software engineer · Bengaluru
        </p>

        <h1 className="mt-5 text-[2.75rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl">
          Kirti Purohit
        </h1>

        <p className="mt-7 max-w-[36rem] font-serif text-2xl font-light leading-[1.3] text-foreground/90 sm:text-[2rem]">
          Storage systems, and the AI next to them. The part I care about is what still has to be right after something else has failed.
        </p>

        <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
          <ExternalLink href="https://github.com/Irene-123">GitHub</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/kirtidineshpurohit">LinkedIn</ExternalLink>
          <ExternalLink href="mailto:kirtipurohit050@gmail.com">Email</ExternalLink>
          <a href="/resume.pdf" download className={linkClass}>
            Resume
          </a>
          <span className="text-xs text-muted-foreground">PDF · {RESUME_UPDATED}</span>
        </p>
      </header>

      <nav
        aria-label="Chapters"
        className="mt-14 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-5 font-mono text-xs text-muted-foreground lg:hidden"
      >
        {chapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`} className="hover:text-primary">
            <span className="text-primary/60">{chapter.number}</span> {chapter.label.toLowerCase()}
          </a>
        ))}
      </nav>

      <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <ChapterRail items={chapters} />

        <main className="space-y-24 sm:space-y-32">
          <Reveal>
            <Chapter
              id="now"
              number="01"
              label="Now"
              title="Core storage, and an agent that has to stay on the rails"
              dateline="Quantum Corporation · Dec 2024 – present"
            >
              <ul className="max-w-[40rem] space-y-3 text-[0.9375rem] leading-[1.7] text-foreground/85">
                {quantum.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <dl className="mt-10 max-w-[40rem] divide-y divide-border border-y border-border">
                {technical.map((group) => (
                  <div key={group.label} className="py-3 sm:flex sm:gap-6">
                    <dt className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:w-28 sm:pt-1">
                      {group.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground/85 sm:mt-0">{group.items}</dd>
                  </div>
                ))}
              </dl>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter
              id="earlier"
              number="02"
              label="Earlier"
              title="Production infra, then the incident in front of it"
              dateline="Hewlett Packard Enterprise · 2023 – 2024"
            >
              <Prose>
                <p>
                  On NaaS customer platforms I owned deployments, databases, and AWS (RDS, EKS, ECR, EC2, S3, ElastiCache). Ingress load balancing and horizontal autoscaling cut traffic bottlenecks by about 20%.
                </p>
                <p>
                  The incident tool is the part I'd keep. Kafka for ticket routing, DynamoDB for the customer map. Triage time on device downtime dropped by about 70%.
                </p>
                <p>
                  Before that, a forensics desktop app used by cyber crime units in more than 16 Indian states. Search across about 5TB of call and traffic logs.
                </p>
              </Prose>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter id="work" number="03" label="Work" title="Things I built to answer a question">
              <ul className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <article className="group h-full rounded-md border border-border p-5 transition-colors hover:border-primary/40">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-base font-semibold">
                          <Link
                            to={`/projects/${project.slug}`}
                            className="underline-offset-4 group-hover:text-primary group-hover:underline"
                          >
                            {project.title.replace(" \u2014 ", ": ")}
                          </Link>
                        </h3>
                        <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
                      <p className="mt-3 font-mono text-xs text-muted-foreground">{project.stack.slice(0, 4).join(", ")}</p>
                      <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs">
                        <Link to={`/projects/${project.slug}`} className={linkClass}>
                          Read more
                        </Link>
                        {project.repo && <ExternalLink href={project.repo}>Repo</ExternalLink>}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter id="open-source" number="04" label="Open source" title="Work that shipped without a ticket">
              <div className="space-y-9">
                {openSource.map((item) => (
                  <article key={item.title} className="max-w-[38rem]">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">{item.year}</span>
                    </div>
                    <p className="mt-2 text-[0.9375rem] leading-[1.7] text-foreground/85">{item.body}</p>
                    <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs">
                      {item.links.map((link) => (
                        <ExternalLink key={link.href} href={link.href}>
                          {link.label}
                        </ExternalLink>
                      ))}
                    </p>
                  </article>
                ))}
              </div>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter
              id="writing"
              number="05"
              label="Writing"
              title="Notes, when the draft is short enough"
              dateline="September 2026"
            >
              <ul className="grid gap-4 sm:grid-cols-2">
                <li>
                  <article className="group h-full rounded-md border border-border p-5 transition-colors hover:border-primary/40">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold">
                        <Link
                          to="/writing/human-tone"
                          className="underline-offset-4 group-hover:text-primary group-hover:underline"
                        >
                          Clients can smell an AI-written DM
                        </Link>
                      </h3>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">2026</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                      A Claude skill I run on DMs, recruiter replies, and applications before I hit send.
                    </p>
                    <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs">
                      <Link to="/writing/human-tone" className={linkClass}>
                        Read
                      </Link>
                      <a href="/skills/human-tone/SKILL.md" className={linkClass}>
                        Skill file
                      </a>
                    </p>
                  </article>
                </li>
              </ul>
            </Chapter>
          </Reveal>

          <Reveal>
            <section aria-labelledby="contact" className="scroll-mt-20">
              <div className="rounded-md border border-border bg-muted/40 p-7 sm:p-10">
                <h2 id="contact" className="font-serif text-2xl font-normal leading-tight sm:text-3xl">
                  If this is the kind of problem you are hiring for, write to me.
                </h2>
                <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
                  <ExternalLink href="mailto:kirtipurohit050@gmail.com">kirtipurohit050@gmail.com</ExternalLink>
                  <ExternalLink href="https://linkedin.com/in/kirtidineshpurohit">LinkedIn</ExternalLink>
                  <ExternalLink href="https://github.com/Irene-123">GitHub</ExternalLink>
                </p>
              </div>
            </section>
          </Reveal>
        </main>
      </div>

      <footer className="mt-24 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        <p>Kirti Purohit · Bengaluru · kirtipurohit.in</p>
      </footer>
    </div>
  </div>
);

export default Index;
