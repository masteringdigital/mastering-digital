import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
    { title: "LLM Visibility Scorecard", description: "We test 4-6 real buyer prompts across ChatGPT, Google AI, Perplexity, and Gemini." },
    { title: "Quick Wins for Priority Page", description: "AI-readable summary, FAQ suggestions, and heading improvements for one key page." },
    { title: "Structured Data Check", description: "Schema markup review — are you eligible for AI citations and rich results?" },
    { title: "Overall Score & Tier", description: "Clear rating (0-15) with specific next steps based on your readiness level." },
  ];

  return (
    <div className="min-h-screen bg-white">
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

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your AI Report</h2>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="(555) 123-4567"
                  />
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
                    placeholder="e.g., Denver, CO or Dallas-Fort Worth"
                  />
                  {errors.targetLocation && <p className="text-red-600 text-sm mt-1">{errors.targetLocation}</p>}
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

      {/* Why This Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">WHY THIS MATTERS</p>
            <h2 className="font-bold text-4xl text-gray-900">AI Is Changing How Customers Find You</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-12 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">More and more buyers are skipping Google and asking AI directly:</p>
            <ul className="space-y-4 mb-8">
              {[
                '"What\'s the best HVAC company near me?"',
                '"Where should I buy [product] online?"',
                '"Compare [your brand] vs [competitor]"',
              ].map((question, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-2xl text-purple-600 font-bold">•</span>
                  <span className="text-gray-700 text-lg">{question}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-lg">
              If you're not showing up in these AI answers, you're invisible to a growing segment of your market. This free report shows you exactly where you stand — and what to fix first.
            </p>
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
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-4xl mb-4">Ready to See Your AI Visibility?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get your report within 48 hours — and find out if AI is sending customers to your competitors.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6">
              Get My AI Report <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
