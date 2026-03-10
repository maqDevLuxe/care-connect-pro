/* ===== Health & Wellness Blog ===== */

import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const posts = [
  { title: "5 Ways Telemedicine Is Changing Healthcare in 2026", category: "Telehealth", date: "Mar 5, 2026", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80" },
  { title: "Understanding Your Mental Health: A Complete Guide", category: "Mental Health", date: "Mar 3, 2026", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80" },
  { title: "Heart Health Tips From Leading Cardiologists", category: "Cardiology", date: "Feb 28, 2026", img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500&q=80" },
];

const HealthBlog = () => (
  <section className="section-padding">
    <div className="container-medical px-4">
      <SectionHeading badge="Blog" title="Health & Wellness Insights" subtitle="Expert advice and latest trends in telemedicine." />
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.1}>
            <article className="glass-card-hover rounded-2xl overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-accent px-2.5 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HealthBlog;
