/* ===== Specialties Page ===== */

import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Pill, Activity, Ear, Scissors, Dna, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Link } from "react-router-dom";

const specialties = [
  { icon: Heart, name: "Cardiology", desc: "Heart and cardiovascular system diagnosis and treatment.", doctors: 45, img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80" },
  { icon: Brain, name: "Neurology", desc: "Brain, spinal cord, and nervous system disorders.", doctors: 32, img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80" },
  { icon: Bone, name: "Orthopedics", desc: "Bones, joints, muscles, and musculoskeletal system.", doctors: 28, img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80" },
  { icon: Eye, name: "Ophthalmology", desc: "Eye care, vision problems, and ocular diseases.", doctors: 22, img: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&q=80" },
  { icon: Baby, name: "Pediatrics", desc: "Healthcare for infants, children, and adolescents.", doctors: 38, img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80" },
  { icon: Stethoscope, name: "General Medicine", desc: "Primary care, check-ups, and general health.", doctors: 52, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80" },
  { icon: Pill, name: "Dermatology", desc: "Skin conditions, rashes, acne, and cosmetic concerns.", doctors: 26, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { icon: Activity, name: "Psychiatry", desc: "Mental health, anxiety, depression, and behavioral therapy.", doctors: 30, img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
  { icon: Ear, name: "ENT", desc: "Ear, nose, and throat conditions and treatment.", doctors: 18, img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80" },
  { icon: Scissors, name: "General Surgery", desc: "Surgical consultation and post-operative care.", doctors: 24, img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80" },
  { icon: Dna, name: "Oncology", desc: "Cancer screening, diagnosis, and treatment planning.", doctors: 20, img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80" },
  { icon: Thermometer, name: "Endocrinology", desc: "Hormonal disorders, diabetes, and thyroid conditions.", doctors: 16, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
];

const SpecialtiesPage = () => (
  <PageLayout>
    <section className="medical-gradient-bg py-16 text-center">
      <div className="container-medical px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3">Medical Specialties</h1>
        <p className="text-primary-foreground/80 max-w-md mx-auto">Explore our wide range of medical specialties and find the care you need.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-medical px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s, i) => (
            <AnimatedSection key={s.name} delay={i * 0.05}>
              <div className="glass-card-hover rounded-2xl overflow-hidden group">
                <div className="relative h-40 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 medical-gradient-bg opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <s.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{s.doctors} Doctors Available</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/doctors">View Doctors</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default SpecialtiesPage;
