import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  MapPin,
  ShoppingBag,
  RotateCw,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function GoogleAds() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              PPC GOOGLE ADS
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
              Google Ads That Capture Demand — Not Just Clicks
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Search, Local Service Ads, Performance Max, and remarketing — backed by clean tracking and disciplined optimization.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              You'll always know what's working, why it's working, and what we're doing next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-lg px-8 py-6"
              >
                <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Session
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              WHAT'S INCLUDED
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              End-to-End Google Ads Management
            </h2>
            <p className="text-xl text-gray-600">
              Focused on the channels that drive qualified leads and measurable revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Block 1: Search Campaign */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardContent className="pt-8">
                <Search className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Search Campaign Management
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Campaign structure + ad group architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keyword strategy + match type optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ad copy testing + extension setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Negative keyword management + search term hygiene</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bid strategy selection + ongoing optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 2: Local Service Ads */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-blue"></div>
              <CardContent className="pt-8">
                <MapPin className="w-10 h-10 text-brand-blue mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Local Service Ads (LSA)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Category + service setup and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Geo targeting + budget pacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lead quality management + dispute support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Review strategy guidance (to improve rank/coverage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Google Guaranteed application support (where eligible)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Note: Google Guaranteed badge approval is determined by Google, not guaranteed by us.
                </p>
              </CardContent>
            </Card>

            {/* Block 3: Performance Max & Shopping */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-purple"></div>
              <CardContent className="pt-8">
                <ShoppingBag className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Performance Max & Shopping
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Asset group strategy + creative requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Audience signals + feed optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Budget allocation across campaign types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Performance analysis + iteration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cross-channel attribution insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 4: Remarketing & Display */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-cyan"></div>
              <CardContent className="pt-8">
                <RotateCw className="w-10 h-10 text-brand-cyan mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Remarketing & Display
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Audience segmentation (visitors, converters, cart abandoners)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Creative strategy + ad formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Frequency management + exclusions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cross-platform remarketing coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Performance tracking + optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 5: Tracking & Reporting */}
            <Card className="border-0 shadow-lg overflow-hidden md:col-span-2">
              <div className="h-2 bg-brand-green"></div>
              <CardContent className="pt-8">
                <BarChart3 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Tracking & Reporting
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GA4/GTM conversion tracking setup or audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Call + form tracking alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dashboard access + KPI scorecard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reporting cadence + optimization notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear visibility into what's working and why</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              WHAT WE OPTIMIZE FOR
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Outcomes We Optimize For
            </h2>
            <p className="text-xl text-gray-600">
              We don't promise specific numbers — every business is different. But here's what we relentlessly optimize toward:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Lower Cost Per Qualified Lead",
                description: "Not just cheaper clicks — better leads at better prices.",
              },
              {
                title: "Higher Conversion Rates",
                description: "From high-intent searches to actual customers.",
              },
              {
                title: "Cleaner Search Terms",
                description: "Less wasted spend on irrelevant queries.",
              },
              {
                title: "Smarter Budget Allocation",
                description: "Money flows to what's working, not what's not.",
              },
              {
                title: "Reporting You Can Trust",
                description: "Know exactly what's driving results.",
              },
            ].map((outcome, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-brand-orange">{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              See results from clients like you →
            </p>
            <Button
              asChild
              variant="outline"
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold"
            >
              <Link href="/results">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Scale Your Google Ads?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a Strategy Session and we'll audit your current setup, identify the biggest opportunities, and build a plan to capture more demand.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6"
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
