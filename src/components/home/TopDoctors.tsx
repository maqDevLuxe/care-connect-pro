/* ===== Top Rated Doctor Profiles ===== */

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Link } from "react-router-dom";

const doctors = [
  { name: "Dr. Sarah Chen", specialty: "Cardiology", rating: 4.9, reviews: 284, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80", available: true },
  { name: "Dr. James Wilson", specialty: "Neurology", rating: 4.8, reviews: 196, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80", available: true },
  { name: "Dr. Priya Patel", specialty: "Pediatrics", rating: 4.9, reviews: 312, img: "https://images.unsplash.com/photo-1594824476967-48c8b964ef56?w=400&q=80", available: false },
  { name: "Dr. Michael Brown", specialty: "Orthopedics", rating: 4.7, reviews: 178, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80", available: true },
];

const TopDoctors = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <SectionHeading badge="Top Rated" title="Meet Our Expert Doctors" subtitle="Board-certified specialists with proven track records." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <AnimatedSection key={doc.name} delay={i * 0.1}>
            <div className="glass-card-hover rounded-2xl overflow-hidden">
              <div className="relative">
                <img src={doc.img} alt={doc.name} className="w-full h-56 object-cover" />
                {doc.available && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-semibold">
                    Available Now
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground">{doc.name}</h3>
                <p className="text-sm text-primary mb-2">{doc.specialty}</p>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-3.5 h-3.5 fill-medical-warm text-medical-warm" />
                  <span className="text-sm font-medium text-foreground">{doc.rating}</span>
                  <span className="text-xs text-muted-foreground">({doc.reviews} reviews)</span>
                </div>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link to="/doctors">Book Consult</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TopDoctors;
