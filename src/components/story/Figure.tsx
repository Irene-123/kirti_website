import type { Photo } from "@/data/photos";

/** Builds a density descriptor list: "img.webp 1x, img@2x.webp 2x". */
const srcSet = (sources: string[]) =>
  sources.map((src, i) => `${src} ${i + 1}x`).join(", ");

interface FigureProps {
  photo: Photo;
  /** Figure number shown in the mono caption line, e.g. "01". */
  index?: string;
  /** Eager-load above-the-fold images; everything else stays lazy. */
  priority?: boolean;
  className?: string;
  /** Aspect-ratio utility for the frame, e.g. "aspect-[3/4]". Crops via object-cover. */
  ratioClassName?: string;
}

const Figure = ({ photo, index, priority = false, className = "", ratioClassName = "" }: FigureProps) => (
  <figure className={className}>
    <div className={`photo-frame overflow-hidden rounded-sm border border-border bg-muted ${ratioClassName}`}>
      <picture className="block h-full w-full">
        <source type="image/webp" srcSet={srcSet(photo.webp)} />
        <img
          src={photo.jpg[0]}
          srcSet={srcSet(photo.jpg)}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // React 18 does not map the camelCase prop, so pass the DOM attribute directly.
          {...(priority ? { fetchpriority: "high" } : {})}
          className="photo block h-full w-full object-cover"
        />
      </picture>
    </div>
    {photo.caption && (
      <figcaption className="mt-3 flex gap-2 font-mono text-xs leading-relaxed text-muted-foreground">
        {index && <span className="shrink-0 text-primary/70">fig. {index}</span>}
        <span>{photo.caption}</span>
      </figcaption>
    )}
  </figure>
);

export default Figure;
