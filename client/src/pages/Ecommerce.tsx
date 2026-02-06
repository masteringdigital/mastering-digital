import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, CheckCircle2, TrendingUp, Target, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Ecommerce() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-purple to-[#6B21A8]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Marketing for E-commerce & DTC Brands
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Drive profitable customer acquisition and maximize lifetime value through data-driven campaigns and conversion optimization. Built for online retailers and direct-to-consumer brands.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl text-gray-900 mb-12 text-center">
              Common Challenges We Solve
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Rising Acquisition Costs</h3>
                      <p className="text-gray-600">
                        Meta and Google CPMs climbing while ROAS drops, making it harder to scale profitably.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">High Cart Abandonment</h3>
                      <p className="text-gray-600">
                        70%+ of shoppers adding to cart but never completing checkout, leaving revenue on the table.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Low Repeat Purchase Rates</h3>
                      <p className="text-gray-600">
                        One-time buyers who never return, making customer lifetime value too low to scale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">Scaling Profitably</h3>
                      <p className="text-gray-600">
                        Hitting a ceiling beyond your initial customer base without tanking margins.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-bold text-4xl text-gray-900 mb-6 text-center">
              Our Solutions for E-commerce Brands
            </h2>
            <p className="text-xl text-gray-600 text-center">
              We build full-funnel marketing systems designed to acquire customers profitably and maximize their lifetime value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Performance Max & Shopping Campaigns</h3>
                <p className="text-gray-600 mb-4">
                  Google campaigns optimized for ROAS, not just clicks — targeting high-intent shoppers ready to buy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Product feed optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Smart bidding strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple mt-1">•</span>
                    <span className="text-gray-700">Seasonal campaign scaling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Meta Dynamic Ads & Lookalikes</h3>
                <p className="text-gray-600 mb-4">
                  Automated product ads that show the right products to the right people, plus lookalike audiences to expand reach.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Dynamic product retargeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Lookalike audience expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-cyan mt-1">•</span>
                    <span className="text-gray-700">Creative testing & optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Cart Recovery Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automated email and SMS sequences that recover abandoned carts and turn browsers into buyers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Multi-touch cart recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Personalized product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-orange mt-1">•</span>
                    <span className="text-gray-700">Dynamic discount triggers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Landing Page & Checkout CRO</h3>
                <p className="text-gray-600 mb-4">
                  Conversion rate optimization to turn more visitors into customers without spending more on ads.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">•</span>
                    <span className="text-gray-700">A/B testing framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">•</span>
                    <span className="text-gray-700">Checkout flow optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">•</span>
                    <span className="text-gray-700">Mobile experience improvements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-4xl text-gray-900 mb-12 text-center">
              Typical Results for E-commerce Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-orange mb-2">4-6x</div>
                  <p className="text-gray-600 font-medium">ROAS (Return on Ad Spend)</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-green mb-2">25-35%</div>
                  <p className="text-gray-600 font-medium">Cart Abandonment Recovery</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-brand-cyan mb-2">-40%</div>
                  <p className="text-gray-600 font-medium">Customer Acquisition Cost</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-purple/5 to-brand-cyan/5">
              <CardContent className="pt-8">
                <p className="text-brand-purple font-semibold text-sm uppercase tracking-wider mb-2">
                  FEATURED CLIENT
                </p>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Wristband Resources</h3>
                <p className="text-gray-700 mb-4">
                  Achieved 4.8x ROAS through strategic Meta campaigns and automated cart recovery, increasing monthly revenue by 156%. The combination of dynamic product ads and email automation recovered 32% of abandoned carts.
                </p>
                <Button asChild variant="outline">
                  <Link href="/results">View Full Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple to-[#6B21A8]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
              Ready to Scale Your E-commerce Brand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a strategy session to see how we can help grow your online store profitably.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-purple hover:bg-white/90 font-semibold text-lg px-8 py-6">
              <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                Book a Strategy Session
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
