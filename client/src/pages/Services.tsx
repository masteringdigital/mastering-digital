import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Palette, Bot, ArrowRight, CheckCircle2, Search, TrendingUp, Share2, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-display text-sm uppercase tracking-wider mb-4">
              OUR SERVICES
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              Comprehensive Digital Marketing Services
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              From SEO and paid advertising to AI automation and email marketing, we provide end-to-end digital marketing solutions that drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* SEO */}
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="border-b-4 border-brand-green bg-brand-green/5">
                <Search className="w-12 h-12 text-brand-green mb-4" />
                <CardTitle className="font-display text-2xl text-[#0B0B0B]">
                  SEO Services
                </CardTitle>
                <CardDescription className="text-[#4A4A4A] text-base">
                  Organic search optimization for long-term visibility
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Technical SEO audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Local SEO & Google Business Profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Content strategy & optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Link building & authority growth</span>
                  </li>
                </ul>
                <Link href="/services/seo">
                  <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-display">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* PPC Google Ads */}
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="border-b-4 border-brand-orange bg-brand-orange/5">
                <Target className="w-12 h-12 text-brand-orange mb-4" />
                <CardTitle className="font-display text-2xl text-[#0B0B0B]">
                  PPC Google Ads
                </CardTitle>
                <CardDescription className="text-[#4A4A4A] text-base">
                  High-intent search advertising that converts
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Search campaign management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Local Service Ads (LSA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Shopping & Performance Max</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Display & remarketing campaigns</span>
                  </li>
                </ul>
                <Link href="/services/ppc">
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-display">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Meta Ads / Social Media */}
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="border-b-4 border-brand-purple bg-brand-purple/5">
                <Share2 className="w-12 h-12 text-brand-purple mb-4" />
                <CardTitle className="font-display text-2xl text-[#0B0B0B]">
                  Meta Ads & Social Media
                </CardTitle>
                <CardDescription className="text-[#4A4A4A] text-base">
                  Facebook, Instagram, and social advertising
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Facebook & Instagram ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Lead generation campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Audience targeting & retargeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Creative testing & optimization</span>
                  </li>
                </ul>
                <Link href="/services/meta-ads">
                  <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-display">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Email Marketing & Automation */}
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="border-b-4 border-brand-green bg-brand-green/5">
                <Mail className="w-12 h-12 text-brand-green mb-4" />
                <CardTitle className="font-display text-2xl text-[#0B0B0B]">
                  Email Marketing & Automation
                </CardTitle>
                <CardDescription className="text-[#4A4A4A] text-base">
                  Nurture leads and drive repeat business
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Email campaign strategy & design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Marketing automation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Lead nurturing sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">List segmentation & personalization</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-display" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Web Design & Conversion */}
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="border-b-4 border-brand-orange bg-brand-orange/5">
                <Palette className="w-12 h-12 text-brand-orange mb-4" />
                <CardTitle className="font-display text-2xl text-[#0B0B0B]">
                  Web Design & Conversion
                </CardTitle>
                <CardDescription className="text-[#4A4A4A] text-base">
                  High-converting landing pages and websites
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom landing page design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Conversion rate optimization (CRO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">A/B testing & analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Mobile-first responsive design</span>
                  </li>
                </ul>
                <Link href="/services/web-design">
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-display">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Implementation */}
            <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="border-b-4 border-brand-purple bg-brand-purple/5">
                <Bot className="w-12 h-12 text-brand-purple mb-4" />
                <CardTitle className="font-display text-2xl text-[#0B0B0B]">
                  AI Implementation
                </CardTitle>
                <CardDescription className="text-[#4A4A4A] text-base">
                  Intelligent automation that scales your business
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">AI-powered lead qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Chatbot & SMS automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Automated follow-up systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom AI integrations</span>
                  </li>
                </ul>
                <Link href="/services/ai-implementation">
                  <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-display">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Strategy & Channel Marketing - Removed as it's now covered by specific services above */}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              What Makes Our Services Different
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              We're not a typical agency. Every service we offer is backed by senior strategists, transparent reporting, and a commitment to measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-display text-lg text-[#0B0B0B] mb-2">
                  No Junior Handoffs
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  Senior strategists manage your account from day one
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="font-display text-lg text-[#0B0B0B] mb-2">
                  24/7 Dashboard Access
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  Real-time reporting and performance visibility
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-display text-lg text-[#0B0B0B] mb-2">
                  Built In-House
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  All work done by our team, no outsourcing
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-display text-lg text-[#0B0B0B] mb-2">
                  Results-Focused
                </h3>
                <p className="text-sm text-[#4A4A4A]">
                  We measure success by your business outcomes
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
              Ready to Discuss Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a 30-minute strategy session to see how we can help grow your business.
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
