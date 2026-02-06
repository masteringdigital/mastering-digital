export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
              alt="Mastering Digital"
              className="h-10 mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Growth marketing for home services, e-commerce, and multifamily.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-white/80 hover:text-white text-sm transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/industries" className="text-white/80 hover:text-white text-sm transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/results" className="text-white/80 hover:text-white text-sm transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a href="/industries#home-services" className="text-white/80 hover:text-white text-sm transition-colors">
                  Home Services
                </a>
              </li>
              <li>
                <a href="/industries#ecommerce" className="text-white/80 hover:text-white text-sm transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="/industries#lease-ups" className="text-white/80 hover:text-white text-sm transition-colors">
                  Lease-Ups
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@masteringdigital.com" className="text-white/80 hover:text-white text-sm transition-colors">
                  info@masteringdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Mastering Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
