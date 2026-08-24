import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-heading text-lg mb-4">
            Crest Latitude Ltd.
          </h3>
          <p className="text-sm leading-relaxed">
            Transforming ideas into reality across Nigeria. Multidisciplinary
            Training, ICT, Healthcare, Real Estate, and beyond.
          </p>
          <p className="text-sm mt-6">RC: 1104810</p>
        </div>
        <div>
          <h4 className="text-white font-heading mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-heading mb-4">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPinIcon
                className="h-5 w-5 mt-0.5 text-brand-400 shrink-0"
                aria-hidden="true"
              />
              <span>
                Suite A17, Melita Plaza, Plot 599, Gwario Close, Off Gimbiya
                Street, Area 11, Garki, Abuja, Nigeria.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <EnvelopeIcon
                className="h-5 w-5 mt-0.5 text-brand-400 shrink-0"
                aria-hidden="true"
              />
              <span>
                <a
                  href="mailto:info@crestlatitude.ng"
                  className="block hover:text-white transition"
                >
                  info@crestlatitude.ng
                </a>
                <a
                  href="mailto:crestlatitudeltd@gmail.com"
                  className="block hover:text-white transition"
                >
                  crestlatitudeltd@gmail.com
                </a>
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <PhoneIcon
                className="h-5 w-5 mt-0.5 text-brand-400 shrink-0"
                aria-hidden="true"
              />
              <span>
                <a
                  href="tel:+2349116661970"
                  className="block hover:text-white transition"
                >
                  +234 911 666 1970
                </a>
                <a
                  href="tel:+2348058431347"
                  className="block hover:text-white transition"
                >
                  +234 805 843 1347
                </a>
                <a
                  href="tel:+2349134384184"
                  className="block hover:text-white transition"
                >
                  +234 913 438 4184
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Crest Latitude Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
