/*
DESIGN: Mastering Digital - Complete Specification Implementation
- Primary Blue: #1E3A5F (CTA buttons, headers)
- Accent Purple: #7C3AED (section labels, hover states)
- Accent Cyan: #06B6D4 (AI/tech elements)
- Accent Orange: #F97316 (stats, highlights)
- Accent Green: #10B981 (success states)
- System Sans font (Inter/SF Pro)
- Clean, professional design
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Building2,
  ShoppingCart,
  Home as HomeIcon,
  Settings,
  Megaphone,
  Cpu,
  LineChart,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-brand-blue via-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight">
                Grow Faster With a Marketing Partner Who Actually Delivers
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We help home services companies, e-commerce brands, and multifamily properties
                generate more leads, book more appointments, and grow revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6"
                >
                  <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                    Book a Strategy Session
                  </a>
                </Button>
                <Button
                  onClick={() => scrollToSection("results")}
                  size="lg"
                  variant="outline"
                  className="font-semibold text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-brand-blue"
                >
                  See Our Results
                </Button>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Feature Card */}
                <Card className="col-span-2 border-0 shadow-2xl bg-white/95 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="font-bold text-2xl text-gray-900">
                      Senior strategists. Real reporting. Actual results.
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      No junior handoffs. 24/7 dashboard access. AI-powered systems that scale.
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Icon Cards - 2x2 Grid */}
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-brand-purple" />
                    </div>
                    <p className="font-semibold text-gray-900">Strategy</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <Megaphone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <p className="font-semibold text-gray-900">Paid Ads</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <p className="font-semibold text-gray-900">AI Systems</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                      <LineChart className="w-6 h-6 text-brand-green" />
                    </div>
                    <p className="font-semibold text-gray-900">Analytics</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Partners Section */}
      <section className="py-16 bg-white border-b">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              CERTIFIED PARTNERS
            </p>
            <h2 className="font-bold text-3xl text-gray-900">
              Trusted by Leading Platforms
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/DtabXbUeaCLLhLjm.png" alt="Google Partner" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/XlmvORpTBdZZnCNH.png" alt="Meta Business Partner" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/etFhazdMtrTekBUJ.png" alt="Shopify Partner" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/sDblFttRCAFprhXd.png" alt="Klaviyo Partner" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              SERVICES
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Full-Service Marketing Built for Growth
            </h2>
            <p className="text-xl text-gray-600">
              We combine strategy, execution, and optimization into one accountable partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service Card 1: Strategy & Channel Marketing */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-blue"></div>
              <CardHeader className="bg-brand-blue/5">
                <p className="text-brand-blue font-semibold text-xs uppercase tracking-wider mb-2">
                  STRATEGY & CHANNEL MARKETING
                </p>
                <CardTitle className="font-bold text-2xl text-gray-900">
                  Reach the right audience and turn clicks into customers.
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">
                  We build the plan and execute across every channel that matters:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Discovery & channel strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Google Ads & LSA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Meta / Social Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email & SMS automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SEO & local SEO</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Card 2: Web Design & Conversion */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-purple"></div>
              <CardHeader className="bg-brand-purple/5">
                <p className="text-brand-purple font-semibold text-xs uppercase tracking-wider mb-2">
                  WEB DESIGN & CONVERSION
                </p>
                <CardTitle className="font-bold text-2xl text-gray-900">
                  Get a website that converts — not just one that looks good.
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">
                  We build and optimize the pages that turn traffic into leads:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Website design & development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">E-commerce builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Landing page optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">A/B testing & CRO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GA4 & attribution dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service Card 3: AI Implementation */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-cyan"></div>
              <CardHeader className="bg-brand-cyan/5">
                <p className="text-brand-cyan font-semibold text-xs uppercase tracking-wider mb-2">
                  AI IMPLEMENTATION
                </p>
                <CardTitle className="font-bold text-2xl text-gray-900">
                  Move faster with AI systems that actually work.
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">
                  We turn AI into real business systems — not just tools:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-powered lead intake & qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated follow-up & appointment booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-enabled reporting & alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Content production pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Platform integrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <a href="/services">
                Explore All Services <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Stats */}
            <div>
              <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
                RESULTS
              </p>
              <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                Real Clients. Real Growth.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We measure success by one thing: your results. Here's what we've delivered for clients like you.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-brand-orange pl-6">
                  <div className="text-5xl font-bold text-brand-orange mb-2">2.5x</div>
                  <p className="text-gray-700">Average lead increase for home services clients</p>
                </div>

                <div className="border-l-4 border-brand-orange pl-6">
                  <div className="text-5xl font-bold text-brand-orange mb-2">42%</div>
                  <p className="text-gray-700">Reduction in cost per lead</p>
                </div>

                <div className="border-l-4 border-brand-orange pl-6">
                  <div className="text-5xl font-bold text-brand-orange mb-2">5 min</div>
                  <p className="text-gray-700">Average response time with AI follow-up (down from 4+ hours)</p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
                >
                  <a href="/results">
                    View Case Studies <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Dashboard Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Real-time Performance</span>
                    <span className="text-brand-green text-sm">● Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded p-4">
                      <div className="text-3xl font-bold text-white mb-1">2.5x</div>
                      <div className="text-gray-400 text-xs">Lead Growth</div>
                    </div>
                    <div className="bg-gray-800/50 rounded p-4">
                      <div className="text-3xl font-bold text-white mb-1">42%</div>
                      <div className="text-gray-400 text-xs">Lower CPL</div>
                    </div>
                    <div className="bg-gray-800/50 rounded p-4">
                      <div className="text-3xl font-bold text-white mb-1">5min</div>
                      <div className="text-gray-400 text-xs">Response Time</div>
                    </div>
                    <div className="bg-gray-800/50 rounded p-4">
                      <div className="text-3xl font-bold text-white mb-1">98%</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gray-800/30 rounded flex items-end gap-2 p-4">
                    <div className="w-full bg-brand-cyan/30 h-16"></div>
                    <div className="w-full bg-brand-cyan/50 h-24"></div>
                    <div className="w-full bg-brand-cyan/70 h-20"></div>
                    <div className="w-full bg-brand-cyan h-28"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              CASE STUDIES
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real businesses. Real challenges. Real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Case Study 1: Lifetime Enclosures */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">Lifetime Enclosures</h3>
                    <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-sm font-semibold rounded-full">
                      Home Services • HVAC & Enclosures
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">
                      Low lead volume and high cost per lead were limiting growth. Needed to scale qualified appointments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">
                      Rebuilt Google Ads strategy, optimized landing pages, and implemented AI-powered lead follow-up.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-orange mb-1">2.7x</div>
                      <div className="text-sm text-gray-600">Lead increase</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-orange mb-1">35%</div>
                      <div className="text-sm text-gray-600">Lower CPL</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-orange mb-1">5min</div>
                      <div className="text-sm text-gray-600">Response time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-orange mb-1">$180k</div>
                      <div className="text-sm text-gray-600">Added revenue</div>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-6 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                >
                  <a href="/results">View Case Study →</a>
                </Button>
              </CardContent>
            </Card>

            {/* Case Study 2: Shoma Group */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">Shoma Group</h3>
                    <span className="inline-block px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-sm font-semibold rounded-full">
                      Multifamily • Lease-Ups
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">
                      New property launch needed rapid lease-up velocity. Traditional marketing wasn't fast enough.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">
                      Multi-channel paid strategy + AI chatbot for 24/7 tour booking + automated nurture sequences.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">95%</div>
                      <div className="text-sm text-gray-600">Leased in 90 days</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">3.2x</div>
                      <div className="text-sm text-gray-600">Tour bookings</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">24/7</div>
                      <div className="text-sm text-gray-600">AI response</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                      <div className="text-3xl font-bold text-brand-cyan mb-1">$2.1M</div>
                      <div className="text-sm text-gray-600">Annual value</div>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-6 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white"
                >
                  <a href="/results">View Case Study →</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              INDUSTRIES
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Specialized Marketing for Your Industry
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique challenges and opportunities in each market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Home Services */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-brand-orange" />
                </div>
                <CardTitle className="font-bold text-2xl text-gray-900 mb-2">
                  Home Services
                </CardTitle>
                <CardDescription className="text-gray-600">
                  HVAC, plumbing, electrical, roofing, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Local SEO & Google LSA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Emergency call tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seasonal campaign planning</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                >
                  <a href="/industries">Learn More →</a>
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-brand-green" />
                </div>
                <CardTitle className="font-bold text-2xl text-gray-900 mb-2">
                  E-commerce
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Shopify, WooCommerce, and custom stores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Shopping & Performance Max</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email & SMS automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conversion rate optimization</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                >
                  <a href="/industries">Learn More →</a>
                </Button>
              </CardContent>
            </Card>

            {/* Lease-Ups */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-brand-cyan" />
                </div>
                <CardTitle className="font-bold text-2xl text-gray-900 mb-2">
                  Lease-Ups
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Multifamily properties and new developments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rapid lease-up campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-powered tour booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Geo-targeted advertising</span>
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white"
                >
                  <a href="/industries">Learn More →</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">Ready to Grow?</h2>
            <p className="text-xl text-white/90 mb-8">
              30–45 minutes with a senior strategist. No pitch, no pressure — just a clear action
              plan for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-xl px-12 py-8"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Book a Strategy Session
              </a>
            </Button>
            <p className="text-white/80 mt-6 text-sm">
              No commitment required. We'll review your current marketing, identify quick wins, and
              give you a roadmap — whether we work together or not.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
