import AnimatedSection from "./AnimatedSection";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: Props) => (
  <AnimatedSection className={`mb-14 ${center ? "text-center" : ""}`}>
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase medical-gradient-bg text-primary-foreground mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-display font-bold text-foreground leading-tight">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
