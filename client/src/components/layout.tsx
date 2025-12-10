import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoFull from "@assets/rc_logo_1765393880929.png";
import logoIcon from "@assets/rc_logo_only_1765393880928.png";

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
    { href: "/equipment", label: "Equipment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden lg:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Phone className="h-4 w-4 text-secondary group-hover:rotate-12 transition-transform" />
              <span className="group-hover:text-secondary transition-colors">+977-1-4XXXXXX</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Mail className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-secondary transition-colors">info@rajeshworiconstruction.com.np</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80 text-xs uppercase tracking-wider">Follow us</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary hover:-translate-y-1 transition-all duration-300"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:text-secondary hover:-translate-y-1 transition-all duration-300"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-secondary hover:-translate-y-1 transition-all duration-300"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-white py-4 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-2 group relative z-50">
              <img 
                src={logoFull} 
                alt="Rajeshwori Construction" 
                className={`transition-all duration-300 object-contain ${isScrolled ? "h-12" : "h-16"}`} 
              />
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`text-sm font-bold uppercase tracking-wide transition-colors relative hover:text-secondary py-2
                    ${location === link.href ? "text-secondary" : "text-gray-700"}
                  `}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary" 
                    />
                  )}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all duration-300 text-white font-bold uppercase tracking-wide rounded-none px-6 shadow-md shadow-secondary/20">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary relative z-50 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <Link key={link.href} href={link.href}>
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`text-2xl font-bold py-4 border-b border-gray-100 flex items-center justify-between group ${
                      location === link.href ? "text-secondary" : "text-gray-800"
                    }`}
                  >
                    {link.label}
                    <ArrowRight className={`h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-secondary`} />
                  </motion.a>
                </Link>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 space-y-4"
              >
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-secondary text-white font-bold text-lg py-6 shadow-lg shadow-secondary/30">Get a Quote</Button>
                </Link>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Info</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="h-5 w-5 text-secondary" />
                      <span>+977-1-4XXXXXX</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="h-5 w-5 text-secondary" />
                      <span>info@rajeshwori.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="h-5 w-5 text-secondary" />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow relative z-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-0 relative overflow-hidden">
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <img 
                  src={logoIcon} 
                  alt="RC Logo" 
                  className="h-14 w-auto object-contain bg-white rounded-md p-1.5 shadow-lg shadow-black/20" 
                />
                <div className="leading-none">
                  <span className="block text-xl font-bold font-heading text-white tracking-wide">RAJESHWORI</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Construction Pvt. Ltd.</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-secondary pl-4">
                Leading construction company delivering quality, innovation, and trust across Nepal. 
                We build the foundation of tomorrow.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:-translate-y-1 transition-all duration-300 rounded-md group"><Facebook className="h-4 w-4 group-hover:text-white" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:-translate-y-1 transition-all duration-300 rounded-md group"><Instagram className="h-4 w-4 group-hover:text-white" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:-translate-y-1 transition-all duration-300 rounded-md group"><Linkedin className="h-4 w-4 group-hover:text-white" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-gray-400 hover:text-secondary hover:translate-x-1 text-sm flex items-center gap-2 transition-all duration-300 group">
                        <ChevronRight className="h-3 w-3 text-secondary group-hover:opacity-100 opacity-50" /> {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {["Building Construction", "Roads & Highways", "Bridge Construction", "Structural Engineering", "Equipment Supply"].map((item) => (
                  <li key={item}>
                    <Link href="/services">
                      <a className="text-gray-400 hover:text-secondary hover:translate-x-1 text-sm flex items-center gap-2 transition-all duration-300 group">
                        <ChevronRight className="h-3 w-3 text-secondary group-hover:opacity-100 opacity-50" /> {item}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-6 relative inline-block">
                Contact Info
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors -mx-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <MapPin className="h-5 w-5 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Address</span>
                    <span className="text-white text-sm font-medium">Kathmandu, Nepal</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors -mx-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <Phone className="h-5 w-5 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Phone</span>
                    <span className="text-white text-sm font-medium">+977-1-4XXXXXX</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-colors -mx-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <Mail className="h-5 w-5 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Email</span>
                    <span className="text-white text-sm font-medium">info@rajeshwori.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Rajeshwori Construction Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs hover:underline underline-offset-4 decoration-secondary">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs hover:underline underline-offset-4 decoration-secondary">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Bridge Graphic at Bottom - Made subtle and crisp */}
        <div className="w-full h-32 mt-8 opacity-5 bg-repeat-x pointer-events-none" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='120' viewBox='0 0 1200 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 120L600 20L1200 120H0Z' fill='white'/%3E%3Cpath d='M100 120L600 40L1100 120' stroke='white' stroke-width='5'/%3E%3Cpath d='M200 120V105' stroke='white' stroke-width='5'/%3E%3Cpath d='M300 120V90' stroke='white' stroke-width='5'/%3E%3Cpath d='M400 120V75' stroke='white' stroke-width='5'/%3E%3Cpath d='M500 120V60' stroke='white' stroke-width='5'/%3E%3Cpath d='M600 120V45' stroke='white' stroke-width='5'/%3E%3Cpath d='M700 120V60' stroke='white' stroke-width='5'/%3E%3Cpath d='M800 120V75' stroke='white' stroke-width='5'/%3E%3Cpath d='M900 120V90' stroke='white' stroke-width='5'/%3E%3Cpath d='M1000 120V105' stroke='white' stroke-width='5'/%3E%3C/svg%3E")`,
          backgroundPosition: 'bottom center',
          backgroundSize: '1200px 100%'
        }}></div>
      </footer>
    </div>
  );
}
