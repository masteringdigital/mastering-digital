import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, Zap, Brain, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageContent } from "@/hooks/usePageContent";

export default function AIService() {
  const { getContent, isLoading } = usePageContent("ai");

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
            <Bot className="w-16 h-16 text-brand-purple mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0B0B0B] mb-6">
              {getContent("hero", "headline", "AI Implementation & Automation")}
            </h1>
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              {getContent("hero", "description", "Intelligent automation systems that qualify leads, follow up instantly, and scale your operations without adding headcount.")}
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
              Custom AI solutions designed to automate repetitive tasks and improve lead response times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <Brain className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  AI-Powered Lead Qualification
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Intelligent lead scoring and prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Automated qualification questionnaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Intent detection and routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">CRM integration and data enrichment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Real-time lead notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <MessageSquare className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Chatbot & Conversational AI
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">24/7 website chat support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Natural language understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Appointment booking automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">FAQ automation and knowledge base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Seamless handoff to human agents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <Zap className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Automated Follow-Up Systems
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">SMS and email automation sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Instant lead response (under 5 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Personalized messaging based on behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Abandoned cart recovery (e-commerce)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Re-engagement campaigns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-8">
                <Bot className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-display text-2xl text-[#0B0B0B] mb-4">
                  Custom AI Integrations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">CRM and marketing platform connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">API integrations with existing tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Workflow automation (Zapier, Make)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Custom reporting and dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]">Voice AI and call automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Why AI Matters for Your Business
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              AI isn't just a buzzword — it's a competitive advantage that lets you do more with less.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">5min</div>
                <p className="text-lg font-semibold text-[#0B0B0B] mb-2">Average Response Time</p>
                <p className="text-[#4A4A4A] text-sm">
                  AI responds to leads instantly, dramatically improving conversion rates
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">24/7</div>
                <p className="text-lg font-semibold text-[#0B0B0B] mb-2">Always Available</p>
                <p className="text-[#4A4A4A] text-sm">
                  Never miss a lead, even outside business hours or on weekends
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-4xl font-bold text-brand-purple mb-2">40%</div>
                <p className="text-lg font-semibold text-[#0B0B0B] mb-2">Time Saved</p>
                <p className="text-[#4A4A4A] text-sm">
                  Automate repetitive tasks so your team focuses on high-value work
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#0B0B0B] mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              See how AI automation works across different industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-6 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Home Services
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  AI chatbot qualifies leads, books appointments, and sends SMS reminders — reducing no-shows by 35%
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-6 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  E-commerce
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Automated cart recovery emails and SMS increase completed purchases by 28%
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-6 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Multifamily Lease-Ups
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  AI schedules property tours instantly and follows up with prospects automatically
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-purple/20">
              <CardContent className="pt-6 pb-6">
                <h3 className="font-display text-xl text-[#0B0B0B] mb-2">
                  Lead Nurturing
                </h3>
                <p className="text-[#4A4A4A] text-sm">
                  Personalized drip campaigns keep prospects engaged until they're ready to buy
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
              Ready to Automate Your Lead Follow-Up?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how AI can scale your operations and improve response times.
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
