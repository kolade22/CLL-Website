import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

const offices = [
  {
    name: "Abuja Office",
    address: (
      <>
        Suite A17, Melita Plaza, Plot 599, Gwario Close,
        <br />
        Off Gimbiya Street, Area 11, Garki, Abuja, Nigeria.
      </>
    ),
    coords: "9.0427\u00b0 N \u00b7 7.4988\u00b0 E",
  },
  {
    name: "Ibadan Office",
    address: (
      <>
        No. 35, Adegoke Adelabu Way, Adjacent Lado Filling Station,
        <br />
        Yemetu Adeoyo, Yemetu, Ibadan, Oyo State.
      </>
    ),
    coords: "7.3940\u00b0 N \u00b7 3.9080\u00b0 E",
  },
];

const phones = [
  { href: "tel:+2349116661970", label: "+234 911 666 1970" },
  { href: "tel:+2349134384184", label: "+234 913 438 4184" },
  { href: "tel:+2348058431347", label: "+234 805 843 1347" },
];

const emails = [
  { href: "mailto:info@crestlatitude.ng", label: "info@crestlatitude.ng" },
  { href: "mailto:crestlatitudeltd@gmail.com", label: "crestlatitudeltd@gmail.com" },
];

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Crest Latitude Limited – offices in Abuja and Ibadan, Nigeria."
      />

      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        description="Projects, training, equipment or partnerships — tell us what you need and we'll respond within one working day."
      />

      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div
                    key={office.name}
                    className="rounded-xl border border-haze bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-crest-50 text-crest-700">
                        <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-ink">
                          {office.name}
                        </h2>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                          {office.address}
                        </p>
                        <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-crest-700/80">
                          {office.coords}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-haze bg-white p-6">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-crest-700" aria-hidden="true" />
                    <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                      Phone
                    </h2>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="font-mono text-sm text-ink/70 transition-colors duration-200 hover:text-crest-700"
                        >
                          {phone.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-haze bg-white p-6">
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="h-5 w-5 text-crest-700" aria-hidden="true" />
                    <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                      Email
                    </h2>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {emails.map((email) => (
                      <li key={email.href}>
                        <a
                          href={email.href}
                          className="break-all font-mono text-sm text-ink/70 transition-colors duration-200 hover:text-crest-700"
                        >
                          {email.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-4 overflow-hidden rounded-xl border border-haze shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2310086894063!2d7.498843188854973!3d9.0426804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0beb366120b1%3A0x45bc0d7923c58559!2sMelita%20plaza!5e0!3m2!1sen!2sus!4v1777072292015!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crest Latitude Abuja Office Location"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="self-start">
            <div className="rounded-xl border border-haze bg-white p-7 shadow-soft md:p-8">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Send a message
              </h2>
              <p className="mb-7 mt-1.5 text-sm text-ink/55">
                Fields marked <span className="text-red-500">*</span> are
                required.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
