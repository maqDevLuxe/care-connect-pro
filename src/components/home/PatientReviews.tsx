/* ===== Patient Reviews ===== */

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const reviews = [
  { name: "Emily Rodriguez", role: "Patient", text: "MediConnect saved me hours of waiting. I connected with a cardiologist in 10 minutes and got my prescription the same day.", rating: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "David Park", role: "Patient", text: "The video quality is amazing. My neurologist could examine me thoroughly through the platform. Highly recommended!", rating: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Lisa Thompson", role: "Patient", text: "As a busy mom, being able to get my kids seen by a pediatrician from home is a game-changer. The app is so easy to use.", rating: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
];

const PatientReviews = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <SectionHeading badge="Testimonials" title="What Our Patients Say" subtitle="Real stories from real patients who trust MediConnect." />
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <AnimatedSection key={r.name} delay={i * 0.1}>
            <div className="glass-card-hover rounded-2xl p-7 h-full flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">"{r.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-medical-warm text-medical-warm" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PatientReviews;
