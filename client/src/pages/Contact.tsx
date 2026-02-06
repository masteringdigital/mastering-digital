import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend or form service
    toast.success("Thank you! We'll be in touch within 24 hours.");
    // Redirect to thank you page
    window.location.href = "/thank-you";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              CONTACT US
            </p>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Let's Talk About Your Growth
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Book a strategy session or send us a message. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options + Form Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Book a Call */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Book a Strategy Session</h3>
                <p className="text-gray-600 mb-4">
                  30-45 minutes with a senior strategist. No pitch, just a clear plan.
                </p>
                <Button
                  asChild
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
                >
                  <a href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email Us */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <a href="mailto:info@masteringdigital.com" className="text-brand-purple font-semibold hover:underline">
                  info@masteringdigital.com
                </a>
              </CardContent>
            </Card>

            {/* Send a Message */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Send a Message</h3>
                <p className="text-gray-600 mb-4">
                  Fill out the form below and we'll get back to you.
                </p>
                <Button
                  variant="outline"
                  className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white font-semibold"
                  onClick={() => {
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Go to Form
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="pt-8">
                <h2 className="font-bold text-3xl text-gray-900 mb-6 text-center">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={6}
                      className="border-gray-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-lg"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours. Or book a call directly using the button above.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
