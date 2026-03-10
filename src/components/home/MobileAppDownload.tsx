/* ===== Mobile App Download ===== */

import { Smartphone, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

const MobileAppDownload = () => (
  <section className="section-padding medical-gradient-soft-bg">
    <div className="container-medical px-4">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection direction="left">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase medical-gradient-bg text-primary-foreground mb-4">
            Mobile App
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Healthcare In Your Pocket
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
            Download our mobile app for instant access to consultations, prescriptions, and health records — anytime, anywhere.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="medical-gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2">
              <Apple className="w-5 h-5" /> App Store
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Smartphone className="w-5 h-5" /> Google Play
            </Button>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="relative flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80"
              alt="Mobile health app on smartphone"
              className="rounded-3xl shadow-2xl w-72 h-auto"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default MobileAppDownload;
