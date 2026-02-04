/*
DESIGN: Kinetic Gradient Futurism
- Glassmorphism navigation with backdrop blur
- Smooth scroll behavior for anchor links
- Gradient CTA button with hover animation
*/

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

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
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/TVxNADekNFIUEzTq.jpg"
                alt="Mastering Digital"
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("final-cta")}
              className="gradient-mesh text-white font-display px-6 py-3 hover:scale-105 transition-transform"
            >
              Book a Strategy Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("final-cta")}
                className="gradient-mesh text-white font-display w-full"
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
