import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clipboard, Search, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function FreeTools() {
  const tools = [
    {
      icon: Clipboard,
      title: "Marketing Audit",
      description: "A complete digital health check covering your tech stack, Google Business Profile, reviews, website performance, and SEO basics.",
      bestFor: "Businesses who want a full picture of their online presence",
      features: [
        "Overall digital health score",
        "Tech stack analysis",
        "Google Business Profile review",
        "Reputation snapshot",
        "Website performance metrics",
        "SEO quick wins",
      ],
      delivery: "Instant (automated)",
      color: "bg-orange-50 border-orange-200",
      accentColor: "#F97316",
      link: "/free-marketing-audit",
      buttonText: "Get My Free Audit",
    },
    {
      icon: Search,
      title: "SEO Snapshot",
      description: "A one-page SEO analysis showing your domain health, keyword visibility, local SEO status, and top priority fixes.",
      bestFor: "Businesses focused on organic traffic and local search visibility",
      features: [
        "Domain authority metrics",
        "Keyword ranking overview",
        "Local SEO status check",
        "Technical health flags",
        "Top 3-5 priority fixes",
      ],
      delivery: "Within 24 hours",
      color: "bg-blue-50 border-blue-200",
      accentColor: "#3B82F6",
      link: "/free-seo-snapshot",
      buttonText: "Get My SEO Snapshot",
    },
    {
      icon: Sparkles,
      title: "AI Visibility Report",
      description: "See how your business appears in AI search results — ChatGPT, Google AI Overview, Perplexity, and Gemini.",
      bestFor: "Forward-thinking businesses who want to stay ahead of search trends",
      features: [
        "LLM visibility scorecard",
        "Buyer-intent prompt testing",
        "Quick wins for your priority page",
        "Structured data check",
        "Overall AI-readiness score",
      ],
      delivery: "Within 48 hours",
      color: "bg-purple-50 border-purple-200",
      accentColor: "#7C3AED",
      link: "/free-ai-visibility-report",
      buttonText: "Get My AI Report",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-4">
              FREE MARKETING TOOLS
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Free Tools to See Where You Stand
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Get a data-driven snapshot of your marketing performance — no sales pitch, no commitment. Just clarity.
            </p>
            <p className="text-lg text-white/80">
              Choose the tool that matches what you want to know. Each one delivers actionable insights you can use immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className={`${tool.color} border-2 overflow-hidden hover:shadow-lg transition-shadow`}>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg mb-4" style={{ backgroundColor: `${tool.accentColor}20` }}>
                      <IconComponent className="w-6 h-6 m-3" style={{ color: tool.accentColor }} />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{tool.title}</CardTitle>
                    <CardDescription className="text-gray-700 text-base">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">BEST FOR:</p>
                      <p className="text-gray-700">{tool.bestFor}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-3">WHAT YOU GET:</p>
                      <ul className="space-y-2">
                        {tool.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tool.accentColor }} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 mb-3">DELIVERY:</p>
                      <p className="text-gray-700 font-medium mb-4">{tool.delivery}</p>
                      <Link href={tool.link}>
                        <Button className="w-full bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 font-semibold">
                          {tool.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">HOW IT WORKS</p>
            <h2 className="font-bold text-4xl text-gray-900">Simple Process, Real Insights</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Choose Your Tool",
                description: "Pick the analysis that matches what you want to know about your marketing.",
              },
              {
                number: "02",
                title: "Submit Your Info",
                description: "Fill out a quick form with your business details and website.",
              },
              {
                number: "03",
                title: "Get Your Report",
                description: "Receive your analysis with actionable insights — then book a free call if you want to discuss.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-brand-orange mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-y">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-gray-900">No Strings Attached</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "No credit card required",
              "No sales pitch on the call",
              "Actionable insights you keep",
              "Works for any industry",
            ].map((point, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-4xl mb-4">Not Sure Which Tool to Choose?</h2>
            <p className="text-xl text-white/90 mb-8">
              Start with the Marketing Audit — it covers the most ground and helps you see where to focus.
            </p>
            <Link href="/free-marketing-audit">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6">
                Get My Free Marketing Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
