/*
DESIGN: Kinetic Gradient Futurism
- Bento-grid layouts with variable cell sizes
- Animated gradient backgrounds
- Floating cards with depth and glassmorphism
- Smooth, elastic animations
- Playful yet professional aesthetic
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Globe,
  LineChart,
  Mail,
  Megaphone,
  Search,
  Settings,
  ShoppingCart,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `url(https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/92U5pcweAEWTHyokgdIlQO-img-1_1770168190000_na1fn_aGVyby1ncmFkaWVudC1tZXNo.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzkyVTVwY3dlQUVXVEh5b2tnZElsUU8taW1nLTFfMTc3MDE2ODE5MDAwMF9uYTFmbl9hR1Z5YnkxbmNtRmthV1Z1ZEMxdFpYTm8ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l20w2LnV2bTc8B~VbZSOENSb433Z3eUSnVApmCcu4mn-UGIP-KwIGj4C4vCVru71n2QzRoCWIPcB-sV6XPNbVVz-cd0TwRdS2V0OdxJtyGWy8q037a6iIbMmzSxmTyOMhdHj4XE2dQAZBg~ak9c7HBUC4r2MqdUbnvwc7mXOaZvXsYAtv6XzOybeuj~-s5~d-OrrtfyqcXFe0jcxjFONZxnFnCG1C3-ze4oFyF-cgxgq0TGpEqHVV-a-NRklS5r-pQDaAIVRt5X~LgkeUo0VNbymHtkitptttZy-p42s1hZFaKo9qw7rv0-cP6KCZNRwKrE-W6VqhuzIrl1yZG09fw__)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight">
                Grow Faster With a Marketing Partner Who Actually Delivers
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                We help home services companies, e-commerce brands, and multifamily properties
                generate more leads, book more appointments, and grow revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("final-cta")}
                  size="lg"
                  className="gradient-mesh text-white font-display text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  Book a Strategy Session
                </Button>
                <Button
                  onClick={() => scrollToSection("results")}
                  size="lg"
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm font-display text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  See Our Results
                </Button>
              </div>
            </div>

            {/* Right Column - 7 cols - Feature Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Feature Card */}
                <Card className="col-span-2 floating-card glass border-2">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl text-foreground">
                      Senior strategists. Real reporting. Actual results.
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/70">
                      No junior handoffs. 24/7 dashboard access. AI-powered systems that scale.
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Icon Cards */}
                <Card className="floating-card glass border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <Target className="w-10 h-10 text-primary" />
                    <p className="font-display text-foreground">Strategy</p>
                  </CardContent>
                </Card>

                <Card className="floating-card glass border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <Megaphone className="w-10 h-10 text-accent" />
                    <p className="font-display text-foreground">Paid Ads</p>
                  </CardContent>
                </Card>

                <Card className="floating-card glass border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <Bot className="w-10 h-10 text-primary" />
                    <p className="font-display text-foreground">AI Systems</p>
                  </CardContent>
                </Card>

                <Card className="floating-card glass border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
                    <BarChart3 className="w-10 h-10 text-accent" />
                    <p className="font-display text-foreground">Analytics</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm uppercase tracking-wider mb-4">
              SERVICES
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Full-Service Marketing Built for Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine strategy, execution, and optimization into one accountable partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card 1: Strategy + Channel Marketing */}
            <Card className="floating-card border-2">
              <div className="h-3 gradient-mesh rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="font-display text-2xl text-foreground">
                  Strategy & Channel Marketing
                </CardTitle>
                <CardDescription className="text-lg">
                  Reach the right audience and turn clicks into customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We build the plan and execute across every channel that matters:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Discovery & channel strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Google Ads & LSA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Megaphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Meta / Social Ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Email & SMS automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">SEO & local SEO</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2: Web Design & CRO */}
            <Card className="floating-card border-2">
              <div className="h-3 gradient-mesh rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="font-display text-2xl text-foreground">
                  Web Design & Conversion
                </CardTitle>
                <CardDescription className="text-lg">
                  Get a website that converts — not just one that looks good.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We build and optimize the pages that turn traffic into leads:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Website design & development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShoppingCart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">E-commerce builds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Landing page optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LineChart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">A/B testing & CRO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">GA4 & attribution dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3: AI Implementation */}
            <Card className="floating-card border-2 md:col-span-2">
              <div className="h-3 gradient-mesh rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="font-display text-2xl text-foreground">
                  AI Implementation
                </CardTitle>
                <CardDescription className="text-lg">
                  Move faster with AI systems that actually work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We turn AI into real business systems — not just tools:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Bot className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">AI-powered lead intake & qualification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        Automated follow-up & appointment booking
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">AI-enabled reporting & alerts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Platform integrations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Stats */}
            <div>
              <p className="text-primary font-display text-sm uppercase tracking-wider mb-4">
                RESULTS
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Real Clients. Real Growth.
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                We measure success by one thing: your results. Here's what we've delivered for
                clients like you.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <div className="font-display text-5xl text-primary mb-2">2.5x</div>
                  <p className="text-foreground">Average lead increase for home services clients</p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <div className="font-display text-5xl text-accent mb-2">42%</div>
                  <p className="text-foreground">Reduction in cost per lead</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="font-display text-5xl text-primary mb-2">5 min</div>
                  <p className="text-foreground">
                    Average response time with AI follow-up (down from 4+ hours)
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-12 gradient-mesh text-white font-display hover:scale-105 transition-transform"
              >
                View Case Studies
              </Button>
            </div>

            {/* Right Side - Dashboard Visual */}
            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/92U5pcweAEWTHyokgdIlQO-img-2_1770168185000_na1fn_ZGFzaGJvYXJkLW1vY2t1cA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzkyVTVwY3dlQUVXVEh5b2tnZElsUU8taW1nLTJfMTc3MDE2ODE4NTAwMF9uYTFmbl9aR0Z6YUdKdllYSmtMVzF2WTJ0MWNBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Enca8~9SRdvIXOewMx1sFR3MzdQQKHfUi301O~lwhvGOOKk34Xp8SGa29rgP59Gzcogd7iI5nLBCyRsl4z~O4OdvuLp2NTOwz2PNlzQLn8RZUBJOGyzk2K5Nu9wbb59JsOx~95P~GG8PNZXpsAV8ACX~4sECStspdLXcOChj2Jpf9xqzxPKMbritYMhYQ2uKA1KskKv-NiXSj0m~EnZAe8gek7IVf7-FM7xaQhkc2llAI9l3n-5W0LoregSF2LvFW5YK~dWaGOiYjgHSMlDI1IAeU6WhkQmHHVHPa0FDrtRsu2zPpDykOA5ZJ48tf31LXvEQHhsxyvINni0VhpVfMQ__"
                alt="Marketing Dashboard"
                className="rounded-lg shadow-2xl floating-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm uppercase tracking-wider mb-4">
              WHO WE SERVE
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Marketing Built for Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in high-intent industries where leads, speed, and conversion matter
              most.
            </p>
          </div>

          <Tabs defaultValue="home-services" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="home-services" className="font-display">
                Home Services
              </TabsTrigger>
              <TabsTrigger value="ecommerce" className="font-display">
                E-commerce
              </TabsTrigger>
              <TabsTrigger value="lease-ups" className="font-display">
                Lease-Ups
              </TabsTrigger>
            </TabsList>

            {/* Home Services Tab */}
            <TabsContent value="home-services">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="font-display text-6xl text-primary/20 mb-4">01</div>
                  <h3 className="font-display text-3xl text-foreground mb-6">
                    Fill your schedule with qualified jobs — not tire-kickers.
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We help HVAC, roofing, flooring, and home improvement companies generate leads,
                    book appointments, and grow revenue with paid ads, local SEO, and AI-powered
                    follow-up.
                  </p>
                  <Button
                    size="lg"
                    className="gradient-mesh text-white font-display hover:scale-105 transition-transform"
                  >
                    See Home Services Solutions
                  </Button>
                </div>
                <div>
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/92U5pcweAEWTHyokgdIlQO-img-3_1770168187000_na1fn_YWktY2hhdC1ib29raW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzkyVTVwY3dlQUVXVEh5b2tnZElsUU8taW1nLTNfMTc3MDE2ODE4NzAwMF9uYTFmbl9ZV2t0WTJoaGRDMWliMjlyYVc1bi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nFDfcresG5wMFH31o4wToQMehlgEdGXCrveKZV3HhfG9mvS0HSl8RP8CeoYaE5iinyahJ~2Qxl4d0je1NBJAX-a7NPfqOlCeNVpV~Fgi8jBZ7yqrlzaOUb0qn3Ny5-BAsjLyjiHyLWSslTTIuF~FeFrlsNQusKAuaSuJSOCiFzMNUJeWA5gnv7jbadVRKnxvwBuN-PVNmxxG~whCZSBiFP9mhyMFc9AX5KY1ulQJEch0EDzMj~jT3su8yHk7MkgxsbCVMNbmZW5MA~IxlrYC65T3LpudUJL2xFRo3jkIYbBdmjGYUFmlJYfEpvXjmwYdt1FKNx7nXFOyt2Sjcky4rg__"
                    alt="AI Chat Booking"
                    className="rounded-lg shadow-xl floating-card max-w-sm mx-auto"
                  />
                </div>
              </div>
            </TabsContent>

            {/* E-commerce Tab */}
            <TabsContent value="ecommerce">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/92U5pcweAEWTHyokgdIlQO-img-4_1770168190000_na1fn_ZWNvbW1lcmNlLWRhc2hib2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzkyVTVwY3dlQUVXVEh5b2tnZElsUU8taW1nLTRfMTc3MDE2ODE5MDAwMF9uYTFmbl9aV052YlcxbGNtTmxMV1JoYzJoaWIyRnlaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pXhJ8GOAwNOQonRXr~AkzoTHwp5W1Za4C4uCZHbScIKAtPktNmGNWt~U~J0brZSpqRWUgAEbgS~6J1ctJtVtk0Wx9DvHP4XRs3eMsJaL3NbW5b1FyNTCMd9~gSYs~rHd0b6N4xeVGRh9O3rI6kvq0efXBVxnaSslqFLrzmddz5h9Rox684JMVFx65jqzwtNxbKhO6otsaQWpZDHZI-i7f4hQmA7VaXrsPtPoYtfoPewIJgxq37z7ex8PNWtDkAxBg9Yku4ZXbiybl4I4MtTAcv2VJ~rdHXs1n6JLRzSLFwduDbfJ0E--W6zwr~7UxMuWoDkhlkAdbinyG4Xm3~aTg__"
                    alt="E-commerce Dashboard"
                    className="rounded-lg shadow-xl floating-card"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="font-display text-6xl text-accent/20 mb-4">02</div>
                  <h3 className="font-display text-3xl text-foreground mb-6">
                    Turn traffic into revenue with campaigns that actually convert.
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We help DTC and e-commerce brands scale profitably with paid social, email/SMS
                    automation, CRO, and full-funnel strategy.
                  </p>
                  <Button
                    size="lg"
                    className="gradient-mesh text-white font-display hover:scale-105 transition-transform"
                  >
                    See E-commerce Solutions
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Lease-Ups Tab */}
            <TabsContent value="lease-ups">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="font-display text-6xl text-primary/20 mb-4">03</div>
                  <h3 className="font-display text-3xl text-foreground mb-6">
                    Lease faster with marketing built for velocity.
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Lease Ups — our sister company — specializes in lease-up marketing for
                    multifamily properties. We combine hyper-local paid media, ILS optimization, and
                    AI-driven follow-up to fill units fast.
                  </p>
                  <Button
                    size="lg"
                    className="gradient-mesh text-white font-display hover:scale-105 transition-transform"
                  >
                    Explore Lease Ups
                  </Button>
                </div>
                <div>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center floating-card">
                    <p className="text-muted-foreground font-display">Property Listing Mockup</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://private-us-east-1.manuscdn.com/sessionFile/gdoMzMLMX7RpezMxgQSeYN/sandbox/92U5pcweAEWTHyokgdIlQO-img-5_1770168193000_na1fn_dGVhbS1jb2xsYWJvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ2RvTXpNTE1YN1JwZXpNeGdRU2VZTi9zYW5kYm94LzkyVTVwY3dlQUVXVEh5b2tnZElsUU8taW1nLTVfMTc3MDE2ODE5MzAwMF9uYTFmbl9kR1ZoYlMxamIyeHNZV0p2Y21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ANdFaBVxTA4IuxcSFX6xcedKIe4EionPCrW2oKgOsrOYzmWE9qRLL5PmtLrqbRKvp0a8M7KhXdfq2yCJ0lTVq3XIapVFYf-8V8Fu8kmvRFCUIVTqHjEHsbB3zdFlP~tiZdBvRbua~IQCqMJ~DWbXrP46bKCE-TrwB1Ipymu0dqIJ6ml0XB5DQvUjvaH9bKPOCQJVHCDc-yqXMi7AuQeD5jFQXq2fXu6UZEDUCD4sTdnkGDrE0DSVUncroTo9ny9r-1JoOXtAp4nyHKAiFc2YdMRQ4HWkqUpJechIX73TGH083IpuyBzl47wX-xT6SRuZw25aSvw1GaKpkRGFE-QQlw__)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm uppercase tracking-wider mb-4">
              WHY MASTERING DIGITAL
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-background mb-6">
              Your Growth Partner, Not Just Another Agency
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              We're built different — and your results will prove it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-dark border-background/20">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-xl text-background mb-3">
                  Senior Strategists on Every Account
                </h3>
                <p className="text-background/80">
                  No handoff to junior teams. Your account is managed by experienced strategists who
                  understand your business.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark border-background/20">
              <CardContent className="pt-6">
                <BarChart3 className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-display text-xl text-background mb-3">
                  24/7 Reporting Visibility
                </h3>
                <p className="text-background/80">
                  Check your performance anytime with our real-time reporting platform. No waiting
                  for monthly reports.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark border-background/20">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-xl text-background mb-3">
                  Landing Pages & CRO Built In-House
                </h3>
                <p className="text-background/80">
                  We don't just run ads — we build and optimize the pages that convert.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark border-background/20">
              <CardContent className="pt-6">
                <Settings className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-display text-xl text-background mb-3">
                  Tracking & Dashboards Are Standard
                </h3>
                <p className="text-background/80">
                  GA4, GTM, and clear attribution come included. You'll always know what's working.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark border-background/20">
              <CardContent className="pt-6">
                <Bot className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-xl text-background mb-3">
                  AI Implementation That Actually Works
                </h3>
                <p className="text-background/80">
                  We turn AI into real systems — lead qualification, automated follow-up, reporting
                  — that save time and scale your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-dark border-background/20">
              <CardContent className="pt-6">
                <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-display text-xl text-background mb-3">
                  Accountable Partnership
                </h3>
                <p className="text-background/80">
                  We're invested in your success. Clear communication, transparent reporting, and
                  results you can measure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-display text-sm uppercase tracking-wider mb-4">
              HOW WE WORK
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              A Simple Path From Kickoff to Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process that keeps you informed and in control at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="floating-card border-2">
              <CardContent className="pt-6">
                <div className="font-display text-5xl text-primary mb-4">01</div>
                <h3 className="font-display text-xl text-foreground mb-3">Discover</h3>
                <p className="text-muted-foreground">
                  We start with a Strategy Session to understand your goals, challenges, and current
                  marketing. You walk away with a clear action plan.
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card border-2">
              <CardContent className="pt-6">
                <div className="font-display text-5xl text-accent mb-4">02</div>
                <h3 className="font-display text-xl text-foreground mb-3">Strategize</h3>
                <p className="text-muted-foreground">
                  We build a custom roadmap — channels, messaging, creative, and tech stack —
                  tailored to your business and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card border-2">
              <CardContent className="pt-6">
                <div className="font-display text-5xl text-primary mb-4">03</div>
                <h3 className="font-display text-xl text-foreground mb-3">Launch</h3>
                <p className="text-muted-foreground">
                  Campaigns go live, landing pages deploy, tracking is installed, and AI systems are
                  activated.
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card border-2">
              <CardContent className="pt-6">
                <div className="font-display text-5xl text-accent mb-4">04</div>
                <h3 className="font-display text-xl text-foreground mb-3">Optimize</h3>
                <p className="text-muted-foreground">
                  We monitor, test, and improve continuously. You get 24/7 reporting visibility and
                  regular optimization calls.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-24 gradient-mesh relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Ready to Grow?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              30–45 minutes with a senior strategist. No pitch, no pressure — just a clear action
              plan for your business.
            </p>
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 font-display text-xl px-12 py-8 hover:scale-105 transition-transform"
            >
              Book a Strategy Session
            </Button>
            <p className="text-white/80 mt-6 text-sm">
              No commitment required. We'll review your current marketing, identify quick wins, and
              give you a roadmap — whether we work together or not.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-0">
        <Footer />
      </section>
    </div>
  );
}
