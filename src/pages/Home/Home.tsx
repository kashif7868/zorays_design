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

import "../../assets/css/home/home.css";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-section home-section--hero">
        <HeroSection />
      </section>

      <section className="home-section">
        <ServicesOverview />
      </section>

      <section className="home-section home-section--soft">
        <SolarSectorAccordion />
      </section>

      <section className="home-section home-section--green-soft">
        <ZoraysTrustPromise />
      </section>

      <section className="home-section home-section--form">
        <MultiStepForm />
      </section>

      <section className="home-section">
        <ShopSection />
      </section>

      <section className="home-section home-section--soft">
        <ClientTestimonials />
      </section>

      <section className="home-section">
        <BlogSection />
      </section>

      <section className="home-section home-section--soft">
        <FaqSection />
      </section>

      <section className="home-section home-section--final">
        <CompanyTrustSection />
      </section>
    </main>
  );
};

export default Home;