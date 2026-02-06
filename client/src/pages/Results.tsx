import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Results() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              CASE STUDIES
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Real Clients. Real Growth.
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              See how we've helped businesses like yours generate more leads, book more appointments, and grow revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white border-b">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-brand-orange mb-2">2.5x</div>
              <p className="text-gray-600">Average lead increase</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-orange mb-2">42%</div>
              <p className="text-gray-600">Lower cost per lead</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-orange mb-2">5min</div>
              <p className="text-gray-600">AI response time</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand-orange mb-2">$3.2M+</div>
              <p className="text-gray-600">Revenue generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1: Lifetime Enclosures */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-3xl text-gray-900 mb-3">Lifetime Enclosures</h2>
                    <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange text-sm font-semibold rounded-full">
                      Home Services • HVAC & Enclosures
                    </span>
                  </div>
                  <TrendingUp className="w-12 h-12 text-brand-orange" />
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Lifetime Enclosures was spending $8,000/month on Google Ads but only generating 15–20 qualified leads per month. Their cost per lead was $400+, and their sales team was overwhelmed with low-quality inquiries. They needed more volume and better lead quality — fast.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">What We Did</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Rebuilt Google Ads account structure with tighter keyword targeting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Launched Google Local Services Ads for instant credibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Redesigned landing pages with clear CTAs and trust signals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Implemented AI-powered lead qualification and instant follow-up</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Set up GA4 tracking and real-time reporting dashboard</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">2.7x</div>
                          <div className="text-sm text-gray-600">Lead increase</div>
                          <div className="text-xs text-gray-500 mt-1">15 → 40 leads/month</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">35%</div>
                          <div className="text-sm text-gray-600">Lower CPL</div>
                          <div className="text-xs text-gray-500 mt-1">$400 → $260</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">5min</div>
                          <div className="text-sm text-gray-600">Response time</div>
                          <div className="text-xs text-gray-500 mt-1">Down from 4+ hours</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">$180k</div>
                          <div className="text-sm text-gray-600">Added revenue</div>
                          <div className="text-xs text-gray-500 mt-1">First 6 months</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-orange/5 p-6 rounded-lg border-l-4 border-brand-orange">
                      <p className="text-gray-700 italic">
                        "Mastering Digital didn't just get us more leads — they got us better leads. Our close rate went up, our sales team is happier, and we're finally seeing real ROI from our ad spend."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Owner, Lifetime Enclosures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study 2: Shoma Group */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-3xl text-gray-900 mb-3">Shoma Group</h2>
                    <span className="inline-block px-4 py-2 bg-brand-cyan/10 text-brand-cyan text-sm font-semibold rounded-full">
                      Multifamily • Lease-Ups
                    </span>
                  </div>
                  <TrendingUp className="w-12 h-12 text-brand-cyan" />
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Shoma Group was launching a new 250-unit multifamily property in South Florida. They needed to hit 95% occupancy within 90 days to meet investor expectations. Traditional marketing wasn't fast enough, and their leasing team was overwhelmed with unqualified inquiries.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">What We Did</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Launched geo-targeted Google & Meta campaigns within 48 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Built high-converting landing pages with virtual tours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Deployed AI chatbot for 24/7 tour booking and lead qualification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Created automated email/SMS nurture sequences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Set up real-time occupancy tracking dashboard</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">95%</div>
                          <div className="text-sm text-gray-600">Leased</div>
                          <div className="text-xs text-gray-500 mt-1">In 90 days</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">3.2x</div>
                          <div className="text-sm text-gray-600">Tour bookings</div>
                          <div className="text-xs text-gray-500 mt-1">vs. previous property</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">24/7</div>
                          <div className="text-sm text-gray-600">AI response</div>
                          <div className="text-xs text-gray-500 mt-1">Instant qualification</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">$2.1M</div>
                          <div className="text-sm text-gray-600">Annual value</div>
                          <div className="text-xs text-gray-500 mt-1">From lease-up</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-cyan/5 p-6 rounded-lg border-l-4 border-brand-cyan">
                      <p className="text-gray-700 italic">
                        "We hit our lease-up goals faster than any property we've launched. The AI booking system was a game-changer — our leasing team could focus on closing deals instead of answering the same questions all day."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Marketing Director, Shoma Group</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study 3: The Florist Supply Shop */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/gaPoaXoXcrIBMkdT.png" alt="The Florist Supply Shop" className="h-16 object-contain" />
                      <div>
                        <h2 className="font-bold text-3xl text-gray-900">The Florist Supply Shop</h2>
                        <span className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mt-2">
                          E-commerce • Wholesale Floral Supplies
                        </span>
                      </div>
                    </div>
                  </div>
                  <TrendingUp className="w-12 h-12 text-brand-green" />
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The Florist Supply Shop needed to scale their Shopify store revenue and order volume while maintaining efficiency across Meta and Google.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">What We Did</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Strengthened measurement infrastructure for true channel performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Refined targeting, creative, and bidding strategies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Optimized landing pages and conversion paths</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Scaled conversions with improved economics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+95%</div>
                          <div className="text-sm text-gray-600">Revenue Growth</div>
                          <div className="text-xs text-gray-500 mt-1">Year-over-year</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+59%</div>
                          <div className="text-sm text-gray-600">Orders</div>
                          <div className="text-xs text-gray-500 mt-1">YoY increase</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">↓44%</div>
                          <div className="text-sm text-gray-600">Meta CPC</div>
                          <div className="text-xs text-gray-500 mt-1">Lower cost</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+97%</div>
                          <div className="text-sm text-gray-600">Meta Conversions</div>
                          <div className="text-xs text-gray-500 mt-1">12% lower CPA</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-green/5 p-6 rounded-lg border-l-4 border-brand-green">
                      <p className="text-gray-700 italic">
                        Nearly doubled revenue while improving efficiency across both channels.
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— The Florist Supply Shop</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to See Similar Results?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a 30-minute strategy session. We'll review your current marketing, identify quick wins, and give you a clear roadmap.
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
              No commitment required. Whether we work together or not, you'll walk away with a plan.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
