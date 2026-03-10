/* ===== Doctors Page ===== 
   Browse and filter doctor profiles.
*/

import { useState } from "react";
import { Star, Video, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const allDoctors = [
  { name: "Dr. Sarah Chen", specialty: "Cardiology", rating: 4.9, reviews: 284, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80", available: true, experience: "15 years", fee: "$120" },
  { name: "Dr. James Wilson", specialty: "Neurology", rating: 4.8, reviews: 196, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80", available: true, experience: "12 years", fee: "$150" },
  { name: "Dr. Priya Patel", specialty: "Pediatrics", rating: 4.9, reviews: 312, img: "https://images.unsplash.com/photo-1594824476967-48c8b964ef56?w=400&q=80", available: false, experience: "10 years", fee: "$100" },
  { name: "Dr. Michael Brown", specialty: "Orthopedics", rating: 4.7, reviews: 178, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80", available: true, experience: "18 years", fee: "$140" },
  { name: "Dr. Amanda Foster", specialty: "Dermatology", rating: 4.8, reviews: 225, img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80", available: true, experience: "8 years", fee: "$110" },
  { name: "Dr. Robert Kim", specialty: "Psychiatry", rating: 4.9, reviews: 340, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80", available: true, experience: "20 years", fee: "$160" },
  { name: "Dr. Maria Santos", specialty: "General Medicine", rating: 4.6, reviews: 410, img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80", available: false, experience: "14 years", fee: "$90" },
  { name: "Dr. Daniel Lee", specialty: "Cardiology", rating: 4.8, reviews: 198, img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80", available: true, experience: "11 years", fee: "$130" },
];

const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "Psychiatry", "General Medicine"];

const DoctorsPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allDoctors : allDoctors.filter(d => d.specialty === filter);

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="medical-gradient-bg py-16 text-center">
        <div className="container-medical px-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3">Find Your Doctor</h1>
          <p className="text-primary-foreground/80 max-w-md mx-auto">Browse our network of board-certified specialists available for virtual consultations.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-medical px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <Filter className="w-4 h-4 text-muted-foreground mt-2" />
            {specialties.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === s
                    ? "medical-gradient-bg text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((doc, i) => (
              <AnimatedSection key={doc.name} delay={i * 0.05}>
                <div className="glass-card-hover rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img src={doc.img} alt={doc.name} className="w-full h-56 object-cover" />
                    {doc.available && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-semibold">
                        Available
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground">{doc.name}</h3>
                    <p className="text-sm text-primary mb-1">{doc.specialty}</p>
                    <p className="text-xs text-muted-foreground mb-2">{doc.experience} experience</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-medical-warm text-medical-warm" />
                        <span className="text-sm font-medium">{doc.rating}</span>
                        <span className="text-xs text-muted-foreground">({doc.reviews})</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{doc.fee}</span>
                    </div>
                    <Button size="sm" className="w-full medical-gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2">
                      <Video className="w-3.5 h-3.5" /> Book Consult
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DoctorsPage;
