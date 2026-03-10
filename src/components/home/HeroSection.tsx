/* ===== Hero Section ===== 
   Full-width hero with platform UI mockup, headline, and CTA.
*/

import { Button } from "@/components/ui/button";
import { Video, Shield, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden medical-gradient-soft-bg">
      <div className="container-medical px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card text-primary text-xs font-semibold border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-gentle" />
              Live Consultations Available
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
              Premium<br />
              <span className="medical-gradient-text">Telemedicine</span><br />
              At Your Fingertips
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Connect with world-class doctors through secure HD video consultations. Get diagnosed, treated, and prescribed — all from home.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" className="medical-gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2 px-8">
                <Video className="w-4 h-4" /> Start Consultation
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Specialties
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {[
                { icon: Shield, text: "HIPAA Compliant" },
                { icon: Clock, text: "24/7 Available" },
                { icon: Star, text: "4.9★ Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Doctor performing telemedicine video consultation"
                className="w-full h-auto"
              />
              {/* Floating UI elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 glass-card rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  Live Session
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-6 left-6 glass-card rounded-xl px-4 py-3"
              >
                <div className="text-xs text-muted-foreground mb-1">Connection Quality</div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className={`w-1.5 rounded-full ${i <= 4 ? 'bg-secondary h-4' : 'bg-border h-2'}`} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
