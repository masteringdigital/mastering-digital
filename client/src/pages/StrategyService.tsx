import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, BarChart3, Search, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageContent } from "@/hooks/usePageContent";

export default function StrategyService() {
  const { getContent, isLoading } = usePageContent("strategy");

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
            <Target className="w-16 h-16 text-brand-green mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              {getContent("hero", "headline", "Strategy & Channel Marketing")}
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              {getContent("hero", "description", "Data-driven paid advertising strategies that generate qualified leads and appointments across Google, Meta, and high-intent channels.")}
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
              Comprehensive paid media management designed to drive measurable results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <Search className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Google Ads Management
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Search campaign setup and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Local Service Ads (LSA) management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Display and remarketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">YouTube video advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Performance Max campaigns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <TrendingUp className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Meta Ads (Facebook & Instagram)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Lead generation campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Conversion-focused ad creative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Audience targeting and segmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Retargeting and lookalike audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Instagram Stories and Reels ads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <BarChart3 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Strategy & Optimization
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Multi-channel strategy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Budget allocation and pacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">A/B testing and experimentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Bid strategy optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Continuous performance monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Tracking & Reporting
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">GA4 and GTM setup and configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Conversion tracking implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom dashboard creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">24/7 real-time reporting access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Monthly performance reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Results You Can Expect
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Our strategy-led approach consistently delivers measurable improvements across key metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">2-3x</div>
                <p className="text-[#4A4A4A]">Average lead increase</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">30-45%</div>
                <p className="text-[#4A4A4A]">Cost per lead reduction</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">3-5x</div>
                <p className="text-[#4A4A4A]">Return on ad spend</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">60-90</div>
                <p className="text-[#4A4A4A]">Days to full optimization</p>
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
              Ready to Scale Your Paid Advertising?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to discuss your goals and see how we can help.
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
