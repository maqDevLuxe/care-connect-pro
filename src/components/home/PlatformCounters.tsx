/* ===== Platform Counters ===== */

import { useEffect, useState, useRef } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const counters = [
  { value: 12847, label: "Consults Today", suffix: "+" },
  { value: 3200, label: "Active Doctors", suffix: "+" },
  { value: 98, label: "Patient Satisfaction", suffix: "%" },
  { value: 150, label: "Countries Served", suffix: "+" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
}

const CounterItem = ({ value, label, suffix, inView }: { value: number; label: string; suffix: string; inView: boolean }) => {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-5xl font-display font-extrabold text-primary-foreground">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-primary-foreground/70 text-sm mt-2">{label}</p>
    </div>
  );
};

const PlatformCounters = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 medical-gradient-bg">
      <div className="container-medical px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((c) => (
            <AnimatedSection key={c.label}>
              <CounterItem {...c} inView={inView} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCounters;
