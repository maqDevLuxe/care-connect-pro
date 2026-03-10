/* ===== Homepage ===== 
   14-section comprehensive telemedicine landing page.
*/

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import PartnerHospitals from "@/components/home/PartnerHospitals";
import PlatformFeatures from "@/components/home/PlatformFeatures";
import HowItWorks from "@/components/home/HowItWorks";
import DataSecurity from "@/components/home/DataSecurity";
import MedicalSpecialties from "@/components/home/MedicalSpecialties";
import TopDoctors from "@/components/home/TopDoctors";
import PromoVideoBanner from "@/components/home/PromoVideoBanner";
import PlatformCounters from "@/components/home/PlatformCounters";
import HealthBlog from "@/components/home/HealthBlog";
import MobileAppDownload from "@/components/home/MobileAppDownload";
import PatientReviews from "@/components/home/PatientReviews";
import BookConsultCTA from "@/components/home/BookConsultCTA";

const Index = () => (
  <PageLayout>
    {/* 1. Hero */}
    <HeroSection />
    {/* 2. Partner Hospitals */}
    <PartnerHospitals />
    {/* 3. Platform Features */}
    <PlatformFeatures />
    {/* 4. How It Works */}
    <HowItWorks />
    {/* 5. Data Security */}
    <DataSecurity />
    {/* 6. Medical Specialties */}
    <MedicalSpecialties />
    {/* 7. Top Doctors */}
    <TopDoctors />
    {/* 8. Promo Video */}
    <PromoVideoBanner />
    {/* 9. Counters */}
    <PlatformCounters />
    {/* 10. Blog */}
    <HealthBlog />
    {/* 11. Mobile App */}
    <MobileAppDownload />
    {/* 12. Reviews */}
    <PatientReviews />
    {/* 13. CTA */}
    <BookConsultCTA />
  </PageLayout>
);

export default Index;
