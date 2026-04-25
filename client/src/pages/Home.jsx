import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import PageMeta from "../components/PageMeta";

const slides = [
  {
    bg: "../public/images/meeting.jpg",
    tag: "Professionalism Meets Efficiency",
    heading: "Transforming Ideas Into Reality",
    sub: "Multidisciplinary Training, Management & Business Consultancy, Research & Development — delivered across Nigeria since 2013.",
    cta1: { label: "Our Services", to: "/services" },
    cta2: { label: "Contact Us", to: "/contact" },
  },
  {
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    tag: "Human Capital Development",
    heading: "Building Nigeria's Workforce",
    sub: "Executive training, entrepreneurship development, and professional capacity building programs for individuals and organisations.",
    cta1: { label: "Explore Training", to: "/services" },
    cta2: { label: "Get In Touch", to: "/contact" },
  },
  {
    bg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    tag: "Construction & Real Estate",
    heading: "Building Infrastructure That Lasts",
    sub: "Industrial, residential, hospitals, highways and bridges — we design, build and deliver with engineering excellence.",
    cta1: { label: "Our Projects", to: "/services" },
    cta2: { label: "Talk To Us", to: "/contact" },
  },
  {
    bg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    tag: "Healthcare Equipment",
    heading: "Equipping Nigeria's Health Sector",
    sub: "Supply, installation, maintenance and repair of medical, surgical and dental equipment for hospitals and clinics nationwide.",
    cta1: { label: "View Services", to: "/services" },
    cta2: { label: "Request Quote", to: "/contact" },
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative h-[90vh] min-h-[560px] overflow-hidden"
      aria-label="Hero carousel"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.bg})`,
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <span className="inline-block bg-green-700/80 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          {slide.tag}
        </span>
        <p className="text-green-300 font-heading font-semibold text-lg md:text-xl mb-2 tracking-wide">
          Crest Latitude Ltd.
        </p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-5 max-w-4xl leading-tight drop-shadow-lg">
          {slide.heading}
        </h1>
        <p className="text-base md:text-xl mb-8 max-w-2xl text-gray-200 leading-relaxed">
          {slide.sub}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={slide.cta1.to}
            className="bg-green-700 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            {slide.cta1.label}
          </Link>
          <Link
            to={slide.cta2.to}
            className="bg-white/15 hover:bg-white/25 border border-white/60 text-white font-semibold py-3 px-8 rounded-md transition-all duration-200 backdrop-blur-sm"
          >
            {slide.cta2.label}
          </Link>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white text-2xl w-11 h-11 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
      >
        ‹
      </button>
      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white text-2xl w-11 h-11 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-7 h-2.5"
                : "bg-white/40 w-2.5 h-2.5 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function getValueDescription(value) {
  if (value === "Integrity")
    return "We uphold honesty and strong moral principles in all dealings.";
  if (value === "Dedication")
    return "We are committed to delivering quality results on time.";
  if (value === "Team Spirit")
    return "We collaborate across disciplines to achieve excellence.";
  return "";
}
function getValueIcon(value) {
  if (value === "Integrity") return "🎯";
  if (value === "Dedication") return "💡";
  if (value === "Team Spirit") return "🤝";
  return "⭐";
}

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Crest Latitude Limited — Multidisciplinary Training, Management Consulting, Research & Development, ICT, Healthcare Equipment, Construction & Real Estate in Nigeria."
        keywords="Crest Latitude, management consulting Nigeria, training Abuja, human capital development, construction Nigeria, medical equipment supply"
      />

      <HeroCarousel />

      {/* Stats bar */}
      <section className="bg-accent text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "11+", label: "Years in Business" },
            { num: "6+", label: "Service Areas" },
            { num: "3", label: "Strategic Partners" },
            { num: "2", label: "Office Locations" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-heading font-bold text-green-300">
                {s.num}
              </p>
              <p className="text-sm text-gray-300 mt-1 uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow p-8 border-t-4 border-brand-600">
            <div className="text-3xl mb-3">🔭</div>
            <h2 className="text-2xl font-heading font-bold text-accent mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide hi-tech, quality and reliable services at affordable
              price.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 border-t-4 border-accent">
            <div className="text-3xl mb-3">🎯</div>
            <h2 className="text-2xl font-heading font-bold text-accent mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To adequately meet the comprehensive needs of our clients
              qualitatively, safely and cost-effectively through a dedicated
              team that transforms ideas into reality within a reasonable time
              frame.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand-600 font-semibold uppercase tracking-widest text-sm mb-2">
            What We Stand For
          </p>
          <h2 className="text-3xl font-heading font-bold text-accent mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {["Integrity", "Dedication", "Team Spirit"].map((value) => (
              <div
                key={value}
                className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100"
              >
                <span className="text-4xl">{getValueIcon(value)}</span>
                <h3 className="text-xl font-heading font-semibold text-brand-600 mt-4 mb-2">
                  {value}
                </h3>
                <p className="text-gray-600">{getValueDescription(value)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand-600 font-semibold uppercase tracking-widest text-sm mb-2">
            What We Do
          </p>
          <h2 className="text-3xl font-heading font-bold text-accent mb-4">
            Our Key Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            A wide range of professional services designed to meet the complete
            needs of Nigerian businesses and individuals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Training & Consultancy",
                desc: "Multidisciplinary training, executive coaching, business consulting and human capital development.",
                icon: "📚",
              },
              {
                title: "ICT & Data Management",
                desc: "Information systems, computer science, data processing, analysis and IT support services.",
                icon: "💻",
              },
              {
                title: "Healthcare Equipment",
                desc: "Sales, supplies, installation, maintenance and repair of medical and surgical equipment.",
                icon: "🏥",
              },
              {
                title: "Construction",
                desc: "Industrial, residential, hospitals and utility buildings; highways, bridges and interchanges.",
                icon: "🏗️",
              },
              {
                title: "Real Estate",
                desc: "Real estate development, property management and investment support.",
                icon: "🏠",
              },
              {
                title: "Research & Development",
                desc: "Business surveys, data collection, analysis and management consultancy research.",
                icon: "🔬",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100 text-left"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-lg font-heading font-semibold text-accent mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-block bg-accent hover:bg-accent-light text-white font-semibold py-3 px-10 rounded-md transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Strategic Alliances
          </p>
          <h2 className="text-3xl font-heading font-bold text-accent mb-10">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Concord Global Integrated Technologies Ltd.",
                icon: "🔧",
              },
              { name: "Seal Electro‑Medical System Limited", icon: "🏥" },
              { name: "Triad Concepts", icon: "💼" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 px-6 py-4 bg-white shadow rounded-xl border border-gray-100 hover:border-green-500 hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl">{p.icon}</span>
                <span className="font-medium text-gray-700">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
            Let's discuss how we can transform your ideas into reality — right
            here in Nigeria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-10 rounded-md transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Get In Touch →
            </Link>
            <a
              href="tel:+2349116661970"
              className="border border-white/60 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-all duration-200"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
