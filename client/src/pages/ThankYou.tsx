import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Thank You Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-brand-blue to-[#2A4A6F] flex-grow flex items-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Thank You!
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              We've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-lg text-white/80 mb-12">
              In the meantime, feel free to explore our case studies or book a strategy session directly.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Book a Strategy Session
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Skip the wait and talk to us now. 30-45 minutes with a senior strategist.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
                  >
                    <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-brand-purple" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    View Case Studies
                  </h3>
                  <p className="text-gray-600 mb-6">
                    See how we've helped businesses like yours grow faster.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-semibold"
                  >
                    <a href="/results">
                      View Results
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold"
              >
                <a href="/">
                  ← Back to Home
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
