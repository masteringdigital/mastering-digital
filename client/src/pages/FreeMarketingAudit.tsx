import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { trpc } from "@/lib/trpc";

export default function FreeMarketingAudit() {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    industry: "Home Services",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLeadMutation = trpc.fitd.submitLead.useMutation({
    onSuccess: () => {
      window.location.href = `/thank-you?type=marketing-audit&email=${encodeURIComponent(formData.email)}`;
    },
    onError: (error) => {
      setErrors({ submit: error.message });
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.websiteUrl.trim()) newErrors.websiteUrl = "Website URL is required";
    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLeadMutation.mutateAsync({
        reportType: "marketing-audit",
        businessName: formData.businessName,
        websiteUrl: formData.websiteUrl,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        industry: formData.industry,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { title: "Overall Health Score", description: "See how you stack up across visibility, SEO, and reputation with a single score." },
    { title: "Tech Stack Scan", description: "We detect your analytics, pixels, and marketing tools — and flag what's missing." },
    { title: "Google Business Profile", description: "Check if your GBP is claimed, complete, and optimized for local search." },
    { title: "Reputation Snapshot", description: "See your star ratings, review volume, and response rate across platforms." },
    { title: "Website Performance", description: "Get your mobile and desktop speed scores plus Core Web Vitals." },
    { title: "SEO Quick Wins", description: "Identify the fastest fixes to improve your search visibility." },
  ];

  const bulletPoints = [
    "Overall digital health score",
    "Tech stack analysis (tracking, pixels, tools)",
    "Google Business Profile review",
    "Reputation snapshot (ratings + reviews)",
    "Website performance check",
    "SEO basics and quick wins",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-white">
              <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-4">FREE MARKETING AUDIT</p>
              <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-6">
                Get Your Free Marketing Audit in 60 Seconds
              </h1>
              <p className="text-xl text-white/90 mb-8">
                See how your business performs in search, maps, and reviews — and where you're leaving leads on the table.
              </p>
              <ul className="space-y-3">
                {bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-orange" />
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Audit</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.submit && <div className="text-red-600 text-sm">{errors.submit}</div>}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name *</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      if (errors.businessName) setErrors({ ...errors, businessName: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                      errors.businessName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your Business Name"
                  />
                  {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Website URL *</label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => {
                      setFormData({ ...formData, websiteUrl: e.target.value });
                      if (errors.websiteUrl) setErrors({ ...errors, websiteUrl: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                      errors.websiteUrl ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="https://yourwebsite.com"
                  />
                  {errors.websiteUrl && <p className="text-red-600 text-sm mt-1">{errors.websiteUrl}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => {
                      setFormData({ ...formData, industry: e.target.value });
                      if (errors.industry) setErrors({ ...errors, industry: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                      errors.industry ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="Home Services">Home Services</option>
                    <option value="E-commerce / Retail">E-commerce / Retail</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-3 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll email your audit within 2 minutes. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">WHAT'S INCLUDED</p>
            <h2 className="font-bold text-4xl text-gray-900">Your Instant Marketing Scorecard</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">WHAT HAPPENS NEXT</p>
            <h2 className="font-bold text-4xl text-gray-900">Here's What Happens After You Submit</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "1", title: "Submit the form above", description: "(takes 60 seconds)" },
              { number: "2", title: "We run your audit instantly", description: "and email you the results" },
              { number: "3", title: "Book a free 15-minute call", description: "to review your score and identify quick wins" },
              { number: "4", title: "Walk away with 2-3 actionable priorities", description: "whether we work together or not" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">WHO THIS IS FOR</p>
            <h2 className="font-bold text-4xl text-gray-900">This Audit Works Best For:</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-6">Home Services</h3>
              <ul className="space-y-3">
                {[
                  "HVAC contractors",
                  "Roofers & exteriors",
                  "Plumbers & electricians",
                  "Landscapers",
                  "Home improvement",
                  "Any local service business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-6">E-commerce</h3>
              <ul className="space-y-3">
                {[
                  "Shopify stores",
                  "DTC brands",
                  "Online retailers",
                  "Subscription businesses",
                  "B2B e-commerce",
                  "Any online store",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-4xl mb-4">Ready to See Where You Stand?</h2>
            <p className="text-xl text-white/90 mb-8">
              Your free audit takes 60 seconds to generate. No credit card, no commitment — just clarity.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6">
              Get My Free Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
