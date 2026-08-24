import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Crest Latitude Limited</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="py-24 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-7xl font-heading font-bold text-accent mb-4">404</p>
          <h1 className="text-2xl font-heading font-semibold text-gray-800 mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold py-3 px-8 rounded-md transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
