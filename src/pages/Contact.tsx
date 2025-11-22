import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Integration
    const whatsappMessage = `Hello Vision Crafters!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919626051320?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll respond to your message shortly!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const reviewLink = "https://share.google/PSPNeT7MsTKG6EMyh";
  const feedbackLink = "https://g.page/r/CSlAW1Lr5OPvEBE/review";

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@visioncrafters.co.in",
      link: "mailto:info@visioncrafters.co.in",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 96260 51320",
      link: "tel:+919626051320",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Ukkadam, Coimbatore,TamilNadu",
      link: "https://maps.app.goo.gl/ZY6JH8A7woB4UuR4A",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-background animated-bg">
      <div className="container mx-auto px-4 relative z-10 space-y-10">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 max-w-6xl mx-auto">
          {/* Contact Form + Reviews */}
          <div className="flex flex-col gap-6">
            <div className="premium-card p-5 md:p-6 space-y-5">
              <h2 className="text-2xl font-bold">
                <span className="gradient-text">Send Us a Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                    <Input
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g., Website Development"
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            <div className="premium-card p-5 md:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Reviews</p>
                  <h3 className="text-xl font-bold mt-1">Hear from our clients</h3>
                </div>
                <div className="flex gap-0.5 text-amber-400 text-lg" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                “Our team reads every review to shape new features, mentor future interns, and keep our service
                playbooks sharp. Your voice directly influences what we build next.”
              </p>
              <div className="text-xs text-muted-foreground">— Team Vision Crafters</div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="flex-1 font-semibold">
                  <a href={feedbackLink} target="_blank" rel="noopener noreferrer">
                    Add Your Review
                  </a>
                </Button>
                <Button variant="ghost" className="flex-1 font-semibold text-primary" asChild>
                  <a href={reviewLink} target="_blank" rel="noopener noreferrer">
                    See Community Stories
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="premium-card p-6 md:p-7 space-y-5">
              <h3 className="text-2xl font-bold">
                <span className="gradient-text">Contact Information</span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/60 transition-all group hover:-translate-y-0.5"
                  >
                    <info.icon className="w-7 h-7 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">{info.title}</div>
                      <div className="text-muted-foreground text-sm">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="premium-card p-6 md:p-7 text-center space-y-3">
              <MessageCircle className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-2xl font-bold">Prefer WhatsApp?</h3>
              <p className="text-muted-foreground">
                Chat with us directly for instant responses
              </p>
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                asChild
              >
                <a href="https://wa.me/919626051320" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Google Maps */}
            <div className="premium-card p-1.5 h-72 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.903086197706!2d76.9648193!3d10.963918099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefe3e4eb525b4029!2sVision%20Crafters!5e0!3m2!1sen!2sin!4v1700000000000"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '0.5rem' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Vision Crafters Location"
  />
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
