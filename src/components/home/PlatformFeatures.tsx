/* ===== Platform Features ===== */

import { Video, Shield, Brain, Pill, FileText, HeartPulse } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const features = [
  { icon: Video, title: "HD Video Consults", desc: "Crystal clear video with adaptive bitrate for seamless doctor-patient communication." },
  { icon: Shield, title: "End-to-End Encryption", desc: "Military-grade encryption ensures your health data remains private and secure." },
  { icon: Brain, title: "AI Symptom Checker", desc: "AI-powered pre-screening helps route you to the right specialist faster." },
  { icon: Pill, title: "E-Prescriptions", desc: "Digital prescriptions sent directly to your preferred pharmacy." },
  { icon: FileText, title: "Health Records", desc: "Access your complete medical history in one unified digital platform." },
  { icon: HeartPulse, title: "Vital Monitoring", desc: "Real-time vitals tracking integrated with popular wearable devices." },
];

const PlatformFeatures = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <SectionHeading badge="Features" title="Built for Modern Healthcare" subtitle="Everything you need for a complete telemedicine experience, all in one platform." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="glass-card-hover rounded-2xl p-7 h-full">
              <div className="w-12 h-12 rounded-xl medical-gradient-bg flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
