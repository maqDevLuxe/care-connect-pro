/* ===== How It Works (3 Steps) ===== */

import { UserPlus, CalendarCheck, Video } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const steps = [
  { icon: UserPlus, num: "01", title: "Create Account", desc: "Sign up in under 2 minutes with your basic health information." },
  { icon: CalendarCheck, num: "02", title: "Book Appointment", desc: "Choose your specialist, pick a time slot that works for you." },
  { icon: Video, num: "03", title: "Start Consultation", desc: "Connect with your doctor via secure HD video consultation." },
];

const HowItWorks = () => (
  <section className="section-padding medical-gradient-soft-bg">
    <div className="container-medical px-4">
      <SectionHeading badge="How It Works" title="Three Simple Steps" subtitle="Get started with your virtual consultation in minutes." />
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.2}>
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-2xl medical-gradient-bg flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-5xl font-display font-extrabold text-primary/10 absolute -top-2 left-1/2 -translate-x-1/2">{step.num}</span>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
