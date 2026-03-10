/* ===== Book Virtual Consult CTA ===== */

import { Button } from "@/components/ui/button";
import { Video, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const BookConsultCTA = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <AnimatedSection>
        <div className="rounded-3xl medical-gradient-bg p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Ready to See a Doctor?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Book your virtual consultation now and get expert medical advice from the comfort of your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 gap-2 px-8 font-semibold shadow-lg">
                <Video className="w-4 h-4" /> Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default BookConsultCTA;
