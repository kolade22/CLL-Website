import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import LatitudeLines from "../components/LatitudeLines";

const directors = [
  {
    name: "Abiodun Dada Awoleye",
    role: "Chairman",
    details:
      "Alumnus of The Polytechnic, Ibadan (Electronics & Telecommunication); Fellow of Nigeria Association of Technologists in Engineering (FNATE); Accredited Management Development Trainer. Master of Engineering Management in Project Management, University of Ibadan; Fellow, Chartered Institute of Project Managers of Nigeria (FCIPM).",
  },
  {
    name: "Qasim Kehinde Badmus",
    role: "Managing Director",
    details:
      "Experienced in design of Mechanical & Electrical equipment for buildings. Corporate member of Nigeria Society of Engineers (MNSE). Alumnus of The Polytechnic, Ibadan (Electrical Power).",
  },
  {
    name: "Babatunde Sakiru Olasupo",
    role: "Director",
    details:
      "Rich IT experience; MBA from Obafemi Awolowo University. Associate member of Nigerian Institute of Management (AMNIM). Formerly at CBN, Skye Bank Plc.",
  },
  {
    name: "Kolade Moses Awoleye",
    role: "Director",
    details:
      "B.Sc Computer Science, Bowen University; Completed Harvard CS50 with Certification; Rich Experience from various IT companies in Nigeria during Internship.",
  },
];

const management = [
  ["Abiodun Dada Awoleye", "Chairman/CEO", "HND, FNATE, MEM, FCIPM"],
  ["Qasim Badmus", "Managing Director", "MNSE, HND Elect Eng. (Ib)"],
  ["Babatunde Olasupo", "GM, Operations", "AMNIM, MBA, HND Elect (Ib)"],
  [
    "Popoola Olusegun Victor",
    "Chief Operating Officer",
    "PhD (Computer & Information Technology), MSc",
  ],
  [
    "AbdulRahim, Kailani Abdwulwasi",
    "Quality Assurance Manager",
    "MSc (Computer Science), FIMC, AITP, ITSSP, MCPN",
  ],
  [
    "Agboola, Olayinka Abiola",
    "General Manager (IT)",
    "PMP, SAFe, Professional Scrum Master (PSM)",
  ],
  ["Kolade Moses Awoleye", "Director", "B.Sc Computer Science"],
];

const offices = [
  {
    city: "Abuja",
    label: "HQ",
    area: "Garki, Area 11",
    address:
      "Suite A17, Melita Plaza, Plot 599, Gwario Close, Off Gimbiya Street, Area 11, Garki, Abuja.",
    coords: "9.0427\u00b0 N \u00b7 7.4988\u00b0 E",
  },
  {
    city: "Ibadan",
    label: "Branch",
    area: "Yemetu",
    address:
      "No. 35, Adegoke Adelabu Way, Adjacent Lado Filling Station, Yemetu Adeoyo, Yemetu, Ibadan, Oyo State.",
    coords: "7.3940\u00b0 N \u00b7 3.9080\u00b0 E",
  },
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Crest Latitude Limited – a dynamic Nigerian company established in 2013, with expertise in ICT, healthcare, construction, and more."
      />

      <PageHeader
        eyebrow="Who we are"
        title="About Crest Latitude"
        description="A full-fledged Nigerian company, established in 2013 — built to take promising ideas from seed to sustainability."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-700">
                Company profile
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
                Built to take ideas the distance.
              </h2>
            </Reveal>
            <Reveal delay={120} className="mt-6 space-y-5 leading-relaxed text-ink/70">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-crest-700">
                Crest Latitude Limited (CLL) is a dynamic, business-oriented,
                full-fledged Nigerian company established in 2013. CLL
                identifies ideas that show potential and growth and makes them
                come to life. It has the resources to go the distance and
                nurture ideas from seed to sustainability. Its strong venture
                capital coupled with good relationships with international
                partners assures uniqueness and standard service offerings.
              </p>
              <p>
                CLL has vast expertise in managing a number of business
                concerns. The company offers products and services ranging from
                Multidisciplinary Training, Management and Business Consultancy,
                Research &amp; Development, Entrepreneurship &amp; Human Capital
                Development, Project Management, to Information Communication
                Technology, IT Infrastructure, Healthcare, Power generation and
                distribution. The business operations also include construction,
                real estate among others.
              </p>
              <p>
                CLL has been able to achieve this standard courtesy of a
                combined team of directors who have excelled in their various
                fields of profession. Also, CLL painstakingly assembled a crop
                of professionals who are well motivated and grounded in their
                areas of specialization.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="overflow-hidden rounded-xl shadow-soft">
                <img
                  src="/assets/hero-training.jpg"
                  alt="Crest Latitude team in a training session"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-expo hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
                <span>Field note — capacity building</span>
                <span>Est. 2013</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-700">
              Leadership
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
              Board of directors
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {directors.map((person, i) => (
              <Reveal key={person.name} delay={(i % 2) * 120}>
                <article className="h-full rounded-xl border border-haze bg-white p-7 transition-all duration-500 ease-expo hover:-translate-y-1 hover:shadow-soft">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-crest-700">
                    {person.role}
                  </p>
                  <h3 className="mt-2.5 font-display text-xl font-semibold text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {person.details}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-700">
              Operations
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
              Management team
            </h2>
          </Reveal>

          <Reveal delay={140} className="mt-10">
            <div className="overflow-x-auto rounded-xl border border-haze shadow-soft">
              <table className="min-w-full bg-white">
                <caption className="sr-only">
                  Crest Latitude management team members and qualifications
                </caption>
                <thead className="bg-ink">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
                      Name
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
                      Designation
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
                      Qualification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {management.map(([name, role, qualification]) => (
                    <tr
                      key={name}
                      className="border-t border-haze transition-colors duration-200 hover:bg-crest-50/50"
                    >
                      <td className="px-5 py-3.5 text-sm font-medium text-ink">
                        {name}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-ink/70">{role}</td>
                      <td className="px-5 py-3.5 text-sm text-ink/60">
                        {qualification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <LatitudeLines className="text-white/[0.07]" drift />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-crest-300">
              Where we operate
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Two offices. One standard.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={i * 130}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
                  <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-crest-300">
                    <span>
                      {office.city} — {office.label}
                    </span>
                    <span className="h-1.5 w-1.5 rotate-45 bg-ember" aria-hidden="true" />
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold">
                    {office.area}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {office.address}
                  </p>
                  <p className="mt-4 font-mono text-xs tracking-wider text-white/40">
                    {office.coords}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
