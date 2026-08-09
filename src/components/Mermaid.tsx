import { useEffect, useRef, useState } from "react";

let counter = 0;

const Mermaid = ({ chart, caption }: { chart: string; caption?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let cancelled = false;
    const isDark = document.documentElement.classList.contains("dark");

    import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: isDark ? "dark" : "neutral",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 15,
        flowchart: { useMaxWidth: true, padding: 12 },
        sequence: { useMaxWidth: true },
      });
      counter += 1;
      mermaid
        .render(`mmd-${counter}`, chart)
        .then(({ svg: rendered }) => {
          if (!cancelled) setSvg(rendered);
        })
        .catch(() => undefined);
    });

    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <figure className="my-8">
      <div
        ref={ref}
        className="overflow-x-auto rounded-md border border-border bg-muted/40 p-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {caption && (
        <figcaption className="mt-2 font-mono text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Mermaid;
