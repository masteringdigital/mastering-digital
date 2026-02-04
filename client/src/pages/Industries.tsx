import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, Building2, CheckCircle2, TrendingUp, Target, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Industries() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-display text-sm uppercase tracking-wider mb-4">
              INDUSTRIES WE SERVE
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              Specialized Marketing for Your Industry
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              We understand the unique challenges and opportunities in home services, e-commerce, and multifamily real estate. Our strategies are tailored to drive results in your specific market.
            </p>
          </div>
        </div>
      </section>

      {/* Home Services Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-12 h-12 text-brand-green" />
                <h2 className="font-display text-4xl text-[#0B0B0B]">
                  Home Services
                </h2>
              </div>
              <p className="text-lg text-[#4A4A4A] mb-6">
                For HVAC, plumbing, electrical, flooring, and other home service businesses, we generate high-intent leads that turn into booked appointments and completed jobs.
              </p>
              
              <h3 className="font-display text-xl text-[#0B0B0B] mb-4">Common Challenges We Solve:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">High cost per lead from Google Local Service Ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Inconsistent lead quality and low show rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Seasonal demand fluctuations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Difficulty tracking ROI from marketing to completed jobs</span>
                </li>
              </ul>

              <h3 className="font-display text-xl text-[#0B0B0B] mb-4">Our Solutions:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Google LSA optimization and Search Ads for emergency and scheduled services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">AI-powered lead qualification to filter tire-kickers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Automated appointment reminders to reduce no-shows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Service-specific landing pages with clear CTAs</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-brand-green/20">
                <CardContent className="pt-6">
                  <h4 className="font-display text-lg text-[#0B0B0B] mb-4">Typical Results</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Lead Volume Increase</span>
                      <span className="font-bold text-brand-green text-xl">2-3x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Cost Per Lead Reduction</span>
                      <span className="font-bold text-brand-green text-xl">30-45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Show Rate Improvement</span>
                      <span className="font-bold text-brand-green text-xl">35%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-brand-green/5">
                <CardContent className="pt-6">
                  <h4 className="font-display text-lg text-[#0B0B0B] mb-3">Featured Client</h4>
                  <p className="text-sm text-[#4A4A4A] mb-3">
                    <strong>Lifetime Enclosures</strong> - Increased qualified leads by 2.5x while reducing cost per appointment by 42% through optimized Google Ads and AI lead qualification.
                  </p>
                  <Button variant="outline" size="sm" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 space-y-6">
              <Card className="border-2 border-brand-orange/20">
                <CardContent className="pt-6">
                  <h4 className="font-display text-lg text-[#0B0B0B] mb-4">Typical Results</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">ROAS (Return on Ad Spend)</span>
                      <span className="font-bold text-brand-orange text-xl">4-6x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Cart Abandonment Recovery</span>
                      <span className="font-bold text-brand-orange text-xl">25-35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Customer Acquisition Cost</span>
                      <span className="font-bold text-brand-orange text-xl">-40%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-brand-orange/5">
                <CardContent className="pt-6">
                  <h4 className="font-display text-lg text-[#0B0B0B] mb-3">Featured Client</h4>
                  <p className="text-sm text-[#4A4A4A] mb-3">
                    <strong>Wristband Resources</strong> - Achieved 4.8x ROAS through strategic Meta campaigns and automated cart recovery, increasing monthly revenue by 156%.
                  </p>
                  <Button variant="outline" size="sm" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-12 h-12 text-brand-orange" />
                <h2 className="font-display text-4xl text-[#0B0B0B]">
                  E-commerce
                </h2>
              </div>
              <p className="text-lg text-[#4A4A4A] mb-6">
                For online retailers and DTC brands, we drive profitable customer acquisition and maximize lifetime value through data-driven campaigns and conversion optimization.
              </p>
              
              <h3 className="font-display text-xl text-[#0B0B0B] mb-4">Common Challenges We Solve:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Rising customer acquisition costs on Meta and Google</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">High cart abandonment rates (70%+ average)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Low repeat purchase rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Difficulty scaling profitably beyond initial customer base</span>
                </li>
              </ul>

              <h3 className="font-display text-xl text-[#0B0B0B] mb-4">Our Solutions:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Performance Max and Shopping campaigns optimized for ROAS</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Meta dynamic product ads and lookalike audience targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Automated email and SMS cart recovery sequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Landing page CRO and checkout optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multifamily Lease-Ups Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-12 h-12 text-brand-purple" />
                <h2 className="font-display text-4xl text-[#0B0B0B]">
                  Multifamily Lease-Ups
                </h2>
              </div>
              <p className="text-lg text-[#4A4A4A] mb-6">
                For new construction and repositioned properties, we accelerate lease-up timelines with targeted campaigns that fill units faster and maximize occupancy.
              </p>
              
              <h3 className="font-display text-xl text-[#0B0B0B] mb-4">Common Challenges We Solve:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Slow lease-up velocity missing revenue targets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Low tour-to-lease conversion rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">High no-show rates for scheduled tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Difficulty standing out in competitive markets</span>
                </li>
              </ul>

              <h3 className="font-display text-xl text-[#0B0B0B] mb-4">Our Solutions:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Hyper-local Google and Meta campaigns targeting move-in ready renters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">AI chatbot for instant tour scheduling 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Automated SMS reminders to reduce tour no-shows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-[#4A4A4A]">Property-specific landing pages with virtual tours and floor plans</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-brand-purple/20">
                <CardContent className="pt-6">
                  <h4 className="font-display text-lg text-[#0B0B0B] mb-4">Typical Results</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Lease-Up Speed</span>
                      <span className="font-bold text-brand-purple text-xl">40% Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Tour Show Rate</span>
                      <span className="font-bold text-brand-purple text-xl">75%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A]">Cost Per Lease</span>
                      <span className="font-bold text-brand-purple text-xl">-35%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-brand-purple/5">
                <CardContent className="pt-6">
                  <h4 className="font-display text-lg text-[#0B0B0B] mb-3">Featured Client</h4>
                  <p className="text-sm text-[#4A4A4A] mb-3">
                    <strong>Shoma Group</strong> - Accelerated lease-up by 6 weeks and reduced cost per lease by 38% through AI-powered tour scheduling and targeted local campaigns.
                  </p>
                  <Button variant="outline" size="sm" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Generic marketing agencies treat every business the same. We understand the nuances of your industry and build strategies that work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <TrendingUp className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Industry Benchmarks
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  We know what good performance looks like in your sector and optimize to beat industry standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <Target className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Proven Playbooks
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  We've already solved the challenges you're facing with other clients in your industry
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <Clock className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Faster Results
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  No learning curve means we hit the ground running and deliver results faster
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a 30-minute strategy session to discuss your industry-specific challenges and opportunities.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-display text-xl px-12 py-8"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Book a Strategy Session
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
