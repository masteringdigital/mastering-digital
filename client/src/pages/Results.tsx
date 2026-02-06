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
                        Local home-improvement demand is unforgiving—people don't browse forever. They choose the business that shows up at the right moment with enough proof to feel safe. Lifetime Enclosures needed a measurable local lead engine where the numbers tie directly to business actions: calls, direction requests, and quote-ready traffic.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">Our Approach</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Prioritized Google Business Profile as the primary lead channel (not just a brochure)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Optimized for mobile-first behavior (75% of impressions came from mobile)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Used Google Ads as a precision tool to capture demand that doesn't convert through local pack</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Optimized for high-intent actions: calls, directions, and website clicks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-orange font-bold">→</span>
                          <span>Set up real-time reporting to track local visibility and lead actions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">+184%</div>
                          <div className="text-sm text-gray-600">GBP Impressions</div>
                          <div className="text-xs text-gray-500 mt-1">Local Visibility Surge</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">+130%</div>
                          <div className="text-sm text-gray-600">Calls</div>
                          <div className="text-xs text-gray-500 mt-1">Direct Lead Actions</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">+158%</div>
                          <div className="text-sm text-gray-600">Website Clicks</div>
                          <div className="text-xs text-gray-500 mt-1">Quote-Ready Traffic</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-orange mb-2">+78%</div>
                          <div className="text-sm text-gray-600">Conversion Rate</div>
                          <div className="text-xs text-gray-500 mt-1">Google Ads Efficiency</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-orange/5 p-6 rounded-lg border-l-4 border-brand-orange">
                      <p className="text-gray-700 italic">
                        "Lifetime Enclosures went from 'hard to find' to 'hard to ignore.' Google Business Profile impressions surged +184%, calls increased +130%, and website clicks grew +158%. Meanwhile, Google Ads conversion rate jumped +78% while spend actually decreased — proving that better strategy beats bigger budgets."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Mastering Digital Case Study</p>
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
                        Leasing teams don't need another "busy season" — they need a week that feels manageable. Shoma Group faced uneven tour activity, slow follow-ups that caused prospects to cool off, and limited attribution making it hard to answer: "What's working?" The issue wasn't simply lead volume — it was inconsistency.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">Our Approach</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Tightened geo/keyword focus and audience targeting for consistency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Improved speed-to-lead with SMS + call routing (hours/days → minutes)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Layered retargeting to recapture high-intent prospects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Built weekly scorecards for clear attribution and optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Prioritized CRM lead queues to prevent drop-offs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">$81M</div>
                          <div className="text-sm text-gray-600">Property Sale</div>
                          <div className="text-xs text-gray-500 mt-1">March 2025</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">304</div>
                          <div className="text-sm text-gray-600">Units</div>
                          <div className="text-xs text-gray-500 mt-1">Community Size</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">Minutes</div>
                          <div className="text-sm text-gray-600">Follow-Up Time</div>
                          <div className="text-xs text-gray-500 mt-1">Down from hours/days</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">Predictable</div>
                          <div className="text-sm text-gray-600">Weekly Cadence</div>
                          <div className="text-xs text-gray-500 mt-1">Tour Activity</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-cyan/5 p-6 rounded-lg border-l-4 border-brand-cyan">
                      <p className="text-gray-700 italic">
                        "Shoma Group transformed from reactive leasing swings to a predictable weekly rhythm. Follow-up time dropped from hours/days to minutes, tour activity stabilized, and leadership finally had clear attribution. The property sold for $81M in March 2025."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Mastering Digital Case Study</p>
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

      {/* Case Study 4: 850 Living */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-3xl text-gray-900 mb-3">850 Living</h2>
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
                        After-hours gaps were costing 850 Living opportunities. Leads came in, but follow-through slowed overnight and on weekends. Tour calendars looked uneven because momentum broke outside office hours, and teams spent weekdays trying to "catch up" instead of converting the next wave.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">Our Approach</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Built systems to protect after-hours window and create cleaner visibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Captured interest consistently across all hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Reduced missed connections after hours with faster follow-up</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Improved internal handoffs so prospects didn't get lost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">→</span>
                          <span>Built leadership-ready dashboards for weekly decision-making</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">$71.5M</div>
                          <div className="text-sm text-gray-600">Property Sale</div>
                          <div className="text-xs text-gray-500 mt-1">March 2025</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">230</div>
                          <div className="text-sm text-gray-600">Units</div>
                          <div className="text-xs text-gray-500 mt-1">Community Size</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">Weekly</div>
                          <div className="text-sm text-gray-600">Calendars Filled</div>
                          <div className="text-xs text-gray-500 mt-1">Tour Activity</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-cyan mb-2">Gaps</div>
                          <div className="text-sm text-gray-600">After-Hours</div>
                          <div className="text-xs text-gray-500 mt-1">Closed</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-cyan/5 p-6 rounded-lg border-l-4 border-brand-cyan">
                      <p className="text-gray-700 italic">
                        "850 Living stopped missing the moment. By closing after-hours gaps and building cleaner handoffs, they turned inconsistent tour flow into calendars filled week over week. The property sold for $71.5M in March 2025."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Mastering Digital Case Study</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study 5: Ten30 South Beach */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-3xl text-gray-900 mb-3">Ten30 South Beach</h2>
                    <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple text-sm font-semibold rounded-full">
                      Multifamily • Residential Sales
                    </span>
                  </div>
                  <TrendingUp className="w-12 h-12 text-brand-purple" />
                </div>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Sales-focused real estate campaigns require more than leads — they need qualified buyers, showings, and fast contract conversions. Ten30 needed enough demand to keep showing calendars full and move prospects from viewing to signing faster.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">Our Approach</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">→</span>
                          <span>Treated campaign as conversion journey: Discovery → Interest → Showing → Contract</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">→</span>
                          <span>Filled showing calendars with ready-to-move prospects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">→</span>
                          <span>Shortened path from interest to contract conversion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">→</span>
                          <span>Created reporting clarity for team to scale what drove sales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-purple font-bold">→</span>
                          <span>Used data & analytics as steering wheel, not afterthought</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-purple mb-2">$60M+</div>
                          <div className="text-sm text-gray-600">Sales Volume</div>
                          <div className="text-xs text-gray-500 mt-1">9 months</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-purple mb-2">33</div>
                          <div className="text-sm text-gray-600">Units Sold</div>
                          <div className="text-xs text-gray-500 mt-1">Campaign Total</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-purple mb-2">10</div>
                          <div className="text-sm text-gray-600">Units Sold</div>
                          <div className="text-xs text-gray-500 mt-1">First 15 Days</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-purple mb-2">Full</div>
                          <div className="text-sm text-gray-600">Showing Calendars</div>
                          <div className="text-xs text-gray-500 mt-1">Faster Conversions</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-purple/5 p-6 rounded-lg border-l-4 border-brand-purple">
                      <p className="text-gray-700 italic">
                        "Ten30 South Beach didn't just attract attention — they filled showing calendars and accelerated contract conversions. 10 units sold in the first 15 days set the tone. 33 units and $60M+ in sales over 9 months proved the system worked."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Mastering Digital Case Study</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study 6: The Color House Miami */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-3xl text-gray-900 mb-3">The Color House Miami</h2>
                    <span className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full">
                      E-commerce • Photo & Fine Art Printing
                    </span>
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
                        Local creative businesses lose not because they're bad, but because they're invisible at the wrong moment. The Color House Miami had the craftsmanship but wasn't visible when customers were ready to buy. Website clicks, calls, and direction requests were all flat.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3">Our Approach</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Focused on winning the micro-moment when someone is ready to act</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Shifted from vanity metrics to intent signals: clicks, calls, direction requests</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Optimized Google Business Profile for mobile-first behavior (72% mobile views)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Improved local SEO keyword rankings for service-related searches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green font-bold">→</span>
                          <span>Leveraged 4.5-star rating and 41 reviews as conversion accelerator</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+918%</div>
                          <div className="text-sm text-gray-600">Call Clicks</div>
                          <div className="text-xs text-gray-500 mt-1">6 months</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+895%</div>
                          <div className="text-sm text-gray-600">Direction Requests</div>
                          <div className="text-xs text-gray-500 mt-1">Intent to Visit</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+601%</div>
                          <div className="text-sm text-gray-600">Website Clicks</div>
                          <div className="text-xs text-gray-500 mt-1">Demand Capture</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <div className="text-4xl font-bold text-brand-green mb-2">+86%</div>
                          <div className="text-sm text-gray-600">GBP Impressions</div>
                          <div className="text-xs text-gray-500 mt-1">Local Visibility</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-green/5 p-6 rounded-lg border-l-4 border-brand-green">
                      <p className="text-gray-700 italic">
                        "The Color House Miami went from invisible to undeniable. Call clicks surged +918%, direction requests grew +895%, and website clicks increased +601% — all in 6 months. More visibility is nice. More calls and direction requests is revenue."
                      </p>
                      <p className="text-gray-900 font-semibold mt-3">— Mastering Digital Case Study</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study 7: Lawrence Air Systems */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardHeader className="bg-brand-orange/5">
                <p className="text-brand-orange font-semibold text-xs uppercase tracking-wider mb-2">
                  Home Services • HVAC
                </p>
                <CardTitle className="font-bold text-2xl text-gray-900">
                  Lawrence Air Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
                    <p className="text-gray-700">
                      HVAC businesses struggle with inconsistent referrals and fierce competition. Lawrence Air Systems needed to build massive awareness and capture local intent when homeowners are ready to act — showing up in feeds, search results, and the moment someone asks "Who can fix this?"
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Approach</h3>
                    <p className="text-gray-700">
                      Flooded the top of the funnel with consistent social presence (organic + paid), scaled Facebook Ads for reach and clicks, and built SEO traction around service + location keywords.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-orange/10 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-brand-orange">+1663%</p>
                      <p className="text-sm text-gray-700 mt-1">Organic Reach</p>
                    </div>
                    <div className="bg-brand-orange/10 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-brand-orange">+1711%</p>
                      <p className="text-sm text-gray-700 mt-1">Ad Clicks</p>
                    </div>
                    <div className="bg-brand-orange/10 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-brand-orange">+817%</p>
                      <p className="text-sm text-gray-700 mt-1">Ad Impressions</p>
                    </div>
                    <div className="bg-brand-orange/10 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-brand-orange">13</p>
                      <p className="text-sm text-gray-700 mt-1">Keywords Top 10</p>
                    </div>
                  </div>

                  <div className="bg-brand-orange/5 p-6 rounded-lg border-l-4 border-brand-orange">
                    <p className="text-gray-700 italic">
                      "Lawrence Air Systems built massive local awareness: 1.66M organic impressions, 3.43M paid impressions, and 43K ad clicks. Meanwhile, SEO groundwork put 13 keywords in the Top 10 — including multiple #1 positions on local service terms."
                    </p>
                    <p className="text-gray-900 font-semibold mt-3">— Mastering Digital Case Study</p>
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
