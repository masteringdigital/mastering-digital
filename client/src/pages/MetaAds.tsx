import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Layout,
  Route,
  Users,
  Image,
  Sliders,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function MetaAds() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              META ADS & SOCIAL MEDIA
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
              Meta Ads That Generate Leads — Not Just Likes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Full-funnel Meta advertising built to drive qualified leads and sales — through smarter targeting, creative testing, and consistent optimization.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Paid social ads are the core service. Social posting and community management available separately.
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
              Everything Needed to Run Meta Ads the Right Way
            </h2>
            <p className="text-xl text-gray-600">
              From tracking setup to creative testing, lead routing, and performance reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Block 1: Campaign Strategy */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardContent className="pt-8">
                <Layout className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Campaign Strategy & Setup
                </h3>
                <p className="text-gray-600 mb-6">
                  Structure matters. We build campaigns that align with your funnel — prospecting, remarketing, and lead gen working together, not against each other.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Account structure: Prospecting, Remarketing, Lead Gen campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Offer + funnel alignment (lead form vs. website conversion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">UTM conventions + measurement setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Budget pacing + launch checklist</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 2: Tracking & Lead Flow */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-blue"></div>
              <CardContent className="pt-8">
                <Route className="w-10 h-10 text-brand-blue mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Tracking & Lead Flow
                </h3>
                <p className="text-gray-600 mb-6">
                  Leads are only valuable if they get to your team. We set up tracking that works and routing that doesn't lose people in the handoff.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Meta Pixel + Conversions API (CAPI) setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Standard event mapping + conversion hygiene</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Instant Forms with pre-qualification questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lead routing to inbox/CRM (based on your stack)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 3: Audience Targeting */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-purple"></div>
              <CardContent className="pt-8">
                <Users className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Audience Targeting & Retargeting
                </h3>
                <p className="text-gray-600 mb-6">
                  Reach the right people — then stay in front of them until they're ready. We build targeting that finds buyers, not just browsers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Geo + interest + behavior targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lookalike audiences (when data supports)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Retargeting pools: visitors, engagers, lead lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Exclusions to prevent wasted spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Creative-to-audience matching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 4: Creative Development */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-cyan"></div>
              <CardContent className="pt-8">
                <Image className="w-10 h-10 text-brand-cyan mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Creative Development & Testing
                </h3>
                <p className="text-gray-600 mb-6">
                  Creative is the biggest lever in Meta Ads. We develop and test systematically — not randomly — so you know what's actually working.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Copy/headlines + asset briefs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3-5 creative themes in rotation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Systematic testing (hooks, offers, formats)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Static vs. video vs. carousel testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Winning creative scaling + fatigue management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 5: Optimization & Reporting */}
            <Card className="border-0 shadow-lg overflow-hidden md:col-span-2">
              <div className="h-2 bg-brand-green"></div>
              <CardContent className="pt-8">
                <Sliders className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Optimization & Reporting
                </h3>
                <p className="text-gray-600 mb-6">
                  Set it and forget it doesn't work. We optimize weekly and report monthly — so you always know what changed and why.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Weekly budget shifts + audience/creative pruning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bid/goal tuning against CPL/lead quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Weekly KPI updates + monthly strategy review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear reporting that explains performance, not just shows numbers</span>
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
              Meta Ads often assist conversions that happen elsewhere (search, direct, email). We optimize for the full picture:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Lower Cost Per Qualified Lead",
                description: "Not just cheaper leads — better leads at better prices.",
              },
              {
                title: "Improved Lead Quality",
                description: "Pre-qualification and targeting that filters out tire-kickers.",
              },
              {
                title: "Growing Retargeting Pools",
                description: "More people in your funnel, ready to convert later.",
              },
              {
                title: "Assisted Conversions",
                description: "Social → Search → Convert. We track the full journey.",
              },
              {
                title: "Clear Reporting",
                description: "Know what changed, why it changed, and what to do next.",
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
              Ready to Scale Your Meta Ads?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a Strategy Session and we'll audit your current setup, identify the biggest opportunities, and build a plan to generate more qualified leads.
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
