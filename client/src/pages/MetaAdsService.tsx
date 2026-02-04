import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Users, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MetaAdsService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Share2 className="w-16 h-16 text-brand-purple mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              Meta Ads & Social Media Marketing
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              Reach your ideal customers on Facebook, Instagram, and other social platforms with targeted campaigns that drive awareness, engagement, and conversions.
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
              Comprehensive Meta advertising services designed to maximize reach, engagement, and ROI across Facebook and Instagram.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Campaign Strategy & Setup
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom audience research and targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Campaign objective optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Pixel installation and event tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Conversion API implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Budget allocation and bid strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <Users className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Audience Targeting
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Lookalike audience creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom audience segmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Interest and behavior targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Retargeting and remarketing lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Exclusion list management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <Share2 className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Creative Development
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Static image ad design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Video ad creation and editing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Carousel and collection ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Ad copy writing and testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Dynamic creative optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <TrendingUp className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Optimization & Reporting
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">A/B testing and creative rotation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Performance analysis and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Monthly reporting and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Continuous budget optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Scaling strategies for winners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Campaign Types We Manage
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              From awareness to conversions, we create campaigns tailored to your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Lead Generation
                </h3>
                <p className="text-[#4A4A4A] text-sm mb-4">
                  Capture leads directly on Facebook and Instagram with instant forms and automated follow-up
                </p>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>• Lead form campaigns</li>
                  <li>• Messenger lead capture</li>
                  <li>• CRM integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Traffic & Conversions
                </h3>
                <p className="text-[#4A4A4A] text-sm mb-4">
                  Drive qualified traffic to your website and optimize for purchases, bookings, or sign-ups
                </p>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>• Website traffic campaigns</li>
                  <li>• Conversion optimization</li>
                  <li>• Dynamic product ads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Brand Awareness
                </h3>
                <p className="text-[#4A4A4A] text-sm mb-4">
                  Build brand recognition and reach new audiences with video and engagement campaigns
                </p>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>• Video view campaigns</li>
                  <li>• Engagement campaigns</li>
                  <li>• Reach optimization</li>
                </ul>
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
              Typical Meta Ads Results
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Our Meta advertising strategies consistently deliver strong ROAS and lower acquisition costs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-purple mb-2">4-6x</div>
                <p className="text-[#4A4A4A]">Return on ad spend</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-purple mb-2">35-50%</div>
                <p className="text-[#4A4A4A]">Lower cost per lead</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-purple mb-2">3-5x</div>
                <p className="text-[#4A4A4A]">More qualified leads</p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-brand-purple mb-2">60-90</div>
                <p className="text-[#4A4A4A]">Days to optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Meta Ads */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Why Meta Ads Work
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Meta's advertising platform offers unmatched targeting precision and reach across Facebook and Instagram.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Massive Reach
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Access 3+ billion active users across Facebook, Instagram, Messenger, and WhatsApp
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Precise Targeting
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Target by demographics, interests, behaviors, and custom audiences with unmatched precision
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-3">
                  Visual Storytelling
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Engage audiences with compelling visuals, videos, and interactive ad formats
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
              Ready to Scale Your Social Advertising?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to discuss your Meta Ads goals and see how we can help you grow.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-display text-xl px-12 py-8"
            >
              Book a Strategy Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
