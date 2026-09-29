import { useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const linkClass =
  "text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:decoration-primary";

const WritingHumanTone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hiring managers can smell an LLM DM — Kirti Purohit";
    return () => {
      document.title = "Kirti Purohit — Software Engineer";
    };
  }, []);

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
          <header className="mb-8">
            <p className="font-mono text-xs text-muted-foreground">Writing · September 2026</p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Hiring managers can smell an LLM DM. Here's the human-tone skill I run first.
            </h1>
            <p className="mt-4 font-serif text-xl font-light leading-snug text-foreground/90">
              I use models every day. I don't want my DMs, client notes, or applications to sound like one.
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
              That's the whole point of this human-tone skill. Not better essays. Not research. Not blog
              drafts. Those can stay structured. This is for the messages a hiring manager, client, or
              founder actually opens on their phone.
            </p>
            <p className="leading-relaxed text-foreground/85">
              If you write like a press release in a 4-line note, they bounce. If you write like a
              proposal stuffed into a DM, they bounce harder. Detectors are the noisy version of the same
              problem. The quiet version is a busy hiring manager who can smell "leverage", "robust", and
              "happy to hop on a call" from a mile away.
            </p>

            <h2 className="pt-4 text-lg font-semibold">What I actually run through it</h2>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground/85">
              <li>Cold DMs to clients and founders</li>
              <li>Short proposal notes and intro emails</li>
              <li>Follow-ups that would otherwise sound automated</li>
              <li>Recruiter and application notes, when I need those too</li>
            </ul>
            <p className="leading-relaxed text-foreground/85">
              I don't run papers, design docs, or research summaries through it. Those need different
              rules. This skill is for the last 80 words someone will judge you on before they open the
              deck or the resume.
            </p>

            <h2 className="pt-4 text-lg font-semibold">The rules that actually change the text</h2>
            <p className="leading-relaxed text-foreground/85">
              Talk like you would to a coworker over Slack. Contractions. Specific words. A take, not a
              hedge.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Cut the openers. No "Great question", no "Absolutely", no "Hope you're doing well" unless
              you mean it and it fits.
            </p>
            <p className="leading-relaxed text-foreground/85">
              No em dashes. They are the fastest tell I still see in generated outreach. Use a period or
              a comma.
            </p>
            <p className="leading-relaxed text-foreground/85">
              Ban the usual filler: delve, dive in, navigate, leverage, robust, seamless, game-changer,
              elevate, unlock, "it's important to note", "feel free to", "I hope this helps". If a
              sentence could live on a product landing page, rewrite it.
            </p>
            <p className="leading-relaxed text-foreground/85">
              For outreach, go shorter than you think. Who you are. What you're responding to. The ask. A
              link or a file. One low-pressure close. That's it. Don't map your whole background onto
              their problem inside the DM. That's what the deck is for.
            </p>

            <h2 className="pt-4 text-lg font-semibold">What this looks like in practice</h2>
            <p className="leading-relaxed text-foreground/85">Before:</p>
            <blockquote className="border-l-2 border-primary bg-muted/40 px-4 py-3 font-mono text-xs leading-relaxed text-foreground/80">
              Hi Priya, came across your post about the platform rewrite. I work on core storage and AI
              infra. I own production Kubernetes and deal with distributed concurrency bugs regularly,
              that's the platform side. I also built an internal dev agent with guardrails, context
              engineering and structured outputs so it doesn't go off the rails, that's the applied-AI
              side. Reliability in a regulated setting is the kind of problem I actually enjoy. Would
              love to hop on a call and explore how I can add value to your roadmap. Happy to send a deck
              over.
            </blockquote>
            <p className="leading-relaxed text-foreground/85">After:</p>
            <blockquote className="border-l-2 border-primary bg-muted/40 px-4 py-3 font-mono text-xs leading-relaxed text-foreground/80">
              Hi Priya, saw your note about the platform rewrite. I work on core storage and AI infra.
              Sharing a short note on what I've shipped. Reach out if it's useful.
            </blockquote>
            <p className="leading-relaxed text-foreground/85">
              Same person. Same ask. The second one reads like a human typed it on the train.
            </p>

            <h2 className="pt-4 text-lg font-semibold">How I use it</h2>
            <p className="leading-relaxed text-foreground/85">
              I keep the human-tone skill next to the draft, not instead of thinking. Write the ugly
              first version. Run the pass: kill em dashes, kill cliches, cut the case you already made
              in the deck, check it sounds like something you would send a person, not a pipeline.
            </p>
            <p className="leading-relaxed text-foreground/85">
              If a line feels like a summary of the line before it, delete it. If you stacked three
              adjectives where one specific noun would do, delete two.
            </p>
            <p className="leading-relaxed text-foreground/85">
              This won't close the work by itself. It just stops the message from working against you
              before anyone opens the attached file.
            </p>
            <p className="leading-relaxed text-foreground/85">
              The Claude skill lives in this repo if you want to drop it into Claude and run it on
              outreach before you hit send. Use it for DMs, client notes, and applications. Leave your
              design docs alone.
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
