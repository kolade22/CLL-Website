import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-heading text-lg mb-4">
            Crest Latitude Ltd.
          </h3>
          <p className="text-sm">
            Transforming ideas into reality across Nigeria. Multidisciplinary
            Training, ICT, Healthcare, Real Estate, and beyond.
          </p>
          <br></br>
          <br></br>
          <p className="text-sm">RC: 1104810</p>
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
          <p className="text-sm">
            Suite A17, Melita Plaza, Plot 599, Gwarjo Close, Off Gimbiya Close,
            Area 11, Garki, Abuja, Nigeria.
          </p>
          <br></br>
          <p className="text-sm">info@crestlatitude.ng</p>
          <p className="text-sm">crestlatitudeltd@gmail.com</p>
          <br></br>
          <p className="text-sm">+234 911 666 1970</p>
          <p className="text-sm">+234 805 843 1347</p>
          <p className="text-sm">+234 913 438 4184</p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Crest Latitude Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
