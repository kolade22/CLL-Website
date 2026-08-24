import PageMeta from "../components/PageMeta";

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about Crest Latitude Limited – a dynamic Nigerian company established in 2013, with expertise in ICT, healthcare, construction, and more."
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-accent mb-8">
            About Crest Latitude Limited
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-brand-600 mb-4">
                Company Profile
              </h2>
              <p className="text-gray-700 mb-4">
                Crest Latitude Limited (CLL) is a dynamic, business‑oriented,
                full‑fledged Nigerian company established in 2013. CLL
                identifies ideas that show potential and growth and makes them
                come to life. It has the resources to go the distance and
                nurture ideas from seed to sustainability. Its strong venture
                capital coupled with good relationships with international
                partners assures uniqueness and standard service offerings.
              </p>
              <p className="text-gray-700 mb-4">
                CLL has vast expertise in managing a number of business
                concerns. The company offers products and services ranging from
                Multidisciplinary Training, Management and Business Consultancy,
                Research & Development, Entrepreneurship & Human Capital
                Development, Project Management, to Information Communication
                Technology, IT Infrastructure, Healthcare, Power generation and
                distribution. The business operations also include construction,
                real estate among others.
              </p>
              <p className="text-gray-700">
                CLL has been able to achieve this standard courtesy of a
                combined team of directors who have excelled in their various
                fields of profession. Also, CLL painstakingly assembled a crop
                of professionals who are well motivated and grounded in their
                areas of specialization.
              </p>
            </div>
            <div>
              <img
                src="/images/meeting.jpg"
                alt="Crest Latitude team in a strategy meeting"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-accent mb-12 text-center">
            Board of Directors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-accent">
                    {person.name}
                  </h3>
                  <p className="text-brand-600 font-medium mb-2">
                    {person.role}
                  </p>
                  <p className="text-gray-600 text-sm">{person.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-accent mb-8">
            Management Team
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-accent text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Designation</th>
                  <th className="py-3 px-4 text-left">Qualification</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-4">Abiodun Dada Awoleye</td>
                  <td className="py-3 px-4">Chairman/CEO</td>
                  <td className="py-3 px-4">HND, FNATE, MEM, FCIPM</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Qasim Badmus</td>
                  <td className="py-3 px-4">Managing Director</td>
                  <td className="py-3 px-4">MNSE, HND Elect Eng.(Ib)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Babatunde Olasupo</td>
                  <td className="py-3 px-4">GM, Operations</td>
                  <td className="py-3 px-4">AMNIM, MBA, HND Elect (Ib)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Popoola Olusegun Victor</td>
                  <td className="py-3 px-4">Chief Operating Officer</td>
                  <td className="py-3 px-4">
                    PhD (Computer &amp; Information Technology), MSc
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">AbdulRahim, Kailani Abdwulwasi</td>
                  <td className="py-3 px-4">Quality Assurance Manager</td>
                  <td className="py-3 px-4">
                    MSc (Computer Science), FIMC, AITP, ITSSP, MCPN
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Agboola, Olayinka Abiola</td>
                  <td className="py-3 px-4">General Manager (IT)</td>
                  <td className="py-3 px-4">
                    PMP, SAFe, Professional Scrum Master (PSM)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Kolade Moses Awoleye</td>
                  <td className="py-3 px-4">Director</td>
                  <td className="py-3 px-4">B.Sc Computer Science</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
