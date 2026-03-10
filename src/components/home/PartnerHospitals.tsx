/* ===== Partner Hospitals ===== */

import AnimatedSection from "@/components/shared/AnimatedSection";

const partners = [
  "Mayo Clinic", "Cleveland Clinic", "Johns Hopkins", "Mass General", "Stanford Health", "Mount Sinai"
];

const PartnerHospitals = () => (
  <section className="py-12 border-b border-border">
    <div className="container-medical px-4">
      <AnimatedSection>
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
          Trusted by Leading Healthcare Institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {partners.map((name) => (
            <div key={name} className="text-lg font-display font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-default">
              {name}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PartnerHospitals;
