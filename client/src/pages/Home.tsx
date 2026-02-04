/*
DESIGN: Dark SaaS Aesthetic
- Background: #1A1A1A or white sections
- Font: Inter (H1: 700, H2: 600, Body: 400, Buttons: 600)
- Accent Purple #7C3AED: CTAs, section labels, icons
- Accent Cyan #06B6D4: data visuals only
- Conversion-focused, performance-driven copy
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  Target,
  Zap,
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 bg-[#1A1A1A]">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Generate More Leads, Book More Appointments, Grow Revenue
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategy-led marketing for home services, e-commerce, and multifamily operators spending $5k+/month who need accountability, not excuses.
            </p>
            
            {/* Feature Card */}
            <Card className="bg-[#222] border-[#333] p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Senior strategists. Real reporting. Measurable results.
                </h3>
                <p className="text-gray-400">
                  No junior handoffs. 24/7 dashboard access. AI-powered systems that scale.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <Target className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Strategy</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Paid Ads</p>
                  </div>
                  <div className="text-center">
                    <LineChart className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">AI Systems</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Analytics</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => scrollToSection("cta")}
                size="lg"
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-lg px-8"
              >
                Book a Strategy Session
              </Button>
              <Button
                onClick={() => scrollToSection("results")}
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-gray-800 font-semibold text-lg px-8"
              >
                See Our Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              Trusted by Industry Leaders
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-50">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/NNwRLzCLMqFpoYat.jpg"
              alt="Lifetime Enclosures"
              className="h-12 md:h-14 w-auto grayscale"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/bdBIEHBVRiVezemY.png"
              alt="Lifetime Flooring"
              className="h-12 md:h-14 w-auto grayscale"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/SAscemzkqTESLBNO.png"
              alt="Shoma Group"
              className="h-12 md:h-14 w-auto grayscale"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/VHIlECxTYboCdXqI.jpg"
              alt="Wristband Resources"
              className="h-12 md:h-14 w-auto grayscale"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7C3AED] uppercase tracking-wider mb-4 font-semibold">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Strategy-Led Marketing That Drives Results
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We combine strategy, execution, and optimization into one accountable partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <Card className="bg-[#222] border-[#333] p-8">
              <div className="space-y-4">
                <Target className="w-12 h-12 text-[#7C3AED]" />
                <h3 className="text-2xl font-semibold text-white">
                  Strategy & Channel Marketing
                </h3>
                <p className="text-gray-400">
                  Reach the right audience and turn clicks into customers.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Discovery & channel strategy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Google Ads & LSA</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Meta / Social Ads</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Email & SMS automation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>SEO & local SEO</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="bg-[#222] border-[#333] p-8">
              <div className="space-y-4">
                <Zap className="w-12 h-12 text-[#7C3AED]" />
                <h3 className="text-2xl font-semibold text-white">
                  Web Design & Conversion
                </h3>
                <p className="text-gray-400">
                  Get a website that converts — not just one that looks good.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Website design & development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>E-commerce builds</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Landing page optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>A/B testing & CRO</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>GA4 & attribution dashboards</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="bg-[#222] border-[#333] p-8">
              <div className="space-y-4">
                <LineChart className="w-12 h-12 text-[#7C3AED]" />
                <h3 className="text-2xl font-semibold text-white">
                  AI Implementation
                </h3>
                <p className="text-gray-400">
                  Move faster with AI systems that actually work.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>AI-powered lead intake & qualification</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Automated follow-up & booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>AI-enabled reporting & alerts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span>Platform integrations</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7C3AED] uppercase tracking-wider mb-4 font-semibold">
              Results
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Real Clients. Real Growth.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We measure success by one thing: your results. Here's what we've delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Stats */}
            <div className="space-y-8">
              <div className="border-l-4 border-[#06B6D4] pl-6">
                <div className="text-5xl font-bold text-[#06B6D4] mb-2">2.5x</div>
                <p className="text-gray-600">Average lead increase for home services clients</p>
              </div>
              <div className="border-l-4 border-[#06B6D4] pl-6">
                <div className="text-5xl font-bold text-[#06B6D4] mb-2">42%</div>
                <p className="text-gray-600">Reduction in cost per lead</p>
              </div>
              <div className="border-l-4 border-[#06B6D4] pl-6">
                <div className="text-5xl font-bold text-[#06B6D4] mb-2">5 min</div>
                <p className="text-gray-600">Average response time with AI follow-up (down from 4+ hours)</p>
              </div>
              <p className="text-sm text-gray-500 italic pt-4">
                Results vary by industry and ad spend. These represent real client outcomes.
              </p>
            </div>

            {/* Dashboard Visual */}
            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-800">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/iYIQFLnPMCEXNFgj.png"
                alt="Analytics Dashboard"
                className="w-full rounded"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7C3AED] uppercase tracking-wider mb-4 font-semibold">
              Client Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-[#222] border-[#333] p-8">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  "Mastering Digital transformed our lead generation. We went from 15 leads per month to over 40, and our cost per lead dropped by 35%. Their AI follow-up system is a game-changer."
                </p>
                <div className="border-t border-[#333] pt-6">
                  <p className="font-semibold text-white">Michael Thompson</p>
                  <p className="text-sm text-gray-400">Owner, Lifetime Enclosures</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-[#222] border-[#333] p-8">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  "We've worked with three agencies before. Mastering Digital is the first one that actually delivered results. Revenue is up 2.5x in six months, and we finally have visibility into what's working."
                </p>
                <div className="border-t border-[#333] pt-6">
                  <p className="font-semibold text-white">Sarah Chen</p>
                  <p className="text-sm text-gray-400">Marketing Director, Shoma Group</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-[#222] border-[#333] p-8">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  "The team at Mastering Digital doesn't just run campaigns—they become a true partner. Their strategic approach and transparent reporting gave us confidence to scale our ad spend 3x."
                </p>
                <div className="border-t border-[#333] pt-6">
                  <p className="font-semibold text-white">David Rodriguez</p>
                  <p className="text-sm text-gray-400">CEO, Wristband Resources</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7C3AED] uppercase tracking-wider mb-4 font-semibold">
              Who We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Marketing Built for Your Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in high-intent industries where leads, speed, and conversion matter most.
            </p>
          </div>

          <Tabs defaultValue="home-services" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="home-services" className="font-semibold">
                Home Services
              </TabsTrigger>
              <TabsTrigger value="ecommerce" className="font-semibold">
                E-commerce
              </TabsTrigger>
              <TabsTrigger value="lease-ups" className="font-semibold">
                Lease-Ups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home-services" className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-[#7C3AED]">01</div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Fill your schedule with qualified jobs — not tire-kickers.
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We help HVAC, roofing, flooring, and home improvement companies generate leads, book appointments, and grow revenue with paid ads, local SEO, and AI-powered follow-up.
                </p>
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold mt-6">
                  See Home Services Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-[#7C3AED]">02</div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Scale profitably with data-driven acquisition.
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We help e-commerce brands increase ROAS, reduce CAC, and scale customer acquisition through performance marketing, conversion optimization, and retention strategies.
                </p>
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold mt-6">
                  See E-commerce Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="lease-ups" className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-[#7C3AED]">03</div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  Lease up faster with targeted, high-intent campaigns.
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We help multifamily properties drive qualified tours, reduce vacancy, and hit lease-up targets with geo-targeted ads, conversion-optimized landing pages, and automated follow-up.
                </p>
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold mt-6">
                  See Lease-Up Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7C3AED] uppercase tracking-wider mb-4 font-semibold">
              Why Mastering Digital
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Your Growth Partner, Not Just Another Agency
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-[#222] border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                Senior Strategists on Every Account
              </h3>
              <p className="text-gray-400">
                No handoff to junior teams. Your account is managed by experienced strategists who understand your business.
              </p>
            </Card>

            <Card className="bg-[#222] border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                24/7 Reporting Visibility
              </h3>
              <p className="text-gray-400">
                Check your performance anytime with our real-time reporting platform. No waiting for monthly reports.
              </p>
            </Card>

            <Card className="bg-[#222] border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                Landing Pages & CRO Built In-House
              </h3>
              <p className="text-gray-400">
                We don't just run ads — we build and optimize the pages that convert.
              </p>
            </Card>

            <Card className="bg-[#222] border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                Tracking & Dashboards Are Standard
              </h3>
              <p className="text-gray-400">
                GA4, GTM, and clear attribution come included. You'll always know what's working.
              </p>
            </Card>

            <Card className="bg-[#222] border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                AI Implementation That Actually Works
              </h3>
              <p className="text-gray-400">
                We turn AI into real systems — lead qualification, automated follow-up, reporting — that save time and scale your operations.
              </p>
            </Card>

            <Card className="bg-[#222] border-[#333] p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                Accountable Partnership
              </h3>
              <p className="text-gray-400">
                We're invested in your success. Clear communication, transparent reporting, and results you can measure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm text-[#7C3AED] uppercase tracking-wider mb-4 font-semibold">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              A Simple Path From Kickoff to Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-[#7C3AED]">01</div>
              <h3 className="text-xl font-semibold text-gray-900">Discover</h3>
              <p className="text-gray-600">
                We start with a Strategy Session to understand your goals, challenges, and current marketing.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-[#7C3AED]">02</div>
              <h3 className="text-xl font-semibold text-gray-900">Strategize</h3>
              <p className="text-gray-600">
                We build a custom roadmap — channels, messaging, creative, and tech stack — tailored to your business.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-[#7C3AED]">03</div>
              <h3 className="text-xl font-semibold text-gray-900">Launch</h3>
              <p className="text-gray-600">
                Campaigns go live, landing pages deploy, tracking is installed, and AI systems are activated.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-[#7C3AED]">04</div>
              <h3 className="text-xl font-semibold text-gray-900">Optimize</h3>
              <p className="text-gray-600">
                We monitor, test, and improve continuously. You get 24/7 reporting visibility and regular optimization calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-24 bg-[#1A1A1A]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Ready to Grow?
            </h2>
            <p className="text-xl text-gray-300">
              30–45 minutes with a senior strategist. No pitch, no pressure — just a clear action plan for your business.
            </p>
            <Button
              size="lg"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-lg px-12 py-6"
            >
              Book a Strategy Session
            </Button>
            <p className="text-sm text-gray-400 pt-4">
              No commitment required. We'll review your current marketing, identify quick wins, and give you a roadmap — whether we work together or not.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
