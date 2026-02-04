/*
DESIGN: Professional Modern Marketing
- Black background footer (#0B0B0B)
- White text with muted gray links
- Green hover states for links
*/

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo + Tagline */}
          <div className="col-span-1">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
              alt="Mastering Digital"
              className="h-10 w-auto mb-4"
            />
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Growth marketing for home services, e-commerce, and multifamily.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("results")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-choose-us")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="font-display text-white mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  Home Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  Lease-Ups
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@masteringdigital.com"
                  className="text-[#9CA3AF] hover:text-brand-green text-sm"
                >
                  info@masteringdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9CA3AF] text-sm">
              © 2026 Mastering Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-[#9CA3AF] hover:text-brand-green text-sm">
                Privacy Policy
              </button>
              <button className="text-[#9CA3AF] hover:text-brand-green text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
