/* ===== Data Security Section ===== */

import { Shield, Lock, Server, Eye } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const securityFeatures = [
  { icon: Lock, title: "256-bit AES Encryption", desc: "All data encrypted at rest and in transit." },
  { icon: Shield, title: "HIPAA Compliant", desc: "Fully compliant with US healthcare privacy regulations." },
  { icon: Server, title: "SOC 2 Type II", desc: "Independently audited security controls." },
  { icon: Eye, title: "Zero-Knowledge Architecture", desc: "We never access your unencrypted health data." },
];

const DataSecurity = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection direction="left">
          <SectionHeading badge="Security" title="Your Health Data Is Fortress-Protected" subtitle="Enterprise-grade security ensuring your most sensitive information stays private." center={false} />
          <div className="grid sm:grid-cols-2 gap-5">
            {securityFeatures.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-foreground">{f.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=700&q=80"
              alt="Data security visualization"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 rounded-2xl medical-gradient-bg opacity-10" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default DataSecurity;
