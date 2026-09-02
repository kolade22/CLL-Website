import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  HeartIcon,
  SignalIcon,
  BuildingOffice2Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import LatitudeLines from "../components/LatitudeLines";

const services = [
  {
    title: "Training & Consultancy",
    description:
      "Multidisciplinary training and consultancy that builds capability where it matters — from the boardroom to the workshop floor. We design and deliver programmes in human resource management, entrepreneurship, human capital development and project management.",
    Icon: AcademicCapIcon,
  },
  {
    title: "ICT & Data Management",
    description:
      "Information and communication technology services covering information systems, computer science applications, IT support services, and end-to-end data collection, processing and analysis.",
    Icon: ComputerDesktopIcon,
  },
  {
    title: "Healthcare Equipment",
    description:
      "Medical, surgical and dental equipment — sold, supplied, installed and kept running. We also operate a cost-sharing service for training and medical equipment, making quality healthcare hardware accessible.",
    Icon: HeartIcon,
  },
  {
    title: "Broadcasting & Telecommunications",
    description:
      "Satellite broadcasting and transmission services, with full installation and maintenance support for broadcasters and telecommunications operators.",
    Icon: SignalIcon,
  },
  {
    title: "Construction",
    description:
      "Industrial, residential, hospital and utility buildings; highways, bridges and interchanges; plus the electrical and mechanical systems that bring them to life. Designed, built and delivered with engineering excellence.",
    Icon: BuildingOffice2Icon,
  },
  {
    title: "Real Estate",
    description:
      "Real estate development and management — from land to finished property, with management and investment support for owners and investors.",
    Icon: HomeIcon,
  },
];

export default function Services() {
  return (
    <>
      <PageMeta
        title="Our Services"
        description="Comprehensive services from ICT and healthcare to construction and real estate – Crest Latitude Limited, Nigeria."
      />

      <PageHeader
        eyebrow="What we do"
        title="Six disciplines, one standard."
        description="Every engagement — from a two-day workshop to a multi-year build — runs on the same principle: deliver what was promised, safely and on time."
      />

      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv, i) => (
              <Reveal key={srv.title} delay={(i % 3) * 100}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-haze bg-white p-7 transition-all duration-500 ease-expo hover:-translate-y-1 hover:shadow-soft">
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-crest-600 to-crest-400 transition-transform duration-500 ease-expo group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-crest-50 text-crest-700 transition-colors duration-300 group-hover:bg-crest-600 group-hover:text-white">
                    <srv.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-semibold text-ink">
                    {srv.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {srv.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <LatitudeLines className="text-white/[0.07]" drift />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Not sure which discipline you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">
              Tell us the problem — we&rsquo;ll bring the right team.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-crest-800 transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-crest-50 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Start a conversation
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
