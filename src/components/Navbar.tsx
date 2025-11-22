import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/vision-crafters-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Why Us", path: "/why-us" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Internships", path: "/internships" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Vision Crafters" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">Vision Crafters</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                {link.name}
              </NavLink>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="font-semibold"
            >
              <a
                href="https://forms.gle/PKLjH1GEC54Z4WGZ9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Project
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border border-border rounded-xl p-6 mb-4 animate-slide-up shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
                  activeClassName="text-foreground"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />
                <Button
                  asChild
                  className="flex-1 font-semibold"
                >
                  <a
                    href="https://forms.gle/PKLjH1GEC54Z4WGZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start a Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
