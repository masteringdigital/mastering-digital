import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, MapPin, FileText, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SEOService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Search className="w-16 h-16 text-brand-green mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              SEO Services
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              Increase organic visibility, drive qualified traffic, and dominate local search results with data-driven SEO strategies that deliver long-term growth.
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
              Comprehensive SEO services designed to improve rankings, increase organic traffic, and drive more qualified leads from search engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <Search className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Technical SEO
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Comprehensive site audits and error fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Page speed optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Mobile-first indexing optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">XML sitemap and robots.txt configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Schema markup implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <MapPin className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Local SEO
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Local citation building and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Review generation and reputation management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Local link building strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">NAP consistency across directories</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Content Strategy & Optimization
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Keyword research and targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">On-page SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Content gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">SEO-optimized content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Internal linking strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8">
                <TrendingUp className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Link Building & Authority
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">High-quality backlink acquisition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Competitor backlink analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Broken link reclamation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Digital PR and outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Toxic link removal and disavow</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Timeline */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              SEO Results Timeline
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              SEO is a long-term strategy. Here's what to expect at each stage of your campaign.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-display text-xl mb-4">
                  1-3
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Months 1-3
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Foundation building: technical fixes, keyword research, content optimization, and initial link building
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-display text-xl mb-4">
                  4-6
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Months 4-6
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Early results: improved rankings for long-tail keywords, increased organic traffic, better local visibility
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-display text-xl mb-4">
                  7-9
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Months 7-9
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Momentum building: competitive keyword rankings, significant traffic growth, measurable lead increases
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-green/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-display text-xl mb-4">
                  12+
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Month 12+
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Market dominance: top rankings for competitive terms, sustained organic growth, strong ROI
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
              Typical SEO Results
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Our SEO strategies consistently deliver measurable improvements in visibility, traffic, and leads.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">150%+</div>
                <p className="text-[#4A4A4A]">Organic traffic increase</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">3-5x</div>
                <p className="text-[#4A4A4A]">More keywords ranking</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">200%+</div>
                <p className="text-[#4A4A4A]">Organic lead growth</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-green mb-2">6-12</div>
                <p className="text-[#4A4A4A]">Months to full results</p>
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
              Ready to Dominate Organic Search?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to discuss your SEO goals and see how we can help you rank higher.
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
