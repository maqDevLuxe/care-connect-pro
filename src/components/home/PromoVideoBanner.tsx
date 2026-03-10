/* ===== Promo Video Banner ===== */

import { Play } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const PromoVideoBanner = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <AnimatedSection>
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80"
            alt="Modern telemedicine technology"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-medical-navy/60 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 rounded-full medical-gradient-bg flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-xl">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
              See How MediConnect Works
            </h3>
            <p className="text-primary-foreground/80 max-w-md">
              Watch a 2-minute walkthrough of our telemedicine platform and discover how easy it is to connect with your doctor.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PromoVideoBanner;
