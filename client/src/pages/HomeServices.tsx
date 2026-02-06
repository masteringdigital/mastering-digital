import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, CheckCircle2, TrendingUp, Target, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function HomeServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Marketing for Home Services Companies
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Generate high-intent leads that turn into booked appointments and completed jobs. Built for HVAC, plumbing, electrical, flooring, and other home service businesses.
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
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">High Cost Per Lead</h3>
                      <p className="text-gray-600">
                        Google Local Service Ads and Search campaigns driving up costs without delivering quality leads.
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
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Inconsistent Lead Quality</h3>
                      <p className="text-gray-600">
                        Tire-kickers and price shoppers wasting your team's time instead of ready-to-buy customers.
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
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Low Show Rates</h3>
                      <p className="text-gray-600">
                        Booked appointments that never happen, leaving technicians idle and revenue on the table.
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
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Seasonal Fluctuations</h3>
                      <p className="text-gray-600">
                        Feast-or-famine cycles making it hard to maintain consistent revenue and staffing.
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
              Our Solutions for Home Services
            </h2>
            <p className="text-xl text-gray-600 text-center">
              We build marketing systems designed specifically for home service businesses — from lead generation to appointment booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Google LSA & Search Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Optimized campaigns for both emergency services (water heater out, AC not working) and scheduled services (maintenance, installations).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">•</span>
                    <span className="text-gray-700">Local Service Ads management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">•</span>
                    <span className="text-gray-700">Emergency keyword targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-blue mt-1">•</span>
                    <span className="text-gray-700">Service-area geo-targeting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">AI-Powered Lead Qualification</h3>
                <p className="text-gray-600 mb-4">
                  Automated systems that filter out tire-kickers and prioritize high-intent leads for your team.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Instant lead scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Automated follow-up sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">CRM integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Appointment Reminder Automation</h3>
                <p className="text-gray-600 mb-4">
                  Reduce no-shows with automated SMS and email reminders that keep customers engaged.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Multi-touch reminder sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Two-way SMS communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Rescheduling automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Service-Specific Landing Pages</h3>
                <p className="text-gray-600 mb-4">
                  High-converting pages built for each service line with clear CTAs and trust signals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Service-specific messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Before/after galleries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Click-to-call optimization</span>
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
              Typical Results for Home Services Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-orange mb-2">2-3x</div>
                  <p className="text-gray-600 font-medium">Lead Volume Increase</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-green mb-2">30-45%</div>
                  <p className="text-gray-600 font-medium">Cost Per Lead Reduction</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-cyan mb-2">35%+</div>
                  <p className="text-gray-600 font-medium">Show Rate Improvement</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
              <CardContent className="pt-8">
                <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
                  FEATURED CLIENT
                </p>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Lifetime Enclosures</h3>
                <p className="text-gray-700 mb-4">
                  Increased qualified leads by 2.5x while reducing cost per appointment by 42% through optimized Google Ads and AI lead qualification. The automated follow-up system recovered 30% of leads that would have otherwise gone cold.
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
      <section className="py-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
              Ready to Generate More Qualified Leads?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to see how we can help grow your home services business.
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
