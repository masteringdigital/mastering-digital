import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Search, ShoppingBag, Eye, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageContent } from "@/hooks/usePageContent";

export default function PPCService() {
  const { getContent, isLoading } = usePageContent("ppc");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              {getContent("hero", "headline", "PPC Google Ads Management")}
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              {getContent("hero", "description", "Drive high-intent traffic and qualified leads with expertly managed Google Ads campaigns that maximize ROI and minimize wasted spend.")}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              What's Included
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Full-service Google Ads management covering every campaign type and optimization strategy to drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Search className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Search Campaigns
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">High-intent keyword targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Ad copy testing and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Negative keyword management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Bid strategy optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Ad extensions and sitelinks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Local Service Ads (LSA)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Google Guaranteed badge setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Service area optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Lead quality management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Budget and bid management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Review and reputation monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <ShoppingBag className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Shopping & Performance Max
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Product feed optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Performance Max campaign setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Asset group creation and testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Audience signal optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">ROAS tracking and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Eye className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Display & Remarketing
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Display campaign strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Responsive display ad creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Remarketing list building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">YouTube video advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Audience targeting and exclusions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Our PPC Management Process
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              A proven methodology that delivers consistent results and continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  1
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Audit & Strategy
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Analyze existing campaigns, identify opportunities, and build a custom strategy
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  2
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Campaign Build
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Set up campaigns with proper structure, tracking, and conversion goals
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  3
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Launch & Monitor
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Launch campaigns and closely monitor performance in the first 30 days
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  4
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Optimize & Scale
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Continuously test, refine, and scale what works to maximize ROI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Typical PPC Results
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Our Google Ads management consistently delivers lower costs and higher conversion rates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-orange mb-2">30-45%</div>
                <p className="text-[#4A4A4A]">Lower cost per lead</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-orange mb-2">2-3x</div>
                <p className="text-[#4A4A4A]">More qualified leads</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-orange mb-2">4-6x</div>
                <p className="text-[#4A4A4A]">Return on ad spend</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-orange mb-2">60-90</div>
                <p className="text-[#4A4A4A]">Days to optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Google Ads */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Why Google Ads Works
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Google Ads captures high-intent buyers actively searching for your services right now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  High Intent Traffic
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Reach people actively searching for your products or services, not just browsing
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Immediate Results
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Start generating leads within days, not months like SEO or content marketing
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Measurable ROI
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Track every dollar spent and every lead generated with precise conversion tracking
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
              Ready to Scale Your Google Ads?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to discuss your PPC goals and see how we can lower your costs.
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
