import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import ExternalLink from "@/components/ExternalLink";
import Chapter, { Prose, PullQuote } from "@/components/story/Chapter";
import ChapterRail, { type RailItem } from "@/components/story/ChapterRail";
import Figure from "@/components/story/Figure";
import { photos } from "@/data/photos";
import { projects } from "@/data/projects";

const RESUME_UPDATED = "August 2026";

const chapters: RailItem[] = [
  { id: "origins", number: "01", label: "Origins" },
  { id: "scale", number: "02", label: "Scale" },
  { id: "now", number: "03", label: "Now" },
  { id: "open-source", number: "04", label: "Open source" },
  { id: "projects", number: "05", label: "Projects" },
  { id: "technical", number: "06", label: "Technical" },
  { id: "offline", number: "07", label: "Offline" },
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

const selected = [
  "CKAD, Linux Foundation, 2024",
  "Codechef rating 1887, global ranks 678 and 245",
  "WorldQuant, 55th, bronze, 2023",
  "GATE All India Rank 3343",
];

const openSource = [
  {
    title: "Talk-to-PC MCP Server",
    year: "2025",
    body: "Published to PyPI and listed in Anthropic's MCP directory. It resolves Linux diagnostics and commands through an LLM with guardrails, exposing three tools: run_diagnosis, get_pc_settings and list_safe_commands. Anything touching sudo stops and asks for explicit confirmation before it runs.",
    links: [{ label: "PyPI", href: "https://pypi.org/project/talk-to-pc-mcp/" }],
  },
  {
    title: "ChatGPT Desktop (lencx/ChatGPT)",
    year: "2023",
    body: "Added DALL·E 2 integration in Rust. The WebView routes between the ChatGPT and DALL·E origins via Tauri commands, with the selected mode persisted in user preferences.",
    links: [{ label: "Repo", href: "https://github.com/lencx/ChatGPT" }],
  },
  {
    title: "RustDesk (GitHub Octernship)",
    year: "2023",
    body: "Fixed a SOCKS5 proxy bug that broke remote connections under specific network conditions, worth around 15% connection throughput improvement upstream. Also built Flutter UI pages surfacing shell output in dashboards.",
    links: [{ label: "Repo", href: "https://github.com/rustdesk/rustdesk" }],
  },
];

const linkClass =
  "text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary";

const Index = () => (
  <div className="min-h-screen bg-background">
    <a
      href="#origins"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-primary-foreground"
    >
      Skip to the story
    </a>

    <div className="mx-auto w-full max-w-story px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
      {/* ---------------------------------------------------------------- hero */}
      <header>
        <div className="mb-14 flex items-center justify-between gap-4 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            kirtipurohit.in
          </span>
          <ThemeToggle />
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Software engineer · Bengaluru, India
            </p>

            <h1 className="mt-5 text-[2.75rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl">
              Kirti Purohit
            </h1>

            <p className="mt-7 max-w-[30ch] font-serif text-2xl font-light leading-[1.3] text-foreground/90 sm:text-[2rem]">
              I build backend systems that have to stay correct when parts of them fail.
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
          </div>

          <Figure
            photo={photos.portrait}
            priority
            className="max-w-[17rem] sm:max-w-[19rem] lg:max-w-none"
            ratioClassName="aspect-[4/5]"
          />
        </div>

        {/* Mobile chapter index — the sticky rail is desktop-only. */}
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
      </header>

      {/* ------------------------------------------------------------ chapters */}
      <div className="mt-20 grid gap-12 sm:mt-28 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <ChapterRail items={chapters} />

        <main className="space-y-24 sm:space-y-32">
          <Reveal>
            <Chapter
              id="origins"
              number="01"
              label="Origins"
              title="The first code I shipped went somewhere that mattered"
              dateline="Mumbai · 2022"
            >
              <Prose>
                <p>
                  Before I had a job title I had a Codechef rating. 1887, two global ranks in the hundreds, and a GATE
                  All India Rank of 3343. Competitive programming is a good teacher of one thing: every problem has an
                  answer, and it is your fault if you cannot find it.
                </p>
                <p>
                  My first real deployment taught me the opposite. At Dinosys Infotech I worked on forensics tooling
                  that ended up with cyber crime investigation units across more than sixteen Indian state government
                  agencies. Nobody there was going to admire the abstractions. It either worked on their hardware, on
                  their timeline, or it did not.
                </p>
              </Prose>
              <PullQuote>
                Real systems do not have clean answers. They have tradeoffs you have to be able to defend.
              </PullQuote>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter
              id="scale"
              number="02"
              label="Scale"
              title="What breaks at 3am"
              dateline="Hewlett Packard Enterprise · Bengaluru · 2023 – 2024"
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] lg:gap-12">
                <div>
                  <Prose>
                    <p>
                      I joined HPE as an intern in January 2023 and stayed until December 2024, working on SaaS customer
                      platforms. Kafka pipelines, DynamoDB data models, Kubernetes, AWS.
                    </p>
                    <p>
                      Written down, that is a list of technologies. Lived through, it was two years of watching how
                      distributed systems actually fail: consumers falling behind, retries amplifying the problem they
                      were meant to solve, and a data model that was perfectly reasonable until the access pattern
                      changed underneath it.
                    </p>
                    <p>
                      That is the part I got useful at. Not the happy path, the second one.
                    </p>
                  </Prose>
                </div>

                <Figure photo={photos.desk} index="01" className="lg:pt-2" ratioClassName="aspect-[3/4]" />
              </div>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter
              id="now"
              number="03"
              label="Now"
              title="Correctness under partial failure"
              dateline="Quantum Corporation · December 2024 – present"
            >
              <Prose>
                <p>
                  I work on StorNext with Quantum's AI and storage engineering team. Two threads run through it:
                  distributed concurrency, and an internal RAG system that indexes our Git repositories and answers
                  questions across them.
                </p>
                <p>
                  The retrieval work sharpened something for me. A system that is confidently wrong is worse than one
                  that says it does not know, and almost all of the interesting engineering lives in making the second
                  behaviour reliable.
                </p>
                <p>
                  The systems I keep being drawn to have the same shape. Sagas, outboxes, idempotent handlers,
                  guardrails. Machinery whose entire purpose is to still be right after something upstream has already
                  gone wrong.
                </p>
              </Prose>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter
              id="open-source"
              number="04"
              label="Open source"
              title="Work that ships without anyone assigning it"
            >
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
            <Chapter id="projects" number="05" label="Projects" title="Things I built to answer a question">
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
                            {project.title}
                          </Link>
                        </h3>
                        <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
                      <p className="mt-3 font-mono text-xs text-muted-foreground">{project.stack.join(", ")}</p>
                      <p className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs">
                        <Link to={`/projects/${project.slug}`} className={linkClass}>
                          Read more
                        </Link>
                        {project.repo && <ExternalLink href={project.repo}>Repo</ExternalLink>}
                        {project.demo && <ExternalLink href={project.demo}>Live demo</ExternalLink>}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter id="technical" number="06" label="Technical" title="The detail, for people who want it">
              <dl className="max-w-[40rem] divide-y divide-border border-y border-border">
                {technical.map((group) => (
                  <div key={group.label} className="py-4 sm:flex sm:gap-6">
                    <dt className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:w-40 sm:pt-1">
                      {group.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground/85 sm:mt-0">{group.items}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Selected</h3>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-foreground/85">
                  {selected.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Chapter>
          </Reveal>

          <Reveal>
            <Chapter id="offline" number="07" label="Offline" title="Outside the terminal">
              <Prose>
                <p>
                  You do not learn very much about an engineer from a stack list, so here are two photographs from the
                  last couple of years instead.
                </p>
              </Prose>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <Figure photo={photos.mountains} index="02" ratioClassName="aspect-[3/4]" />
                <div className="flex flex-col justify-end gap-8">
                  <Figure photo={photos.community} index="03" ratioClassName="aspect-[4/3]" />
                  <p className="max-w-[34ch] text-[0.9375rem] leading-[1.7] text-foreground/85">
                    A community event I went to as a participant. Rooms like that one are still rarer than they should
                    be, and they are worth showing up for.
                  </p>
                </div>
              </div>
            </Chapter>
          </Reveal>

          <Reveal>
            <section aria-labelledby="contact" className="scroll-mt-20">
              <div className="rounded-md border border-border bg-muted/40 p-7 sm:p-10">
                <h2 id="contact" className="font-serif text-2xl font-normal leading-tight sm:text-3xl">
                  If any of this is the kind of problem you are working on, I would like to hear about it.
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
