import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import PageMeta from "../components/PageMeta";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with Crest Latitude Limited – offices in Abuja and Ibadan, Nigeria."
      />
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-accent mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-center text-gray-500 mb-12">
            We'd love to hear from you. Our team will respond within 24 hours.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-brand-600 mb-6">
                Get In Touch
              </h2>
              <div className="space-y-5 text-gray-700">
                <div className="flex gap-3 items-start">
                  <MapPinIcon
                    className="h-6 w-6 mt-0.5 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-accent mb-1">
                      Abuja Office
                    </p>
                    <p className="text-sm leading-relaxed">
                      Suite A17, Melita Plaza, Plot 599, Gwario Close,
                      <br />
                      Off Gimbiya Street, Area 11, Garki, Abuja, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPinIcon
                    className="h-6 w-6 mt-0.5 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-accent mb-1">
                      Ibadan Office
                    </p>
                    <p className="text-sm leading-relaxed">
                      No. 35, Adegoke Adelabu Way, Adjacent Lado Filling
                      Station,
                      <br />
                      Yemetu Adeoyo, Yemetu, Ibadan, Oyo State.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <PhoneIcon
                    className="h-6 w-6 mt-0.5 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-accent mb-1">Phone</p>
                    <a
                      href="tel:+2349116661970"
                      className="text-sm block hover:text-brand-600 transition"
                    >
                      +234 911 666 1970
                    </a>
                    <a
                      href="tel:+2349134384184"
                      className="text-sm block hover:text-brand-600 transition"
                    >
                      +234 913 438 4184
                    </a>
                    <a
                      href="tel:+2348058431347"
                      className="text-sm block hover:text-brand-600 transition"
                    >
                      +234 805 843 1347
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <EnvelopeIcon
                    className="h-6 w-6 mt-0.5 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-accent mb-1">Email</p>
                    <a
                      href="mailto:info@crestlatitude.ng"
                      className="text-sm block hover:text-brand-600 transition"
                    >
                      info@crestlatitude.ng
                    </a>
                    <a
                      href="mailto:crestlatitudeltd@gmail.com"
                      className="text-sm block hover:text-brand-600 transition"
                    >
                      crestlatitudeltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow">
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
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold text-brand-600 mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
