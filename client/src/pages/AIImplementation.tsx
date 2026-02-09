import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Filter,
  Clock,
  Bell,
  Puzzle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function AIImplementation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              AI IMPLEMENTATION & AUTOMATION
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
              AI Systems That Actually Work Inside Your Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Lead qualification, follow-up automation, appointment booking, and reporting — plugged into your real workflows so your team moves faster without adding headcount.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Built for GoHighLevel and modern marketing stacks. Integrations available for Salesforce, HubSpot, Slack, Zapier, Make, and more.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold text-lg px-8 py-6"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Book an AI Implementation Audit
              </a>
            </Button>
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
              Choose the Modules You Need
            </h2>
            <p className="text-xl text-gray-600">
              We implement the system end-to-end and document it so your team can run it confidently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Module 1: AI Lead Intake */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-cyan"></div>
              <CardContent className="pt-8">
                <Filter className="w-10 h-10 text-brand-cyan mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  AI Lead Intake & Qualification
                </h3>
                <p className="text-gray-600 mb-6">
                  Stop wasting time on leads that were never going to convert. Automate qualification so your team only talks to prospects who are actually ready.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lead capture → scoring → routing rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated qualification questions (form/chat/SMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">CRM enrichment + tagging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Real-time notifications + assignment logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integration with your existing stack</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 2: Automated Follow-Up */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-purple"></div>
              <CardContent className="pt-8">
                <Clock className="w-10 h-10 text-brand-purple mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Automated Follow-Up & Appointment Booking
                </h3>
                <p className="text-gray-600 mb-6">
                  Leads go cold fast. Automated follow-up keeps the conversation moving — and books appointments while your team focuses on closing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SMS/email follow-up sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Smart routing + handoff to a human when needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Appointment booking flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Response time improvements (based on your routing + hours + stack)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No-show reduction sequences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 3: AI Reporting */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-orange"></div>
              <CardContent className="pt-8">
                <Bell className="w-10 h-10 text-brand-orange mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  AI Reporting, Alerts & Attribution
                </h3>
                <p className="text-gray-600 mb-6">
                  Dashboards are nice. Knowing what changed and why is better. Get insights that tell you what to do — not just what happened.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-enabled reporting and anomaly alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">"What changed?" insights (not just dashboards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear attribution so leadership can trust decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Performance summaries delivered where you work (Slack, email, etc.)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 4: Integrations */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-brand-green"></div>
              <CardContent className="pt-8">
                <Puzzle className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  Integrations & Custom AI Tools
                </h3>
                <p className="text-gray-600 mb-6">
                  Your stack is unique. We build AI that fits into it — not the other way around.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Platform integrations: Salesforce, GoHighLevel, HubSpot, Slack, Zapier, Make</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ad platform connections: Meta, Google, LinkedIn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom GPTs / knowledge assistants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Content/creative production workflows (optional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Documentation so your team can maintain it</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Implement Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              HOW WE IMPLEMENT
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              From Audit to Live System in Weeks, Not Months
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Map your current lead flow, identify bottlenecks, and define what 'better' looks like for your team.",
              },
              {
                step: "02",
                title: "Build",
                description: "Design workflows, routing logic, tracking, and integrations — all documented and tested before launch.",
              },
              {
                step: "03",
                title: "Launch",
                description: "QA everything, train your team, and go live with confidence. No 'figure it out yourself' handoffs.",
              },
              {
                step: "04",
                title: "Optimize",
                description: "Iterate based on real performance. Optional monthly optimization to keep improving.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-brand-purple mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-4">
              WHAT THIS IMPROVES
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              What Changes When AI Actually Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Faster Response",
                description: "Leads get attention in minutes, not hours — even after hours.",
              },
              {
                title: "Fewer Missed Opportunities",
                description: "Automated follow-up catches the leads that used to slip through.",
              },
              {
                title: "Less Manual Work",
                description: "Your team spends time on selling, not data entry and chasing.",
              },
              {
                title: "Always-On Coverage",
                description: "Systems work when your team can't — nights, weekends, holidays.",
              },
              {
                title: "Better Decision-Making",
                description: "Clear attribution and alerts so you know what's working.",
              },
            ].map((outcome, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-brand-purple">{idx + 1}</span>
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
      <section className="py-24 bg-brand-purple">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Build an AI System That Actually Works?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book an AI Implementation Audit. We'll map your lead flow, identify the biggest bottlenecks, and show you exactly what to automate first.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-purple hover:bg-white/90 font-semibold text-lg px-8 py-6"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Book an AI Implementation Audit
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
