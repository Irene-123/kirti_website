import type { ReactNode } from "react";

interface ChapterProps {
  id: string;
  /** Two-digit chapter number rendered in the mono marker. */
  number: string;
  /** Short uppercase label beside the number. */
  label: string;
  /** Serif headline for the chapter. */
  title: string;
  /** Optional mono dateline, e.g. "Mumbai · 2022". */
  dateline?: string;
  children: ReactNode;
}

const Chapter = ({ id, number, label, title, dateline, children }: ChapterProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
    <header>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-primary">[{number}]</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <span aria-hidden className="rule-fade h-px flex-1" />
      </div>

      <h2
        id={`${id}-title`}
        className="mt-5 font-serif text-[1.75rem] font-normal leading-[1.15] tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>

      {dateline && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{dateline}</p>
      )}
    </header>

    <div className="mt-7">{children}</div>
  </section>
);

/** Body copy at a comfortable reading measure. */
export const Prose = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[38rem] space-y-4 text-[0.9375rem] leading-[1.75] text-foreground/85">{children}</div>
);

/** A single line lifted out of the narrative, set in serif italic. */
export const PullQuote = ({ children }: { children: ReactNode }) => (
  <p className="my-8 max-w-[34rem] border-l-2 border-primary/40 pl-5 font-serif text-xl italic leading-snug text-foreground/90 sm:text-2xl">
    {children}
  </p>
);

export default Chapter;
