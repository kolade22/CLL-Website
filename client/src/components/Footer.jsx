import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const serviceLinks = [
  "Training & Consultancy",
  "ICT & Data Management",
  "Healthcare Equipment",
  "Construction",
  "Real Estate",
  "Research & Development",
];

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-semibold text-white">
              Crest Latitude <span className="text-crest-300">Limited</span>
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              Transforming ideas into reality
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A Nigerian multidisciplinary company — training the people,
              building the systems, supplying the equipment — since 2013.
            </p>
            <p className="mt-6 font-mono text-xs text-white/40">RC: 1104810</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="transition-colors duration-200 hover:text-crest-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors duration-200 hover:text-crest-300">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors duration-200 hover:text-crest-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors duration-200 hover:text-crest-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <Link
                    to="/services"
                    className="transition-colors duration-200 hover:text-crest-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-crest-300" aria-hidden="true" />
                <span>
                  Suite A17, Melita Plaza, Plot 599, Gwario Close, Off Gimbiya
                  Street, Area 11, Garki, Abuja.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="mt-0.5 h-4 w-4 shrink-0 text-crest-300" aria-hidden="true" />
                <span>
                  <a
                    href="mailto:info@crestlatitude.ng"
                    className="block transition-colors duration-200 hover:text-crest-300"
                  >
                    info@crestlatitude.ng
                  </a>
                  <a
                    href="mailto:crestlatitudeltd@gmail.com"
                    className="block transition-colors duration-200 hover:text-crest-300"
                  >
                    crestlatitudeltd@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-crest-300" aria-hidden="true" />
                <span>
                  <a
                    href="tel:+2349116661970"
                    className="block transition-colors duration-200 hover:text-crest-300"
                  >
                    +234 911 666 1970
                  </a>
                  <a
                    href="tel:+2349134384184"
                    className="block transition-colors duration-200 hover:text-crest-300"
                  >
                    +234 913 438 4184
                  </a>
                  <a
                    href="tel:+2348058431347"
                    className="block transition-colors duration-200 hover:text-crest-300"
                  >
                    +234 805 843 1347
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:px-6 lg:px-8">
          <span>&copy; {new Date().getFullYear()} Crest Latitude Limited</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rotate-45 bg-ember" aria-hidden="true" />
            9.0427&deg; N &middot; 7.4988&deg; E &mdash; Abuja &middot; 7.3940&deg; N &middot; 3.9080&deg; E &mdash; Ibadan
          </span>
        </div>
      </div>
    </footer>
  );
}
