import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  EyeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  FlagIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  HeartIcon,
  BuildingOffice2Icon,
  HomeIcon,
  BeakerIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import LatitudeLines from "../components/LatitudeLines";
import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";

const slides = [
  {
    bg: "/assets/hero-meeting.jpg",
    tag: "Crest Latitude Ltd \u00b7 Est. 2013",
    heading: "Ideas, engineered into reality.",
    sub: "Training, consultancy, ICT, healthcare equipment and construction \u2014 one Nigerian company, thirteen years of disciplined delivery.",
    cta1: { label: "Explore our services", to: "/services" },
    cta2: { label: "Start a conversation", to: "/contact" },
  },
  {
    bg: "/assets/hero-training.jpg",
    tag: "Human capital development",
    heading: "People, trained to world standard.",
    sub: "Executive programmes, entrepreneurship development and professional capacity building for organisations that measure results.",
    cta1: { label: "See how we train", to: "/services" },
    cta2: { label: "Talk to our team", to: "/contact" },
  },
  {
    bg: "/assets/hero-construction.jpg",
    tag: "Construction & engineering",
    heading: "We build what Nigeria runs on.",
    sub: "Hospitals, highways, bridges and interchanges \u2014 designed, built and handed over with engineering discipline.",
    cta1: { label: "View our services", to: "/services" },
    cta2: { label: "Discuss a project", to: "/contact" },
  },
  {
    bg: "/assets/hero-healthcare.jpg",
    tag: "Healthcare equipment",
    heading: "Hospitals, equipped for what comes next.",
    sub: "Medical, surgical and dental equipment \u2014 supplied, installed and maintained for health facilities nationwide.",
    cta1: { label: "Supply & maintenance", to: "/services" },
    cta2: { label: "Request a quote", to: "/contact" },
  },
];

function MaskedWords({ text, baseDelay = 160, step = 80 }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="mask">
            <span
              className="mask-word"
              style={{ "--d": `${baseDelay + i * step}ms` }}
            >
              {word}
            </span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((i) => {
    setCurrent(i);
  }, []);

  const handleFillEnd = (e) => {
    if (e.animationName === "progress-fill" && !reducedMotion) next();
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 48) {
      if (dx < 0) next();
      else prev();
    }
  };

  const slide = slides[current];

  return (
    <section
      className="relative h-[92vh] min-h-[620px] overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((s, i) => (
        <div
          key={s.bg}
          className={`hero-slide absolute inset-0 bg-cover bg-center ${
            i === current ? "hero-slide-active" : ""
          }`}
          style={{ backgroundImage: `url(${s.bg})` }}
          aria-hidden={i !== current}
        />
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30"
        aria-hidden="true"
      />
      <LatitudeLines className="text-white/10" drift />

      <div
        key={current}
        className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6"
      >
        <div className="max-w-2xl pb-28 pt-20">
          <p
            className="rise inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-crest-200 backdrop-blur-sm"
            style={{ "--d": "60ms" }}
          >
            <span className="live-dot" aria-hidden="true" />
            {slide.tag}
          </p>

          <h1 className="mt-6 font-display text-[2.55rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
            <MaskedWords text={slide.heading} />
          </h1>

          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ "--d": "700ms" }}
          >
            {slide.sub}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-4" style={{ "--d": "840ms" }}>
            <Link
              to={slide.cta1.to}
              className="rounded-md bg-crest-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-crest-950/40 transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-crest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {slide.cta1.label}
            </Link>
            <Link
              to={slide.cta2.to}
              className="rounded-md border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {slide.cta2.label}
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 ease-expo hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-8 md:flex"
      >
        <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 ease-expo hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-8 md:flex"
      >
        <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-4 sm:px-6">
          <p className="hidden w-56 shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 md:block">
            9.0427&deg; N &middot; 7.4988&deg; E &mdash; Abuja HQ
          </p>

          <div className="flex flex-1 items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.bg}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current}
                className="group flex h-6 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
              >
                <span
                  className={`block h-[3px] overflow-hidden rounded-full transition-all duration-500 ease-expo ${
                    i === current ? "w-14 bg-white/25" : "w-7 bg-white/25 group-hover:bg-white/50"
                  }`}
                >
                  {i === current &&
                    (reducedMotion ? (
                      <span className="block h-full w-full bg-white" />
                    ) : (
                      <span
                        key={current}
                        className="progress-fill block h-full w-full origin-left bg-white"
                        style={{
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                        onAnimationEnd={handleFillEnd}
                      />
                    ))}
                  {i < current && (
                    <span className="block h-full w-full bg-white/70" />
                  )}
                </span>
              </button>
            ))}
          </div>

          <p className="shrink-0 text-right font-mono text-xs tracking-[0.2em] text-white/60">
            <span className="text-white">0{current + 1}</span> / 0{slides.length}
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix = "", label, delay = 0 }) {
  const [ref, inView] = useInView();
  const n = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-revealed" : ""}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      <p className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
        <span className="tabular-nums">{n}</span>
        {suffix && <span className="text-crest-300">{suffix}</span>}
      </p>
      <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
        {label}
      </p>
    </div>
  );
}

const services = [
  {
    title: "Training & Consultancy",
    desc: "Multidisciplinary training, HR management, entrepreneurship and human capital development, project management.",
    icon: AcademicCapIcon,
  },
  {
    title: "ICT & Data Management",
    desc: "Information systems, IT support services, data collection, processing and analysis.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Healthcare Equipment",
    desc: "Sales, supplies, installation, maintenance and repair of medical, surgical and dental equipment.",
    icon: HeartIcon,
  },
  {
    title: "Construction",
    desc: "Industrial, residential, hospital and utility buildings; highways, bridges and interchanges.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Real Estate",
    desc: "Real estate development, management and investment support.",
    icon: HomeIcon,
  },
  {
    title: "Research & Development",
    desc: "Business surveys, data collection, analysis and management consultancy research.",
    icon: BeakerIcon,
  },
];

const values = [
  {
    name: "Integrity",
    description:
      "We say what can be done, what it costs \u2014 and then do exactly that.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Dedication",
    description:
      "Disciplined teams, honest timelines, delivery that holds under pressure.",
    icon: FlagIcon,
  },
  {
    name: "Team Spirit",
    description:
      "Engineers, trainers and analysts working as one crew, one standard.",
    icon: UserGroupIcon,
  },
];

const partners = [
  "Concord Global Integrated Technologies Ltd.",
  "Seal Electro\u2011Medical System Limited",
  "Triad Concepts",
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Crest Latitude Limited — Multidisciplinary Training, Management Consulting, Research & Development, ICT, Healthcare Equipment, Construction & Real Estate in Nigeria."
        keywords="Crest Latitude, management consulting Nigeria, training Abuja, human capital development, construction Nigeria, medical equipment supply"
      />

      <HeroCarousel />

      <section className="relative overflow-hidden bg-ink">
        <LatitudeLines className="text-white/[0.06]" drift />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <Stat value={13} suffix="+" label="Years of operation" delay={0} />
          <Stat value={6} suffix="+" label="Core service areas" delay={90} />
          <Stat value={3} label="Strategic partners" delay={180} />
          <Stat value={2} label="Offices — Abuja & Ibadan" delay={270} />
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="self-start md:sticky md:top-28">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-700">
                What we do
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Six disciplines.
                <br />
                One standard.
              </h2>
              <p className="mt-5 leading-relaxed text-ink/65">
                From the training room to the construction site, every Crest
                Latitude engagement runs on one operating principle — deliver
                what was promised, safely, on time, at a fair price.
              </p>
              <Link
                to="/services"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-crest-700 transition-colors hover:text-crest-600"
              >
                All services in detail
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-300 ease-expo group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          <ul className="divide-y divide-haze border-y border-haze">
            {services.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <Link
                  to="/services"
                  className="group -mx-4 flex items-start gap-5 rounded-lg px-4 py-6 transition-colors duration-300 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crest-600/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-crest-50 text-crest-700 transition-colors duration-300 group-hover:bg-crest-600 group-hover:text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-crest-700">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/60">
                      {item.desc}
                    </span>
                  </span>
                  <ArrowRightIcon
                    className="mt-1 h-5 w-5 shrink-0 -translate-x-1 text-crest-600 opacity-0 transition-all duration-300 ease-expo group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <LatitudeLines className="text-white/[0.07]" drift />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-crest-600/20 blur-[110px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-300">
              Vision &amp; mission
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
              The compass we steer by.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-crest-500/15 text-crest-300">
                  <EyeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">Our vision</h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  To provide hi&#8209;tech, quality and reliable services at
                  affordable prices.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-crest-500/15 text-crest-300">
                  <RocketLaunchIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">Our mission</h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  To adequately meet the comprehensive needs of our clients
                  qualitatively, safely and cost&#8209;effectively — through a
                  dedicated team that transforms ideas into reality within a
                  reasonable time frame.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-700">
              What we stand for
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Values that hold the line.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3 md:gap-8">
            {values.map((value, i) => (
              <Reveal key={value.name} delay={i * 120}>
                <div className="h-full">
                  <span className="block h-0.5 w-10 bg-crest-600" aria-hidden="true" />
                  <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-md bg-crest-50 text-crest-700">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {value.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/60">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-700">
              Strategic alliances
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Partnered for depth.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/65">
              Alliances that extend our reach in technology, electro&#8209;medical
              systems and concept delivery.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {partners.map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-3 rounded-lg border border-haze bg-white px-6 py-4 transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="h-2 w-2 rotate-45 bg-crest-600" aria-hidden="true" />
                  <span className="font-medium text-ink/80">{name}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-crest-800 py-24 text-white">
        <LatitudeLines className="text-white/10" drift />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-crest-500/25 blur-[130px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Let&rsquo;s put your idea on the map.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Tell us what you&rsquo;re building. We&rsquo;ll show you how to
              deliver it — safely, affordably, on schedule.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-white px-9 py-3.5 text-sm font-semibold text-crest-800 transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-crest-50 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Start a conversation
              </Link>
              <a
                href="tel:+2349116661970"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-9 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                Call +234 911 666 1970
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
