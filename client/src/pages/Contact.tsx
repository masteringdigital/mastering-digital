import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { useEffect } from "react";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  // Load GoHighLevel form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Listen for form submission and redirect to thank you page
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // GoHighLevel sends a message when form is submitted
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          // Check if it's a form submission success message
          if (data.type === 'hsFormCallback' && data.eventName === 'onFormSubmitted') {
            // Generate event ID for deduplication
            const eventId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            // Track Meta Pixel Lead event (browser-side)
            if (typeof (window as any).fbq === 'function') {
              (window as any).fbq('track', 'Lead', {
                content_name: 'Contact Form Submission',
                content_category: 'Contact'
              }, { eventID: eventId });
            }
            
            // Track via Meta CAPI (server-side) for deduplication
            // Get Facebook cookies for better attribution
            const fbp = document.cookie.split('; ').find(row => row.startsWith('_fbp='))?.split('=')[1];
            const fbc = document.cookie.split('; ').find(row => row.startsWith('_fbc='))?.split('=')[1];
            
            // Call server-side CAPI tracking (fire and forget)
            fetch('/api/trpc/metaCAPI.trackLead', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                eventId,
                sourceUrl: window.location.href,
                fbp,
                fbc,
                customData: {
                  contentName: 'Contact Form Submission',
                  contentCategory: 'Contact'
                }
              })
            }).catch(err => console.error('CAPI tracking failed:', err));
            
            // Redirect to thank you page after short delay
            setTimeout(() => {
              window.location.href = '/thank-you';
            }, 1000);
          }
        } catch (e) {
          // Ignore parsing errors - continue
          console.debug('Form message parsing error:', e);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
                  30-45 minutes with a dedicated expert. No pitch, just a clear plan.
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
                <a href="mailto:roi@masteringdigital.com" className="text-brand-purple font-semibold hover:underline">
                  roi@masteringdigital.com
                </a>
                <br />
                <a href="tel:+13053767910" className="text-brand-purple font-semibold hover:underline">
                  305-376-7910
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

          {/* GoHighLevel Contact Form */}
          <div id="contact-form" className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="pt-8 pb-8">
                <h2 className="font-bold text-3xl text-gray-900 mb-6 text-center">
                  Send Us a Message
                </h2>
                <div className="w-full" style={{ minHeight: '650px' }}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/DyxSxyg62a1XFfVDTdZ3"
                    style={{ width: '100%', height: '650px', border: 'none', borderRadius: '4px' }}
                    id="inline-DyxSxyg62a1XFfVDTdZ3"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="1. SEO Audit Request"
                    data-height="614"
                    data-layout-iframe-id="inline-DyxSxyg62a1XFfVDTdZ3"
                    data-form-id="DyxSxyg62a1XFfVDTdZ3"
                    title="1. SEO Audit Request"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-6">
                  We'll respond within 24 hours. Or book a call directly using the button above.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
