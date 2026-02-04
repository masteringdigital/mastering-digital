/*
DESIGN: Dark SaaS Aesthetic
- Background: #1A1A1A
- Font: Inter (400 for nav, 600 for CTA)
- Accent Purple #7C3AED for CTA
*/

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] border-b border-[#2A2A2A]">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
              alt="Mastering Digital"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Results
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6"
            >
              Book a Strategy Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2A2A2A]">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm text-gray-300 hover:text-white text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-sm text-gray-300 hover:text-white text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-sm text-gray-300 hover:text-white text-left"
              >
                Results
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold w-full"
              >
                Book a Strategy Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
