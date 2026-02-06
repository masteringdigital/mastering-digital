import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              ABOUT US
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              We're a Growth Marketing Partner That Actually Delivers
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              No junior handoffs. No vanity metrics. Just senior strategists, transparent reporting, and results you can measure.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Mastering Digital was founded on a simple belief: marketing agencies should be held accountable for results, not just activity.
              </p>
              <p>
                After years of working with businesses frustrated by agencies that overpromised and underdelivered, we built Mastering Digital differently. Every client works directly with senior strategists. Every campaign is tracked with full transparency. Every decision is driven by data, not guesswork.
              </p>
              <p>
                We specialize in three industries where speed, intent, and conversion matter most: home services, e-commerce, and multifamily lease-ups. We know these markets inside and out — and we know how to drive real growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600">
              Our values guide every decision we make and every client relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">
                  Results Over Activity
                </h3>
                <p className="text-gray-600">
                  We measure success by your growth — leads, appointments, revenue. Not impressions or clicks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">
                  Senior Strategists Only
                </h3>
                <p className="text-gray-600">
                  No junior teams. No handoffs. You work directly with experienced strategists who own your results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">
                  Transparency Always
                </h3>
                <p className="text-gray-600">
                  24/7 dashboard access. Real-time reporting. You always know what's working and what's not.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              OUR TEAM
            </p>
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              Meet the Strategists Behind Your Growth
            </h2>
            <p className="text-xl text-gray-600">
              Experienced marketers who have driven millions in growth for clients across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Michael Schott */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">MS</span>
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-1">Michael Schott</h3>
                <p className="text-brand-blue font-semibold mb-3">Co-Founder & Strategist</p>
                <p className="text-gray-600">
                  15+ years in digital marketing with expertise in paid acquisition and conversion optimization.
                </p>
              </CardContent>
            </Card>

            {/* Johny Schott */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">JS</span>
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-1">Johny Schott</h3>
                <p className="text-brand-purple font-semibold mb-3">Co-Founder & Creative Director</p>
                <p className="text-gray-600">
                  Specializes in web design, UX optimization, and building high-converting landing pages.
                </p>
              </CardContent>
            </Card>

            {/* Leo Barros */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-cyan to-brand-green mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">LB</span>
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-1">Leo Barros</h3>
                <p className="text-brand-cyan font-semibold mb-3">AI & Automation Specialist</p>
                <p className="text-gray-600">
                  Builds AI-powered systems for lead qualification, follow-up automation, and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl text-gray-900 mb-8 text-center">
              Why Clients Choose Mastering Digital
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Senior Strategists on Every Account</h3>
                  <p className="text-gray-600">No handoff to junior teams. You work directly with experienced strategists who own your results.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">24/7 Reporting Visibility</h3>
                  <p className="text-gray-600">Real-time dashboard access. You always know what's working and what's not.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Landing Pages & CRO Built In-House</h3>
                  <p className="text-gray-600">We build what converts. No outsourcing. No delays.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Tracking & Dashboards Are Standard</h3>
                  <p className="text-gray-600">GA4, GTM, and attribution dashboards included. No hidden fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">AI Implementation That Actually Works</h3>
                  <p className="text-gray-600">Real business systems, not just chatbots. Lead qualification, follow-up, and reporting automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a 30-minute strategy session. No pitch, no pressure — just a clear plan for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-xl px-12 py-8"
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
