export default function Footer() {
  return (
    <footer>
      {/* Top Section - White Background */}
      <div className="bg-white border-t border-gray-200">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
                alt="Mastering Digital"
                className="h-10 mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Growth marketing for home services, e-commerce, and multifamily.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/who-we-serve" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Who We Serve
                  </a>
                </li>
                <li>
                  <a href="/results" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Who We Serve */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Who We Serve</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/who-we-serve/home-services" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Home Services
                  </a>
                </li>
                <li>
                  <a href="/who-we-serve/ecommerce" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="/who-we-serve/real-estate" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    Multifamily Real Estate
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:roi@masteringdigital.com" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    roi@masteringdigital.com
                  </a>
                </li>
                <li>
                  <a href="tel:+13053767910" className="text-gray-600 hover:text-brand-blue text-sm transition-colors">
                    305-376-7910
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Blue Background */}
      <div className="bg-brand-blue">
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
