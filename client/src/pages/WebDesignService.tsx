import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Layout, Smartphone, Zap, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebDesignService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Palette className="w-16 h-16 text-brand-orange mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              Web Design & Conversion Optimization
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              High-converting landing pages and website experiences designed to turn visitors into customers.
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
              Complete web design and optimization services built to maximize conversions and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Layout className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Landing Page Design
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom landing page design and development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Campaign-specific page creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Clear call-to-action optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Lead capture form design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Trust elements and social proof</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Zap className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Conversion Rate Optimization
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">A/B and multivariate testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Heatmap and user behavior analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Conversion funnel optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Form optimization and testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Page speed optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Smartphone className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Responsive Design
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Mobile-first design approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Cross-device compatibility testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Touch-optimized interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Adaptive layouts for all screen sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Fast mobile load times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8">
                <Palette className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  UX/UI Design
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">User experience research and planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Wireframing and prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Brand-aligned visual design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Intuitive navigation design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Accessibility standards compliance</span>
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
              Our Design Process
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              A proven methodology that delivers high-converting pages on time and on brand.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  1
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Discovery
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Understand your goals, audience, and brand requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  2
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Design
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Create wireframes and high-fidelity mockups for review
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  3
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Build
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Develop responsive pages with tracking and integrations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-display text-2xl mb-4">
                  4
                </div>
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Optimize
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Test, analyze, and continuously improve conversion rates
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
              Ready to Improve Your Conversion Rates?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can design pages that turn more visitors into customers.
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
