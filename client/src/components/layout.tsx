import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+977-1-4XXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <span>info@rajeshworiconstruction.com.np</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Follow us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm text-white font-bold text-xl group-hover:bg-secondary transition-colors">
                RC
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold font-heading text-primary group-hover:text-primary/80 transition-colors">RAJESHWORI</span>
                <span className="text-xs tracking-widest uppercase text-gray-500 font-medium">Construction Pvt. Ltd.</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors relative hover:text-secondary
                    ${location === link.href ? "text-secondary" : "text-gray-700"}
                  `}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-secondary" 
                    />
                  )}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide rounded-none px-6">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className={`text-lg font-medium py-2 border-b border-gray-50 ${
                    location === link.href ? "text-secondary" : "text-gray-800"
                  }`}>
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-secondary text-white mt-4">Get a Quote</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded-sm text-white font-bold">RC</div>
                <span className="text-xl font-bold font-heading">RAJESHWORI</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Leading construction company delivering quality, innovation, and trust across Nepal. 
                We build the foundation of tomorrow with safety and excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"><Facebook className="h-4 w-4" /></a>
                <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-gray-300 hover:text-secondary text-sm flex items-center gap-2 transition-colors">
                        <ChevronRight className="h-3 w-3 text-secondary" /> {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
              </h3>
              <ul className="space-y-3">
                {["Building Construction", "Roads & Highways", "Bridge Construction", "Structural Engineering", "Equipment Supply"].map((item) => (
                  <li key={item}>
                    <Link href="/services">
                      <a className="text-gray-300 hover:text-secondary text-sm flex items-center gap-2 transition-colors">
                        <ChevronRight className="h-3 w-3 text-secondary" /> {item}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-6 relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Kathmandu, Nepal<br/>(Exact location here)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-gray-300 text-sm">+977-1-4XXXXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-gray-300 text-sm">info@rajeshworiconstruction.com.np</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Rajeshwori Construction Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
