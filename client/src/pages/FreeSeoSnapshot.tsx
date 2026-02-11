import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ShieldCheck, Search, MapPin, AlertTriangle, ListChecks } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function FreeSeoSnapshot() {
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
      window.location.href = `/thank-you?type=seo-snapshot&email=${encodeURIComponent(formData.email)}`;
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
        reportType: "seo-snapshot",
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
    { title: "Domain Authority & Backlinks", description: "See your domain strength and the quality of sites linking to you.", icon: ShieldCheck },
    { title: "Keyword Visibility", description: "Find out which keywords you rank for and where you stand against competitors.", icon: Search },
    { title: "Local SEO Status", description: "Check your local pack visibility, citations, and local ranking opportunities.", icon: MapPin },
    { title: "Technical Health Flags", description: "Identify crawl errors, mobile issues, and other technical barriers.", icon: AlertTriangle },
    { title: "Top 3-5 Priority Fixes", description: "Get a clear roadmap of the fastest wins to improve your rankings.", icon: ListChecks },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">FREE SEO SNAPSHOT</p>
              <h1 className="font-bold text-5xl md:text-6xl leading-tight mb-6">
                See Your SEO Health in One Page
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Get a one-page SEO analysis showing your domain health, keyword visibility, local ranking opportunities, and the top fixes to improve your search visibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Domain authority & backlink profile",
                  "Keyword ranking overview",
                  "Local SEO status check",
                  "Technical health flags",
                  "Top 3-5 priority fixes",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your SEO Snapshot</h2>
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Get My SEO Snapshot"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll email your snapshot within 24 hours. No spam, ever.
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
            <h2 className="font-bold text-4xl text-gray-900">Your One-Page SEO Analysis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
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

      {/* Final CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-4xl mb-4">Ready to See Your SEO Snapshot?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get your one-page analysis within 24 hours. No credit card, no commitment.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6">
              Get My SEO Snapshot <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
