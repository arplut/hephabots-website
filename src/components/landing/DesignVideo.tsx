/**
 * Video frame for the arm renders. `loop` = silent autoplaying loop (paused for people who prefer reduced motion);
 * `controls` = tap to play, nothing downloaded beyond the first frame until then.
 */
export const DesignVideo = ({
  src,
  label,
  title,
  loop = false,
  controls = false,
  className = "",
}: {
  src: string;
  label?: string;
  title: string;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}) => {
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const autoplay = loop && !reduceMotion;

  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-border bg-[#dfe3e8] ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover object-top"
        // "#t=0.1" makes browsers show the first frame as a preview without downloading the whole file
        src={autoplay ? src : `${src}#t=0.1`}
        title={title}
        aria-label={title}
        muted
        playsInline
        autoPlay={autoplay}
        loop={loop}
        controls={controls || (loop && reduceMotion)}
        preload={autoplay ? "auto" : "metadata"}
      />
      {label && (
        <span className="pointer-events-none absolute left-3 top-3 rounded bg-foreground/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-background">
          {label}
        </span>
      )}
    </div>
  );
};
