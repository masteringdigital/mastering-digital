/*
DESIGN: Professional Modern Marketing
- Clean navigation with deep blue CTA
- Montserrat for branding, Open Sans for nav
- No animations - static and professional
*/

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Target, Palette, Bot } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link href="/services/strategy">
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="flex items-center gap-2 mb-2">
                                <Target className="w-5 h-5 text-brand-green" />
                                <div className="text-sm font-medium leading-none">
                                  Strategy & Channel Marketing
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Google Ads, Meta, and multi-channel paid advertising strategies
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-design">
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="flex items-center gap-2 mb-2">
                                <Palette className="w-5 h-5 text-brand-orange" />
                                <div className="text-sm font-medium leading-none">
                                  Web Design & Conversion
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                High-converting landing pages and CRO optimization
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ai-implementation">
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="flex items-center gap-2 mb-2">
                                <Bot className="w-5 h-5 text-brand-purple" />
                                <div className="text-sm font-medium leading-none">
                                  AI Implementation
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                AI-powered lead qualification and automation systems
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="border-t pt-2">
                        <Link href="/services">
                          <NavigationMenuLink asChild>
                            <a className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium text-primary">
                                View All Services →
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/industries">
              <a className="text-foreground hover:text-primary font-medium">
                Industries
              </a>
            </Link>
            <button
              onClick={() => scrollToSection("results")}
              className="text-foreground hover:text-primary font-medium"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-foreground hover:text-primary font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("final-cta")}
              className="bg-primary text-white font-display px-6 py-3 btn-cta"
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                <div className="font-medium text-[#0B0B0B] px-3 py-2">Services</div>
                <Link href="/services/strategy">
                  <a className="flex items-center gap-2 px-6 py-2 text-[#4A4A4A] hover:text-primary">
                    <Target className="w-4 h-4 text-brand-green" />
                    <span className="text-sm">Strategy & Channel Marketing</span>
                  </a>
                </Link>
                <Link href="/services/web-design">
                  <a className="flex items-center gap-2 px-6 py-2 text-[#4A4A4A] hover:text-primary">
                    <Palette className="w-4 h-4 text-brand-orange" />
                    <span className="text-sm">Web Design & Conversion</span>
                  </a>
                </Link>
                <Link href="/services/ai-implementation">
                  <a className="flex items-center gap-2 px-6 py-2 text-[#4A4A4A] hover:text-primary">
                    <Bot className="w-4 h-4 text-brand-purple" />
                    <span className="text-sm">AI Implementation</span>
                  </a>
                </Link>
                <Link href="/services">
                  <a className="flex items-center gap-2 px-6 py-2 text-primary hover:underline">
                    <span className="text-sm font-medium">View All Services →</span>
                  </a>
                </Link>
              </div>
              <Link href="/industries">
                <a className="text-foreground hover:text-primary font-medium text-left px-3">
                  Industries
                </a>
              </Link>
              <button
                onClick={() => scrollToSection("results")}
                className="text-foreground hover:text-primary font-medium text-left px-3"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-foreground hover:text-primary font-medium text-left px-3"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary font-medium text-left px-3"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("final-cta")}
                className="bg-primary text-white font-display w-full btn-cta"
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
