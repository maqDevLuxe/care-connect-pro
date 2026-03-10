/* ===== Medical Specialties Grid ===== */

import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Pill, Activity } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Link } from "react-router-dom";

const specialties = [
  { icon: Heart, name: "Cardiology", count: "45 Doctors" },
  { icon: Brain, name: "Neurology", count: "32 Doctors" },
  { icon: Bone, name: "Orthopedics", count: "28 Doctors" },
  { icon: Eye, name: "Ophthalmology", count: "22 Doctors" },
  { icon: Baby, name: "Pediatrics", count: "38 Doctors" },
  { icon: Stethoscope, name: "General Medicine", count: "52 Doctors" },
  { icon: Pill, name: "Dermatology", count: "26 Doctors" },
  { icon: Activity, name: "Psychiatry", count: "30 Doctors" },
];

const MedicalSpecialties = () => (
  <section className="section-padding medical-gradient-soft-bg">
    <div className="container-medical px-4">
      <SectionHeading badge="Specialties" title="Browse Medical Specialties" subtitle="Find the right specialist for your healthcare needs." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {specialties.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.05}>
            <Link to="/specialties" className="glass-card-hover rounded-2xl p-6 text-center block">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{s.name}</h3>
              <p className="text-xs text-muted-foreground">{s.count}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MedicalSpecialties;
