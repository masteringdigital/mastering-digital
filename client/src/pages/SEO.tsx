import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  MapPin,
  FileText,
  Link2,
  Cpu,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function SEO() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              SEO SERVICES
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
              SEO That Drives Qualified Traffic — Not Vanity Rankings
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              From technical foundations to local visibility and content strategy, we focus on what actually moves the needle for your business.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A complete SEO system: technical fixes, local visibility, content planning, authority building, and monthly reporting — so you can see what's improving and why.
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
              SEO That Compounds Over Time
            </h2>
            <p className="text-xl text-gray-600">
              Built on technical excellence, local dominance, and content that earns traffic and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Block 1: Technical SEO */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardContent className="pt-8">
                <Code className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Technical SEO
                </h3>
                <p className="text-gray-600 mb-6">
                  Fix the foundation first. Technical SEO ensures search engines can find, crawl, and understand your site — so your content has a chance to rank.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Technical audit + prioritized fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Crawl/indexing improvements + error resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Speed + Core Web Vitals recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sitemap/robots + architecture cleanup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Schema implementation (when applicable)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 2: Local SEO */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-blue"></div>
              <CardContent className="pt-8">
                <MapPin className="w-10 h-10 text-brand-blue mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Local SEO
                </h3>
                <p className="text-gray-600 mb-6">
                  Win the "near me" searches. Local SEO puts you in front of customers who are ready to call, visit, or book — right when they're looking.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Citations + NAP consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Location/service page strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Local keyword targeting + on-page optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Review strategy guidance (not full reputation management)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 3: Content Strategy */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-purple"></div>
              <CardContent className="pt-8">
                <FileText className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Content Strategy & Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Content that ranks and converts. We build the keyword strategy, optimize existing pages, and identify gaps worth filling.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keyword strategy + content planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">On-page optimization (titles, metas, headers, internal links)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Content gap analysis + topic clusters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SEO content creation (when included in engagement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Internal linking strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 4: Authority Building */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-cyan"></div>
              <CardContent className="pt-8">
                <Link2 className="w-10 h-10 text-brand-cyan mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Authority Building
                </h3>
                <p className="text-gray-600 mb-6">
                  Backlinks still matter — but quality beats quantity. We focus on earning links that actually improve your rankings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Backlink monitoring + cleanup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Outreach + content-driven link placements (where appropriate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Competitor backlink gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Broken link opportunities + reclamation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Disavow recommendations (only when warranted)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 5: AI Search / GEO */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-green"></div>
              <CardContent className="pt-8">
                <Cpu className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  AI Search / GEO (Optional Add-On)
                </h3>
                <p className="text-gray-600 mb-6">
                  Search is changing. AI-powered search and generative results are reshaping how people find information. We help you show up there too.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Structure content for AI/LLM visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entity signals (schema + structured data + consistent NAP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Local GEO reinforcement for service areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monitoring for AI search presence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Block 6: Reporting & KPIs */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardContent className="pt-8">
                <BarChart3 className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Reporting & KPIs
                </h3>
                <p className="text-gray-600 mb-6">
                  SEO without reporting is just hope. We track what matters and show you what's improving — and what we're doing next.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monthly reporting + rankings tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Visibility into what changed + what we're doing next</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">KPIs tied to traffic quality + conversions (not just rankings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Competitive visibility monitoring</span>
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
              WHAT WE IMPROVE
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              What We Improve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Qualified Organic Traffic",
                description: "More visitors who are actually looking for what you offer.",
              },
              {
                title: "High-Intent Visibility",
                description: "Rank for the searches that lead to customers, not just clicks.",
              },
              {
                title: "Stronger Local Presence",
                description: "Dominate the map pack and local search results.",
              },
              {
                title: "Cleaner Technical Foundation",
                description: "A site that search engines can actually crawl and understand.",
              },
              {
                title: "Reporting Clarity",
                description: "Know what's working and where to focus next.",
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Build SEO That Compounds?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a Strategy Session and we'll audit your current SEO, identify the highest-impact opportunities, and build a roadmap for sustainable organic growth.
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
