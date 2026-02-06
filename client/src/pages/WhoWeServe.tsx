import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, ShoppingCart, Building2, Target, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function WhoWeServe() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              WHO WE SERVE
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Specialized Marketing for Your Industry
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We understand the unique challenges and opportunities in home services, e-commerce, and multifamily real estate. Our strategies are tailored to drive results in your specific market.
            </p>
          </div>
        </div>
      </section>

      {/* Home Services Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-brand-blue" />
                </div>
                <h2 className="font-bold text-4xl text-gray-900">Home Services</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                For HVAC, plumbing, electrical, flooring, and other home service businesses, we generate high-intent leads that turn into booked appointments and completed jobs.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Common Challenges We Solve:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">High cost per lead from Google Local Service Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Inconsistent lead quality and low show rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Seasonal demand fluctuations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Difficulty tracking ROI from marketing to completed jobs</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Our Solutions:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">●</span>
                    <span className="text-gray-700">Google LSA optimization and Search Ads for emergency and scheduled services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">●</span>
                    <span className="text-gray-700">AI-powered lead qualification to filter tire-kickers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">●</span>
                    <span className="text-gray-700">Automated appointment reminders to reduce no-shows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">●</span>
                    <span className="text-gray-700">Service-specific landing pages with clear CTAs</span>
                  </li>
                </ul>
              </div>

              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                <Link href="/who-we-serve/home-services">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Right Column - Results Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">Typical Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700 font-medium">Lead Volume Increase</span>
                      <span className="text-brand-orange font-bold text-2xl">2-3x</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700 font-medium">Cost Per Lead Reduction</span>
                      <span className="text-brand-green font-bold text-2xl">30-45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Show Rate Improvement</span>
                      <span className="text-brand-cyan font-bold text-2xl">35%+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
                <CardContent className="pt-6">
                  <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
                    FEATURED CLIENT
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Lifetime Enclosures</strong> — Increased qualified leads by 2.5x while reducing cost per appointment by 42% through optimized Google Ads and AI lead qualification.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/results">
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Results Cards */}
            <div className="space-y-6 lg:order-1">
              <Card className="border-0 shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">Typical Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700 font-medium">ROAS (Return on Ad Spend)</span>
                      <span className="text-brand-orange font-bold text-2xl">4-6x</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700 font-medium">Cart Abandonment Recovery</span>
                      <span className="text-brand-green font-bold text-2xl">25-35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Customer Acquisition Cost</span>
                      <span className="text-brand-cyan font-bold text-2xl">-40%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-purple/5 to-brand-cyan/5">
                <CardContent className="pt-6">
                  <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
                    FEATURED CLIENT
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>The Florist Supply Shop</strong> — Achieved +95% revenue growth and +59% order increase while reducing Meta CPC by 44% through optimized channel strategy and conversion rate optimization.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/results">
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Content */}
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-brand-purple" />
                </div>
                <h2 className="font-bold text-4xl text-gray-900">E-commerce</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                For online retailers and DTC brands, we drive profitable customer acquisition and maximize lifetime value through data-driven campaigns and conversion optimization.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Common Challenges We Solve:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Rising customer acquisition costs on Meta and Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">High cart abandonment rates (70%+ average)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Low repeat purchase rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Difficulty scaling profitably beyond initial customer base</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Our Solutions:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">●</span>
                    <span className="text-gray-700">Performance Max and Shopping campaigns optimized for ROAS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">●</span>
                    <span className="text-gray-700">Meta dynamic product ads and lookalike audience targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">●</span>
                    <span className="text-gray-700">Automated email and SMS cart recovery sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">●</span>
                    <span className="text-gray-700">Landing page CRO and checkout optimization</span>
                  </li>
                </ul>
              </div>

              <Button asChild size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                <Link href="/who-we-serve/ecommerce">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Multifamily Lease-Ups Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-brand-cyan" />
                </div>
                <h2 className="font-bold text-4xl text-gray-900">Multifamily Real Estate</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                For new construction and repositioned properties, we accelerate lease-up timelines with targeted campaigns that fill units faster and maximize occupancy.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Common Challenges We Solve:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Slow lease-up velocity missing revenue targets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Low tour-to-lease conversion rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">High no-show rates for scheduled tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span className="text-gray-700">Difficulty standing out in competitive markets</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-xl text-gray-900 mb-3">Our Solutions:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">●</span>
                    <span className="text-gray-700">Hyper-local Google and Meta campaigns targeting move-in ready renters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">●</span>
                    <span className="text-gray-700">AI chatbot for instant tour scheduling 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">●</span>
                    <span className="text-gray-700">Automated SMS reminders to reduce tour no-shows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">●</span>
                    <span className="text-gray-700">Property-specific landing pages with virtual tours and floor plans</span>
                  </li>
                </ul>
              </div>

              <Button asChild size="lg" className="bg-brand-cyan hover:bg-brand-cyan/90">
                <Link href="/who-we-serve/real-estate">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Right Column - Results Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-2xl text-gray-900 mb-6 text-center">Typical Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700 font-medium">Lease-Up Speed</span>
                      <span className="text-brand-orange font-bold text-2xl">40% Faster</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-gray-700 font-medium">Tour Show Rate</span>
                      <span className="text-brand-green font-bold text-2xl">75%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Cost Per Lease</span>
                      <span className="text-brand-cyan font-bold text-2xl">-35%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-cyan/5 to-brand-green/5">
                <CardContent className="pt-6">
                  <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-2">
                    FEATURED CLIENT
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Shoma Group</strong> — Accelerated lease-up by 6 weeks and reduced cost per lease by 38% through AI-powered tour scheduling and targeted local campaigns.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/results">
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-gray-600">
              Generic marketing doesn't work. We build strategies based on what actually drives results in your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Industry-Specific Strategies</h3>
                <p className="text-gray-600">
                  We know the keywords, platforms, and messaging that convert in your market — not just general best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Proven Playbooks</h3>
                <p className="text-gray-600">
                  We've already tested what works. You get strategies based on real results from similar businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Faster Time to Results</h3>
                <p className="text-gray-600">
                  No learning curve. We understand your business model, sales cycle, and customer journey from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
              Ready to Discuss Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a 30-minute strategy session to see how we can help grow your business.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6">
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
