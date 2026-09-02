import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
      isActive
        ? "bg-crest-50 text-crest-700"
        : "text-ink/75 hover:bg-mist hover:text-ink"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-haze bg-white shadow-soft"
          : "border-transparent bg-white/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Link
            to="/"
            className="shrink-0 rounded-md transition-opacity duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crest-600/40"
            aria-label="Crest Latitude Limited — Home"
          >
            <img
              src={logo}
              alt="Crest Latitude Logo"
              className="h-11 w-auto object-contain md:h-12"
            />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="group relative rounded-sm px-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crest-600/40"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={
                        isActive ? "text-crest-700" : "text-ink/70 group-hover:text-ink"
                      }
                    >
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-crest-600 transition-transform duration-300 ease-expo ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-crest-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:bg-crest-500 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crest-600/40"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-ink/80 transition-colors hover:bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-crest-600/40 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="menu-panel border-t border-haze/70 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-3 sm:px-6">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/contact"
              className="mt-3 block rounded-md bg-crest-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-crest-500"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
