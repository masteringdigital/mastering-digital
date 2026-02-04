/*
DESIGN: Dark SaaS Aesthetic
- Background: #1A1A1A
- Font: Inter
- Minimal, clean footer
*/

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
              alt="Mastering Digital"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Strategy-led growth marketing for home services, e-commerce, and multifamily.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Strategy & Channel Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Web Design & Conversion
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  AI Implementation
                </button>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Home Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Lease-Ups
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@masteringdigital.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@masteringdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Mastering Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
