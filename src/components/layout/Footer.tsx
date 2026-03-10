/* ===== Footer ===== 
   Consistent footer across all pages.
   Multi-column layout with links, contact info, social icons.
*/

import { Link } from "react-router-dom";
import { Video, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-navy text-primary-foreground/80">
      <div className="container-medical px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl medical-gradient-bg flex items-center justify-center">
                <Video className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-display font-bold text-primary-foreground">MediConnect</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premium telemedicine connecting patients with top healthcare professionals worldwide. Secure, reliable, and accessible.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[["Home", "/"], ["Find Doctors", "/doctors"], ["Specialties", "/specialties"], ["Patient Portal", "/portal"], ["About Us", "#"], ["Contact", "#"]].map(([label, path]) => (
                <li key={label}><Link to={path} className="hover:text-primary-foreground transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["Video Consultation", "Second Opinion", "Prescription Refill", "Mental Health", "Chronic Care", "Lab Results"].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary-foreground transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5 text-primary" /><span>1-800-MEDI-CARE</span></div>
              <div className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-primary" /><span>support@mediconnect.com</span></div>
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary" /><span>123 Health St, Medical City, MC 10001</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-medical px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 MediConnect. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
