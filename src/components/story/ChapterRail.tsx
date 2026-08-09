import { useEffect, useRef, useState } from "react";

export interface RailItem {
  id: string;
  number: string;
  label: string;
}

/**
 * Sticky chapter index. On large screens it sits in the left margin and tracks
 * which chapter is in view; on small screens only the thin progress bar shows.
 */
const ChapterRail = ({ items }: { items: RailItem[] }) => {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const barRef = useRef<HTMLDivElement>(null);

  // Scroll spy: the active chapter is the last one whose heading has passed the
  // upper third of the viewport.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const pick = () => {
      const line = window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      setActive(current.id);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [items]);

  // Reading progress, written straight to the DOM to avoid a render per frame.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const bar = barRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div aria-hidden className="fixed inset-x-0 top-0 z-40 h-px bg-transparent">
        <div ref={barRef} className="h-full origin-left bg-primary/70" style={{ transform: "scaleX(0)" }} />
      </div>

      <nav aria-label="Chapters" className="sticky top-24 hidden lg:block">
        <ol className="space-y-2.5 border-l border-border pl-4">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="relative">
                {isActive && (
                  <span aria-hidden className="absolute -left-[calc(1rem+1px)] top-1.5 h-3 w-px bg-primary" />
                )}
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="tabular-nums">{item.number}</span>
                  <span className="ml-2">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default ChapterRail;
