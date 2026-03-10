/* ===== Patient Portal Page ===== */

import { Calendar, FileText, Clock, User, Video, Pill, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";

const portalFeatures = [
  { icon: Calendar, title: "Appointments", desc: "View upcoming and past appointments. Schedule new consultations with your preferred doctor.", color: "bg-accent" },
  { icon: FileText, title: "Medical Records", desc: "Access your complete health history, lab results, and doctor notes in one place.", color: "bg-medical-teal-light" },
  { icon: Pill, title: "Prescriptions", desc: "View active prescriptions, request refills, and track pharmacy orders.", color: "bg-accent" },
  { icon: MessageSquare, title: "Messages", desc: "Secure messaging with your healthcare providers for follow-up questions.", color: "bg-medical-teal-light" },
  { icon: Video, title: "Virtual Visits", desc: "Join your scheduled video consultation directly from the portal.", color: "bg-accent" },
  { icon: Settings, title: "Account Settings", desc: "Manage your profile, insurance information, and notification preferences.", color: "bg-medical-teal-light" },
];

const upcomingAppointments = [
  { doctor: "Dr. Sarah Chen", specialty: "Cardiology", date: "Mar 10, 2026", time: "10:00 AM", type: "Video" },
  { doctor: "Dr. Robert Kim", specialty: "Psychiatry", date: "Mar 15, 2026", time: "2:30 PM", type: "Video" },
  { doctor: "Dr. Amanda Foster", specialty: "Dermatology", date: "Mar 22, 2026", time: "11:00 AM", type: "Video" },
];

const PortalPage = () => (
  <PageLayout>
    <section className="medical-gradient-bg py-16 text-center">
      <div className="container-medical px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-3">Patient Portal</h1>
        <p className="text-primary-foreground/80 max-w-md mx-auto">Manage your healthcare journey from one convenient dashboard.</p>
      </div>
    </section>

    {/* Quick Stats */}
    <section className="py-10 border-b border-border">
      <div className="container-medical px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: "Upcoming", value: "3" },
            { icon: FileText, label: "Records", value: "24" },
            { icon: Pill, label: "Active Rx", value: "5" },
            { icon: Clock, label: "Next Visit", value: "2 days" },
          ].map((stat) => (
            <AnimatedSection key={stat.label}>
              <div className="glass-card rounded-xl p-5 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Upcoming Appointments */}
    <section className="section-padding">
      <div className="container-medical px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((apt, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="glass-card-hover rounded-xl p-5 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground">{apt.doctor}</h4>
                        <p className="text-sm text-primary">{apt.specialty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{apt.date}</p>
                      <p className="text-xs text-muted-foreground">{apt.time} • {apt.type}</p>
                    </div>
                    <Button size="sm" className="medical-gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2">
                      <Video className="w-3.5 h-3.5" /> Join
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Portal Features */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Quick Access</h2>
            <div className="space-y-3">
              {portalFeatures.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 0.05}>
                  <button className="w-full glass-card-hover rounded-xl p-4 flex items-center gap-4 text-left">
                    <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center shrink-0`}>
                      <f.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-foreground">{f.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{f.desc}</p>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PortalPage;
