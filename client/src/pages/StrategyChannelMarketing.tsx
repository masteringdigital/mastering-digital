import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Share2,
  Beaker,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function StrategyChannelMarketing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              STRATEGY & CHANNEL MARKETING
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
              Build the Growth Plan Before You Spend the Budget
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Fractional CMO-level strategy and channel oversight to drive qualified leads — without the chaos of a "do-everything" agency.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We build the growth roadmap, define what to measure, and create the optimization system that keeps performance improving. Execution can be handled by our team, your internal team, or trusted partners — depending on what makes sense for your business.
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold text-lg px-8 py-6"
              >
                <Link href="/results">
                  View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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
              Everything Needed to Run Smarter Acquisition
            </h2>
            <p className="text-xl text-gray-600">
              Strategy, structure, measurement, and an optimization plan your team can actually execute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Block 1: Google Ads Strategy */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Google Ads Strategy & Oversight
                </h3>
                <p className="text-gray-600 mb-6">
                  Get the structure right before you scale. We build the strategy and keep optimization on track — whether we manage it directly or guide your team.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Account structure + campaign architecture plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keyword/intent mapping + landing page alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Budget allocation + pacing strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ongoing performance reviews + optimization priorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Execution support: managed by us or guided for your team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 2: Meta Strategy */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-blue"></div>
              <CardContent className="pt-8">
                <Share2 className="w-10 h-10 text-brand-blue mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Meta Strategy & Creative Direction
                </h3>
                <p className="text-gray-600 mb-6">
                  Audience strategy, creative angles, and a testing system that actually improves performance over time — not random "let's try this" energy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Audience strategy + funnel mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Creative direction + testing angles (hooks, offers, formats)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Retargeting structure + lead quality controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Performance reviews + iteration roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Execution support: in-house, done-with-you, or done-for-you</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 3: Testing & Optimization */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-purple"></div>
              <CardContent className="pt-8">
                <Beaker className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Testing & Optimization Framework
                </h3>
                <p className="text-gray-600 mb-6">
                  A clear system for figuring out what's working, what's not, and what to do next — so decisions are based on signal, not noise.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Structured testing plan (ads, landing pages, offers, follow-up)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Weekly priorities + win/loss learning loop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conversion rate improvement plan (where the funnel leaks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Scaling rules (when to push budget vs. fix the system)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Decision-making frameworks that remove the guesswork</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 4: Tracking & Reporting */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-cyan"></div>
              <CardContent className="pt-8">
                <BarChart3 className="w-10 h-10 text-brand-cyan mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Tracking Standards + Reporting
                </h3>
                <p className="text-gray-600 mb-6">
                  You can't improve what you can't measure. We set up tracking that actually works and reporting that tells you what to do — not just what happened.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GA4/GTM tracking standards + event mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conversion definitions + attribution alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dashboard visibility (so you can see what's working)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reporting cadence + insights (what to do next, not just numbers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Implementation supported by our team or yours</span>
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
              WHAT THIS IMPROVES
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Outcomes We Optimize For
            </h2>
            <p className="text-xl text-gray-600">
              We don't make promises we can't keep. But here's what improves when strategy, measurement, and optimization actually work together:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Clear Priorities",
                description: "Know what to fix first to unlock growth — no more guessing.",
              },
              {
                title: "Better Lead Quality",
                description: "More of the right leads, not just more volume.",
              },
              {
                title: "Efficient Spend",
                description: "Lower CPL/CPA over time through disciplined optimization.",
              },
              {
                title: "Higher Conversion Rates",
                description: "Testing + funnel alignment that compounds results.",
              },
              {
                title: "Reporting You Can Trust",
                description: "Make budget decisions with confidence, not hope.",
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
              Ready for a Clear Growth Plan?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a Strategy Session and we'll map your highest-leverage channels, tracking gaps, and optimization priorities — so you know exactly where to focus.
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
