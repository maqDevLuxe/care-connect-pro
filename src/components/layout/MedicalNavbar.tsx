/* ===== Medical Navbar ===== 
   Consistent header across all pages.
   Features: Logo, nav links, CTA button, mobile hamburger menu.
*/

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Doctors", path: "/doctors" },
  { label: "Specialties", path: "/specialties" },
  { label: "Portal", path: "/portal" },
];

const MedicalNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border/50">
      {/* Top bar */}
      <div className="medical-gradient-bg">
        <div className="container-medical flex items-center justify-between py-1.5 px-4 text-primary-foreground text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Support: 1-800-MEDI-CARE</span>
          </div>
          <span className="hidden md:block">Virtual consultations available now</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-medical flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl medical-gradient-bg flex items-center justify-center">
            <Video className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-lg font-display font-bold text-foreground">Medi<span className="medical-gradient-text">Connect</span></span>
            <p className="text-[10px] text-muted-foreground -mt-1 tracking-wider uppercase">Telemedicine Platform</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm" className="medical-gradient-bg border-0 text-primary-foreground hover:opacity-90">
            Book Consult
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="medical-gradient-bg border-0 text-primary-foreground mt-2">
                Book Consult
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MedicalNavbar;
