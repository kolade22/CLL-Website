import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";
import LatitudeLines from "../components/LatitudeLines";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Crest Latitude Limited</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-ink py-24 text-white">
        <LatitudeLines className="text-white/[0.08]" drift />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-crest-300">
            404 — off the charts
          </p>
          <p className="mt-8 font-display text-8xl font-semibold tracking-tight text-white/95">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            This page drifted off our map.
          </h1>
          <p className="mt-4 leading-relaxed text-white/60">
            The link may be broken, or the page may have moved.
            Let&rsquo;s get you back on course.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-crest-800 transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-crest-50 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
