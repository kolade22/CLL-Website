import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  HeartIcon,
  SignalIcon,
  BuildingOffice2Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import PageMeta from "../components/PageMeta";

const services = [
  {
    title: "Training & Consultancy",
    description:
      "Multidisciplinary Training. Human resource management. Entrepreneurship & Human Capital Development, Project Management.",
    icon: AcademicCapIcon,
  },
  {
    title: "Information & Communication Technology",
    description:
      "Information systems, computer science, IT support services, data collection, processing & analysis.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Healthcare Equipment",
    description:
      "Cost‑sharing service for training and medical equipment. Medical equipment sales, supplies, installation, maintenance & repairs.",
    icon: HeartIcon,
  },
  {
    title: "Broadcasting & Telecommunications",
    description:
      "Satellite broadcasting, transmission services, installation and maintenance.",
    icon: SignalIcon,
  },
  {
    title: "Construction",
    description:
      "Industrial, residential, hospital and utility buildings; highway, bridges and interchanges; electrical & mechanical systems.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Real Estate",
    description: "Real estate development and management.",
    icon: HomeIcon,
  },
];

export default function Services() {
  return (
    <>
      <PageMeta
        title="Our Services"
        description="Comprehensive services from ICT and healthcare to construction and real estate – Crest Latitude Limited, Nigeria."
      />
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-accent mb-8 text-center">
            Our Services
          </h1>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer a wide range of professional services designed to meet the
            complete needs of our clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div
                key={srv.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <srv.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-accent mt-4 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600">{srv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
