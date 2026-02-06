import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function FeaturedClientResults() {
  const caseStudies = [
    {
      name: "Lifetime Enclosures",
      industry: "Home Services",
      color: "orange",
      metrics: [
        { value: "2.7x", label: "Lead increase" },
        { value: "35%", label: "Lower CPL" },
        { value: "5min", label: "Response time" },
        { value: "$180k", label: "Added revenue" }
      ],
      testimonial: "They didn't just run ads—they rebuilt our entire lead generation system."
    },
    {
      name: "Shoma Group",
      industry: "Multifamily",
      color: "cyan",
      metrics: [
        { value: "150%", label: "Lease-up speed" },
        { value: "42%", label: "Lower CAC" },
        { value: "24/7", label: "AI tours" },
        { value: "$2.1M", label: "Revenue impact" }
      ],
      testimonial: "They got us to 95% occupancy in 6 months. Game changer."
    },
    {
      name: "The Florist Supply Shop",
      industry: "E-commerce",
      color: "green",
      metrics: [
        { value: "+95%", label: "Revenue growth" },
        { value: "+59%", label: "Order volume" },
        { value: "↓44%", label: "Meta CPC" },
        { value: "+97%", label: "Conversions" }
      ],
      testimonial: "They transformed our entire e-commerce operation. Incredible ROI."
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      orange: {
        bg: "from-brand-orange/10 to-transparent",
        text: "text-brand-orange",
        border: "border-brand-orange/20",
        hover: "hover:bg-brand-orange hover:text-white"
      },
      cyan: {
        bg: "from-brand-cyan/10 to-transparent",
        text: "text-brand-cyan",
        border: "border-brand-cyan/20",
        hover: "hover:bg-brand-cyan hover:text-white"
      },
      green: {
        bg: "from-brand-green/10 to-transparent",
        text: "text-brand-green",
        border: "border-brand-green/20",
        hover: "hover:bg-brand-green hover:text-white"
      }
    };
    return colors[color] || colors.orange;
  };

  return (
    <section className="py-24 bg-white border-b">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
            FEATURED RESULTS
          </p>
          <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Real businesses. Real challenges. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study) => {
            const colors = getColorClasses(study.color);
            return (
              <Card key={study.name} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-br ${colors.bg} border-b ${colors.border}`}>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{study.name}</h3>
                  <span className={`inline-block px-3 py-1 bg-${study.color}-20 ${colors.text} text-xs font-semibold rounded-full w-fit`}>
                    {study.industry}
                  </span>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-3 bg-gray-50 rounded">
                          <div className={`text-2xl font-bold ${colors.text} mb-1`}>{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <p className={`text-sm text-gray-600 italic border-l-2 border-${study.color} pl-3`}>
                      "{study.testimonial}"
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full mt-6 border-${study.color} ${colors.text} ${colors.hover}`}
                  >
                    <a href="/results">View Case Study →</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
