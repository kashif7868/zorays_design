import HeroSection from "./HeroSection";
import ServicesOverview from "./Servicesoverview";
import SolarSectorAccordion from "./SolarSectorAccordion";
import ZoraysTrustPromise from "./ZoraysTrustPromise";
import ClientTestimonials from "./ClientTestimonials";
import BlogSection from "./BlogSection";
import MultiStepForm from "./MultiStepForm";
import ShopSection from "./ShopSection";
import FaqSection from "./FaqSection";
import CompanyTrustSection from "./CompanyTrustSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <SolarSectorAccordion />
      <MultiStepForm />
      <ShopSection />
      <ZoraysTrustPromise />
      <BlogSection />
      <FaqSection />
      <ClientTestimonials />
      <CompanyTrustSection />
    </main>
  );
};

export default Home;