import { useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const linkClass =
  "text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary";

const WritingHumanTone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Clients can smell an AI-written DM. Here's the human-tone skill I run first.";
    return () => {
      document.title = "Kirti Purohit - Software Engineer";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-prose px-5 py-14 sm:py-20">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-primary">
            {'<-'} Kirti Purohit
          </Link>
          <ThemeToggle />
        </div>

        <article>
          <header className="mb-8">
            <p className="font-mono text-xs text-muted-foreground">Writing · September 2026</p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Clients can smell an AI-written DM. Here's the human-tone skill I run first.
            </h1>
            <p className="mt-4 font-serif text-xl font-light leading-snug text-foreground/90">
              90% of the referral requests I get are Claude generated.
            </p>
            <p className="mt-5 font-mono text-xs">
              <a href="/skills/human-tone/SKILL.md" className={linkClass}>
                Claude skill file
              </a>
              <span className="text-muted-foreground"> · copy into Claude, run it on the draft</span>
            </p>
          </header>

          <figure className="mb-10">
            <div className="photo-frame overflow-hidden rounded-sm border border-border bg-muted aspect-[4/5]">
              <img
                src="/writing/human-tone-hero.jpg"
                alt="Black and white close portrait with hair across the face"
                width={720}
                height={900}
                className="photo block h-full w-full object-cover object-[center_18%]"
              />
            </div>
            <figcaption className="mt-3 flex gap-2 font-mono text-xs leading-relaxed text-muted-foreground">
              <span className="shrink-0 text-primary/70">fig. 01</span>
              <span>Photo by Mokhalad Musavi on Unsplash</span>
            </figcaption>
          </figure>

          <div className="space-y-5">
            <p className="leading-relaxed text-foreground/85">
              Clients DMing me with an MVP or a PRD are AI-generated again. Sometimes the actual
              message is too. I found myself doing the same thing, stuck in the loop of trying to
              make my reply less AI-slop and sound at least human. A bit. Please, Claude?
            </p>
            <p className="leading-relaxed text-foreground/85">
              I'm a senior software engineer. I want the point across, not a performance. I'm also
              Gen Z. I hate extremely professional writing. I hate making someone read a whole damn
              essay for a small feature in a document, a Git PR description, literally anything.
            </p>
            <p className="leading-relaxed text-foreground/85">
              For hiring managers and recruiters, I want to be concise, clear, and considerate. I
              want a better job without wasting their time, or getting brushed off because the
              LinkedIn DM or email sounded like sloppy AI.
            </p>
            <p className="leading-relaxed text-foreground/85">
              I use models every day. I don't want my DMs (Slack, Teams, LinkedIn), PRs, or job
              applications to sound like one.
            </p>
            <p className="leading-relaxed text-foreground/85">
              If you write like a press release in a 4-line LinkedIn note, people bounce. If you
              write like a cover letter stuffed into a DM, they bounce harder. Detectors are the
              noisy version of the same problem. The quiet version is a senior engineer who can
              smell "leverage", "robust", and "happy to chat further" from a mile away.
            </p>

            <h2 className="pt-4 text-lg font-semibold">What I actually run through it</h2>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground/85">
              <li>Cold DMs and connection requests</li>
              <li>Recruiter replies</li>
              <li>Short application notes and "why this role" boxes</li>
              <li>Slack-style follow-ups</li>
            </ul>
            <p className="leading-relaxed text-foreground/85">
              I don't run papers, design docs, research summaries, or this article through it.
              Those need different rules. This skill is for the last 80 words someone will judge
              you on before they click your resume.
            </p>

            <h2 className="pt-4 text-lg font-semibold">The rules that actually change the text</h2>
            <p className="leading-relaxed text-foreground/85">
              Talk like you would to a coworker over Slack. Contractions. Specific words. A take,
              not a hedge.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Cut the openers. No "Great question", no "Absolutely", no "Hope you're doing well"
              unless you mean it and it fits.
            </p>
            <p className="leading-relaxed text-foreground/85">
              No em dashes. They are the fastest tell I still see in generated outreach. Use a
              period or a comma.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Ban the usual filler: delve, dive in, navigate, leverage, robust, seamless,
              game-changer, elevate, unlock, "it's important to note", "feel free to", "I hope this
              helps". If a sentence could live on a product landing page, rewrite it.
            </p>
            <p className="leading-relaxed text-foreground/85">
              For outreach, go shorter than you think. Who you are. The role. Ask to be considered.
              Offer the resume. One low-pressure close. That's it. Don't map your background onto
              their JD inside the DM. That's what the PDF is for.
            </p>

            <h2 className="pt-4 text-lg font-semibold">What this looks like in practice</h2>
            <p className="leading-relaxed text-foreground/85">Before:</p>
            <blockquote className="border-l-2 border-primary bg-muted/40 px-4 py-3 font-mono text-xs leading-relaxed text-foreground/80">
              Hi Priya, came across your post about the AI Platform Engineer role. I'm a senior
              software engineer on a core storage and AI infra team. I own production Kubernetes
              and deal with distributed concurrency bugs regularly, that's the platform side. I also
              built an internal dev agent with guardrails, context engineering and structured
              outputs so it doesn't go off the rails, that's the applied-AI side. Reliability in a
              regulated setting is the kind of problem I actually enjoy. Would love to hear more
              about where the platform's at and whether it's a good fit. Happy to send my resume
              over.
            </blockquote>
            <p className="leading-relaxed text-foreground/85">After:</p>
            <blockquote className="border-l-2 border-primary bg-muted/40 px-4 py-3 font-mono text-xs leading-relaxed text-foreground/80">
              Hi Priya, came across your post about the AI Platform Engineer role. I'm a senior
              software engineer on a core storage and AI infra team. Would love to be considered,
              sharing my resume here. Reach out anytime if it's a fit. Thank you!
            </blockquote>
            <p className="leading-relaxed text-foreground/85">
              Same person. Same ask. The second one reads like a human typed it on the train.
            </p>

            <h2 className="pt-4 text-lg font-semibold">How I use it</h2>
            <p className="leading-relaxed text-foreground/85">
              I keep the skill next to the draft, not instead of thinking. Write the ugly first
              version. Run the pass: kill em dashes, kill cliches, cut the case you already made in
              the resume, check it sounds like something you would send a teammate.
            </p>
            <p className="leading-relaxed text-foreground/85">
              If a line feels like a summary of the line before it, delete it. If you stacked three
              adjectives where one specific noun would do, delete two.
            </p>
            <p className="leading-relaxed text-foreground/85">
              This won't get you the job by itself. It just stops the message from working against
              you before anyone opens the attached file.
            </p>
            <p className="leading-relaxed text-foreground/85">
              I published the full skill separately so you can drop it into Claude, Cursor, or
              whatever you draft with. Use it for outreach. Leave your design docs alone.
            </p>
          </div>
        </article>

        <footer className="mt-16 border-t border-border pt-6 font-mono text-xs">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/#writing" className={linkClass}>
              Back
            </Link>
            <a href="/skills/human-tone/SKILL.md" className={linkClass}>
              Claude skill file
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WritingHumanTone;
