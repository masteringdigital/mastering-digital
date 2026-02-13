import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Brain, Lightbulb, Code, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function FreeAiVisibilityReport() {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    name: "",
    email: "",
    phone: "",
    industry: "Home Services",
    primaryService: "",
    targetLocation: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLeadMutation = trpc.fitd.submitLead.useMutation({
    onSuccess: () => {
      window.location.href = `/thank-you?type=ai-visibility&email=${encodeURIComponent(formData.email)}`;
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
    if (!formData.primaryService.trim()) newErrors.primaryService = "Primary service is required";
    if (!formData.targetLocation.trim()) newErrors.targetLocation = "Target location is required";
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
        reportType: "ai-visibility",
        businessName: formData.businessName,
        websiteUrl: formData.websiteUrl,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        industry: formData.industry,
        primaryService: formData.primaryService,
        targetLocation: formData.targetLocation,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { title: "LLM Visibility Scorecard", description: "We test 4-6 real buyer prompts across ChatGPT, Google AI, Perplexity, and Gemini.", icon: Brain },
    { title: "Quick Wins for Priority Page", description: "AI-readable summary, FAQ suggestions, and heading improvements for one key page.", icon: Lightbulb },
    { title: "Structured Data Check", description: "Schema markup review — are you eligible for AI citations and rich results?", icon: Code },
    { title: "Overall Score & Tier", description: "Clear rating (0-15) with specific next steps based on your readiness level.", icon: Trophy },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-4">FREE AI VISIBILITY REPORT</p>
              <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-6">
                Is Your Business Visible in AI Search?
              </h1>
              <p className="text-xl text-white/90 mb-8">
                When customers ask ChatGPT, Google AI, or Perplexity for recommendations — do you show up? Find out with our free AI Visibility Report.
              </p>
              <ul className="space-y-3">
                {[
                  "LLM visibility scorecard (4 platforms tested)",
                  "Real buyer-intent prompts analyzed",
                  "Quick wins for your priority page",
                  "Structured data / schema check",
                  "Overall AI-readiness score",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-400" />
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Report</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Name *</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      if (errors.businessName) setErrors({ ...errors, businessName: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Service *</label>
                  <input
                    type="text"
                    value={formData.primaryService}
                    onChange={(e) => {
                      setFormData({ ...formData, primaryService: e.target.value });
                      if (errors.primaryService) setErrors({ ...errors, primaryService: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.primaryService ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="e.g., HVAC Services, Plumbing"
                  />
                  {errors.primaryService && <p className="text-red-600 text-sm mt-1">{errors.primaryService}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Location *</label>
                  <input
                    type="text"
                    value={formData.targetLocation}
                    onChange={(e) => {
                      setFormData({ ...formData, targetLocation: e.target.value });
                      if (errors.targetLocation) setErrors({ ...errors, targetLocation: "" });
                    }}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.targetLocation ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="e.g., Denver, CO or Multi-state"
                  />
                  {errors.targetLocation && <p className="text-red-600 text-sm mt-1">{errors.targetLocation}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Get My AI Report"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll email your report within 48 hours. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Search Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">WHY AI SEARCH MATTERS</p>
            <h2 className="font-bold text-4xl text-gray-900">The Way Customers Search Is Changing — Fast</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              A growing number of buyers are skipping Google entirely and asking AI for answers:
            </p>
            <ul className="space-y-4 mb-12">
              {[
                '"What\'s the best plumber near me?"',
                '"Compare [Brand A] vs [Brand B]"',
                '"Where can I buy organic dog food online?"',
              ].map((question, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-2xl text-purple-600 font-bold">•</span>
                  <span className="text-gray-700 text-lg">{question}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mb-8">
              When AI answers these questions, it pulls from websites it trusts — sites with clear, structured content that's easy to understand and cite.
            </p>
            <p className="text-lg text-gray-700 mb-12">
              If your website isn't optimized for AI search, you're invisible to this new wave of customers.
            </p>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-gray-700">of Gen Z prefers TikTok or AI over Google for search</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200M+</div>
                <p className="text-gray-700">weekly active ChatGPT users asking product questions</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">30%+</div>
                <p className="text-gray-700">of Google searches now show AI Overviews</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded">
              <p className="text-lg text-gray-800 font-semibold">
                This isn't a future problem — it's happening now. The businesses that optimize first will capture this traffic while competitors are still figuring it out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">WHAT'S INCLUDED</p>
            <h2 className="font-bold text-4xl text-gray-900">Your AI Search Visibility Check</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-12 shadow-lg">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4">WANT TO GO DEEPER?</p>
            <h2 className="font-bold text-3xl text-gray-900 mb-6">Get the Full AI Search Audit</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              The free report shows you where you stand. The Full AI Search Audit shows you exactly how to fix it.
            </p>

            <div className="bg-purple-50 rounded-lg p-8 mb-8">
              <p className="text-sm font-semibold text-purple-900 uppercase tracking-wider mb-4">What's Included ($299)</p>
              <ul className="space-y-3">
                {[
                  "20-point AI visibility assessment",
                  "LLM visibility testing across 4+ platforms",
                  "Complete E-E-A-T analysis",
                  "Technical SEO for AI crawlability",
                  "Structured data roadmap with paste-ready code",
                  "GEO + AEO optimization recommendations",
                  "90-day action plan with priorities ranked",
                  "60-minute strategy call to review findings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-gray-700 mt-6">Delivery: 48-72 hours</p>
            </div>

            <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg py-6 mb-4">
              Learn More About the Full Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-600 text-center">
              Or start with the free report above — it's a great first step.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-4xl mb-4">Ready to See Your AI Visibility?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free AI Visibility Report within 48 hours. No credit card, no commitment.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6">
              Get My Free Report <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
