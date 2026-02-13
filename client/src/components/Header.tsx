import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
              alt="Mastering Digital"
              className="h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all ${
                  servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <a
                  href="/services/strategy-channel-marketing"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                >
                  <div className="font-semibold">Strategy & Channel Marketing</div>
                  <div className="text-xs text-gray-500 mt-1">Multi-channel growth strategy</div>
                </a>
                <a
                  href="/web-design"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-purple transition-colors"
                >
                  <div className="font-semibold">Web Design & Conversion</div>
                  <div className="text-xs text-gray-500 mt-1">High-converting websites</div>
                </a>
                <a
                  href="/services/ai-implementation"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-cyan transition-colors"
                >
                  <div className="font-semibold">AI Implementation</div>
                  <div className="text-xs text-gray-500 mt-1">Automation that works</div>
                </a>
                <a
                  href="/services/google-ads"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                >
                  <div className="font-semibold">PPC Google Ads</div>
                  <div className="text-xs text-gray-500 mt-1">Paid search campaigns</div>
                </a>
                <a
                  href="/services/seo"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green transition-colors"
                >
                  <div className="font-semibold">SEO Services</div>
                  <div className="text-xs text-gray-500 mt-1">Organic growth strategy</div>
                </a>
                <a
                  href="/services/meta-ads"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-purple transition-colors"
                >
                  <div className="font-semibold">Meta Ads & Social</div>
                  <div className="text-xs text-gray-500 mt-1">Social media advertising</div>
                </a>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <a
                    href="/services"
                    className="block px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-gray-50 transition-colors"
                  >
                    View All Services →
                  </a>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors flex items-center gap-1">
                Who We Serve
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all ${
                  industriesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <a
                  href="/who-we-serve/home-services"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                >
                  <div className="font-semibold">Home Services</div>
                  <div className="text-xs text-gray-500 mt-1">HVAC, plumbing, roofing</div>
                </a>
                <a
                  href="/who-we-serve/ecommerce"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-green transition-colors"
                >
                  <div className="font-semibold">E-commerce</div>
                  <div className="text-xs text-gray-500 mt-1">Shopify & online stores</div>
                </a>
                <a
                  href="/who-we-serve/real-estate"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-cyan transition-colors"
                >
                  <div className="font-semibold">Multifamily Real Estate</div>
                  <div className="text-xs text-gray-500 mt-1">Lease-ups & properties</div>
                </a>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <a
                    href="/who-we-serve"
                    className="block px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-gray-50 transition-colors"
                  >
                    View All Industries →
                  </a>
                </div>
              </div>
            </div>

            <a href="/results" className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors">
              Results
            </a>
            <a href="/blog" className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors">
              Blog
            </a>
            <a href="/free-tools" className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors">
              Free Tools
            </a>
            <a href="/about" className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors">
              Who We Are
            </a>
            <a href="/contact" className="text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Book a Strategy Session
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96">
              <nav className="flex flex-col gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="/services/strategy-channel-marketing" className="text-gray-700 hover:text-brand-blue" onClick={() => setIsOpen(false)}>
                      Strategy & Channel Marketing
                    </a>
                    <a href="/web-design" className="text-gray-700 hover:text-brand-purple" onClick={() => setIsOpen(false)}>
                      Web Design & Conversion
                    </a>
                    <a href="/services/ai-implementation" className="text-gray-700 hover:text-brand-cyan" onClick={() => setIsOpen(false)}>
                      AI Implementation
                    </a>
                    <a href="/services/google-ads" className="text-gray-700 hover:text-brand-orange" onClick={() => setIsOpen(false)}>
                      PPC Google Ads
                    </a>
                    <a href="/services/seo" className="text-gray-700 hover:text-brand-green" onClick={() => setIsOpen(false)}>
                      SEO Services
                    </a>
                    <a href="/services/meta-ads" className="text-gray-700 hover:text-brand-purple" onClick={() => setIsOpen(false)}>
                      Meta Ads & Social
                    </a>
                    <a href="/services" className="text-brand-blue font-semibold" onClick={() => setIsOpen(false)}>
                      View All Services →
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Who We Serve</h3>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="/who-we-serve/home-services" className="text-gray-700 hover:text-brand-orange" onClick={() => setIsOpen(false)}>
                      Home Services
                    </a>
                    <a href="/who-we-serve/ecommerce" className="text-gray-700 hover:text-brand-green" onClick={() => setIsOpen(false)}>
                      E-commerce
                    </a>
                    <a href="/who-we-serve/real-estate" className="text-gray-700 hover:text-brand-cyan" onClick={() => setIsOpen(false)}>
                      Multifamily Real Estate
                    </a>
                    <a href="/who-we-serve" className="text-brand-blue font-semibold" onClick={() => setIsOpen(false)}>
                      View All Industries →
                    </a>
                  </div>
                </div>

                <a href="/results" className="text-gray-700 hover:text-brand-blue font-medium" onClick={() => setIsOpen(false)}>
                  Results
                </a>
                <a href="/blog" className="text-gray-700 hover:text-brand-blue font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </a>
                <a href="/free-tools" className="text-gray-700 hover:text-brand-blue font-medium" onClick={() => setIsOpen(false)}>
                  Free Tools
                </a>
                <a href="/about" className="text-gray-700 hover:text-brand-blue font-medium" onClick={() => setIsOpen(false)}>
                  Who We Are
                </a>
                <a href="/contact" className="text-gray-700 hover:text-brand-blue font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </a>

                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold mt-4"
                >
                  <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                    Book a Strategy Session
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
