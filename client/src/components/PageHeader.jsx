import Reveal from "./Reveal";
import LatitudeLines from "./LatitudeLines";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <LatitudeLines className="text-white/[0.08]" drift />
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-crest-600/20 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-crest-300">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {description}
            </p>
          </Reveal>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
    </section>
  );
}
