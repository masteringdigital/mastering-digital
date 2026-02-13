import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WebDesign() {
  const webDesignProjects = [
    {
      id: 1,
      name: "WristCo",
      category: "E-commerce",
      description: "Custom wristband e-commerce platform with product filtering, inventory management, and seamless checkout experience.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/PZapfxAznKdTImAp.png",
      results: ["Custom product catalog", "Real-time inventory", "Mobile-optimized checkout"],
      link: "#"
    },
    {
      id: 2,
      name: "Addaday",
      category: "E-commerce",
      description: "Premium recovery and wellness product store featuring BioZoom Edge technology with hero-driven design and product showcase.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/awLozdOHvWiwvwbc.png",
      results: ["Hero banner design", "Product features section", "Award badge integration"],
      link: "#"
    },
    {
      id: 3,
      name: "Ramona LaRue by Arianne",
      category: "E-commerce",
      description: "Luxury fashion e-commerce site showcasing hand-painted activewear and resort wear with sophisticated visual design.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/AXILgSsNeuNVKRAD.png",
      results: ["Luxury brand positioning", "Gallery showcase", "Fashion-forward design"],
      link: "#"
    },
    {
      id: 4,
      name: "Wristband Resources",
      category: "E-commerce",
      description: "B2B wristband supplier platform with product comparison, bulk ordering, and customization options for events and businesses.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/lMtQnEkyJbmlKGwd.png",
      results: ["Product comparison tools", "Bulk order system", "Customization interface"],
      link: "#"
    },
    {
      id: 5,
      name: "T&S Impact Windows",
      category: "Home Services",
      description: "Lead generation website for South Florida windows and doors company with quote request form, project gallery, and service details.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/loHMmnTbzGmHidyU.png",
      results: ["Lead capture form", "Project portfolio", "Service breakdown"],
      link: "#"
    },
    {
      id: 6,
      name: "Pink Papyrus",
      category: "E-commerce",
      description: "Vibrant pet accessories brand with hero section, product categorization, and lifestyle imagery showcasing dog and cat products.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/GoojbNsviXOdbHsg.png",
      results: ["Brand personality design", "Product categorization", "Lifestyle imagery"],
      link: "#"
    },
    {
      id: 7,
      name: "SEEQ",
      category: "E-commerce",
      description: "Clear protein supplement brand with bold color-coded product showcase, subscription options, and flavor variety display.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/rpJEebOTygTipTei.png",
      results: ["Bold visual design", "Product showcase", "Subscription integration"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-gradient-to-br from-brand-blue via-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Web Design & Development That Converts
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              From concept to launch, we build beautiful, high-performing websites that attract customers and drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6"
              >
                <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                  Get a Free Website Audit
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-brand-blue"
              >
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              OUR APPROACH
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Web Design Services
            </h2>
            <p className="text-xl text-gray-600">
              We combine strategic design thinking with technical excellence to create websites that work as hard as you do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg">
              <div className="h-2 bg-brand-blue"></div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-gray-900">
                  E-commerce Builds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Custom shopping experiences that showcase your products and drive conversions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Product catalog design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Checkout optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Payment integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg">
              <div className="h-2 bg-brand-purple"></div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-gray-900">
                  Lead Generation Sites
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Purpose-built websites designed to capture leads and qualify prospects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lead capture forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Service showcases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">CRM integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-lg">
              <div className="h-2 bg-brand-cyan"></div>
              <CardHeader>
                <CardTitle className="font-bold text-xl text-gray-900">
                  Brand Websites
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Sophisticated brand experiences that tell your story and build credibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Brand storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Visual design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Content strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              CASE STUDIES
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900">
              Recent Web Design Projects
            </h2>
          </div>

          <div className="space-y-12">
            {webDesignProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2 lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-bold text-3xl text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900">What We Built:</p>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
                    size="lg"
                  >
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
              OUR PROCESS
            </p>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900">
              How We Build Websites
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, audience, and competition." },
              { step: "02", title: "Strategy", desc: "We develop a clear roadmap for design and functionality." },
              { step: "03", title: "Design", desc: "We create beautiful, conversion-focused designs." },
              { step: "04", title: "Launch", desc: "We deploy, test, and optimize for performance." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue text-white font-bold text-2xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your web design needs and create a strategy that drives results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 py-6"
            >
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Schedule a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
