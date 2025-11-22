import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "./NavLink";
import logo from "@/assets/vision-crafters-logo.png";
import { servicesCatalog } from "@/data/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialColors = [
    { icon: MessageCircle, href: "https://wa.me/919626051320", hoverColor: "hover:text-green-500 hover:bg-green-500/10", name: "WhatsApp" },
    { icon: Mail, href: "mailto:info@visioncrafters.co.in", hoverColor: "hover:text-red-500 hover:bg-red-500/10", name: "Gmail" },
    { icon: Instagram, href: "https://www.instagram.com/vision.crafters_?igsh=MTg5YXduYW55N3M1bQ==", hoverColor: "hover:text-pink-500 hover:bg-pink-500/10", name: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/vision-crafters-co-in/", hoverColor: "hover:text-blue-600 hover:bg-blue-600/10", name: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-card border-t border-primary/15 overflow-hidden text-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vision Crafters" className="h-10 w-auto" />
              <span className="text-xl font-bold gradient-text">Vision Crafters</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shaping your vision into reality with world-class digital solutions. We craft websites, apps, and software that transform businesses.
            </p>
            <div className="flex gap-4 pt-2">
              {socialColors.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Why Us", path: "/why-us" },
                { name: "Services", path: "/services" },
                { name: "Internships", path: "/internships" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-3 text-secondary">Our Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              {servicesCatalog.map((service) => (
                <li key={service.slug}>
                  <NavLink
                    to={`/services?focus=${service.slug}`}
                    className="hover:text-secondary transition-colors cursor-pointer"
                  >
                    {service.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-3 text-accent">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@visioncrafters.co.in" className="hover:text-primary transition-colors font-medium">
                  info@visioncrafters.co.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <a href="tel:+919626051320" className="hover:text-secondary transition-colors font-medium">
                  +91 96260 51320
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-medium">Coimbatore, TamilNadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-muted-foreground">
            <p className="font-medium">© {currentYear} Vision Crafters. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
