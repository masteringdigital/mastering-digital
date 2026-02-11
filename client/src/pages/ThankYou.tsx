import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  const [reportType, setReportType] = useState<string>("marketing-audit");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") || "marketing-audit";
    const emailParam = params.get("email") || "";
    setReportType(type);
    setEmail(emailParam);
  }, []);

  const reportInfo: Record<string, { title: string; delivery: string; description: string }> = {
    "marketing-audit": {
      title: "Free Marketing Audit",
      delivery: "~2 minutes",
      description: "Your complete digital health check is arriving in your inbox right now.",
    },
    "seo-snapshot": {
      title: "Free SEO Snapshot",
      delivery: "within 24 hours",
      description: "Your one-page SEO analysis is being prepared and will arrive in your inbox soon.",
    },
    "ai-visibility": {
      title: "Free AI Visibility Report",
      delivery: "within 48 hours",
      description: "Your AI search visibility report is being prepared by our team.",
    },
  };

  const info = reportInfo[reportType] || reportInfo["marketing-audit"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue to-[#2A4A6F] flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/20 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-brand-green" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="font-bold text-4xl text-gray-900 mb-4">
            Thanks! Your {info.title} is on the way.
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {info.description}
          </p>

          {/* Delivery Timeline */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Delivery time:</span> {info.delivery}
            </p>
            <p className="text-sm text-gray-600">
              Check your email (including spam folder) for your report.
            </p>
          </div>

          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="font-bold text-2xl text-gray-900 mb-6">What Happens Next</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Check your email</p>
                  <p className="text-gray-600">Look for your report from Mastering Digital</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Review your results</p>
                  <p className="text-gray-600">See your score and actionable recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Book a free call (optional)</p>
                  <p className="text-gray-600">Discuss your results with one of our strategists</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <a
              href="https://calendly.com/mastering-digital/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="lg" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold text-lg py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free 15-Minute Call
              </Button>
            </a>

            <Link href="/">
              <Button size="lg" variant="outline" className="w-full font-semibold text-lg py-6">
                Explore Our Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Footer Message */}
          <p className="text-sm text-gray-500 mt-8">
            Questions? Reply to the email from Mastering Digital or{" "}
            <a href="mailto:hello@masteringdigital.com" className="text-brand-blue hover:underline font-semibold">
              contact us directly
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
