import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              Accredian
            </h2>

            <p className="mt-4 text-slate-600">
              Credentials that matter.
            </p>

            <FaFacebook className="h-6 w-6" />
<FaLinkedin className="h-6 w-6" />
<FaTwitter className="h-6 w-6" />
<FaInstagram className="h-6 w-6" />
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>About</li>
              <li>Blog</li>
              <li>Why Accredian</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <p className="text-slate-600">
              enterprise@accredian.com
            </p>

            <p className="mt-3 text-slate-600">
              Gurugram, Haryana
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-slate-500">
          © 2026 Accredian Enterprise Clone
        </div>
      </Container>
    </footer>
  );
}