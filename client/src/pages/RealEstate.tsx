import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, CheckCircle2, TrendingUp, Target, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function RealEstate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-cyan to-[#0891B2]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Marketing for Multifamily Real Estate
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Accelerate lease-up timelines with targeted campaigns that fill units faster and maximize occupancy. Built for new construction and repositioned multifamily properties.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl text-gray-900 mb-12 text-center">
              Common Challenges We Solve
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Slow Lease-Up Velocity</h3>
                      <p className="text-gray-600">
                        Missing revenue targets and carrying costs mounting while units sit empty.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Low Tour-to-Lease Conversion</h3>
                      <p className="text-gray-600">
                        Prospects touring the property but not signing leases, leaving units vacant longer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">High Tour No-Show Rates</h3>
                      <p className="text-gray-600">
                        Scheduled tours that never happen, wasting leasing team time and delaying occupancy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Competitive Market Differentiation</h3>
                      <p className="text-gray-600">
                        Standing out in saturated markets where every property looks the same online.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-bold text-4xl text-gray-900 mb-6 text-center">
              Our Solutions for Multifamily Properties
            </h2>
            <p className="text-xl text-gray-600 text-center">
              We build marketing systems designed to accelerate lease-ups and maximize occupancy for multifamily properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Hyper-Local Targeting Campaigns</h3>
                <p className="text-gray-600 mb-4">
                  Google and Meta campaigns targeting move-in ready renters in your specific market with precise geo-targeting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Radius-based geo-targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Competitor property targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Move-in date targeting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">AI Tour Scheduling Chatbot</h3>
                <p className="text-gray-600 mb-4">
                  24/7 automated tour scheduling that captures leads instantly and books tours while prospects are engaged.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Instant tour booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Lead qualification questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Calendar integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Tour Reminder Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automated SMS reminders that reduce no-shows and keep prospects engaged through the tour process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Multi-touch reminder sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Two-way SMS communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Easy rescheduling options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Property Landing Pages</h3>
                <p className="text-gray-600 mb-4">
                  High-converting landing pages with virtual tours, floor plans, and clear CTAs that showcase your property.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">•</span>
                    <span className="text-gray-700">Virtual tour integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">•</span>
                    <span className="text-gray-700">Interactive floor plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">•</span>
                    <span className="text-gray-700">Amenity showcases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-4xl text-gray-900 mb-12 text-center">
              Typical Results for Multifamily Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-orange mb-2">40%</div>
                  <p className="text-gray-600 font-medium">Faster Lease-Up Speed</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-green mb-2">75%+</div>
                  <p className="text-gray-600 font-medium">Tour Show Rate</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-cyan mb-2">-35%</div>
                  <p className="text-gray-600 font-medium">Cost Per Lease</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-cyan/5 to-brand-green/5">
              <CardContent className="pt-8">
                <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-2">
                  FEATURED CLIENT
                </p>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Shoma Group</h3>
                <p className="text-gray-700 mb-4">
                  Accelerated lease-up by 6 weeks and reduced cost per lease by 38% through AI-powered tour scheduling and targeted local campaigns. The automated reminder system increased tour show rates from 45% to 78%.
                </p>
                <Button asChild variant="outline">
                  <Link href="/results">View Full Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-cyan to-[#0891B2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
              Ready to Accelerate Your Lease-Up?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to see how we can help fill your property faster.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-cyan hover:bg-white/90 font-semibold text-lg px-8 py-6">
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
